const path = require('path');
const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const userSession = require('../models/User');

let controller = {
    register: (req,res)=>{
        res.render('users/registry');
    },
    processRegister: function (req, res) {
        const resultValidation = validationResult(req);
        
        if(resultValidation.errors.length > 0) {
            res.render('users/registry', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }
        let userInDB = userSession.findByField('email', req.body.email);

		if (userInDB) {
			return res.render('users/registry', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: (req.file && req.file.filename) ? req.file.filename : 'default-img-user.png',
			isAdmin: false
		}

		let userCreated = userSession.create(userToCreate);

		 res.redirect('profile/'+userCreated.id);
    },
	profile:(req,res)=>{
		let id= parseInt(req.params.id);
        let userProfile= userSession.findByPk(id);
        res.render('users/profile', {user:userProfile})
	},
    login: (req,res)=>{
        res.render('users/login');
    },
    processLogin: (req, res) => {
		let userToLogin = userSession.findByField('email', req.body.email);
		
		if(userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;
				req.session.isAdmin = userToLogin.isAdmin;

				if(req.body.remember) {
					res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 })
				}

				 res.redirect('/');
			} 
			return res.render('users/login', {
				errors: {
					password: {
						msg: 'Contraseña incorrecta'
					}
				}
			});
		}

		return res.render('users/login', {
			errors: {
				email: {
					msg: 'No se encuentra este email en nuestra base de datos'
				}
			}
		});
	},
	logout: (req,res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	}
}

module.exports = controller;