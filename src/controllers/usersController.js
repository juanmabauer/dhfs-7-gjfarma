const {validationResult} = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');

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
        let userInDB = db.User.findByPk(req.body.email);

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

		let userCreated = db.User.create(userToCreate);

		 res.redirect('profile/'+userCreated.id);
    },
	profile:(req,res)=>{
		let id= parseInt(req.params.id);
        let userProfile= db.User.findByPk(id);
        res.render('users/profile', {user:userProfile})
	},
    login: (req,res)=>{
        res.render('users/login');
    },
    processLogin: (req, res) => {
		let userToLogin = db.User.findByPk(req.body.email);
		
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
	},
//getData: function () {
//		return JSON.parse(fs.readFileSync(this.fileName, 'utf-8'));
//	},
//
//	generateId: function () {
//		let allUsers = this.findAll();
//		let lastUser = allUsers.pop();
//		if (lastUser) {
//			return lastUser.id + 1;
//		}
//		return 1;
//	},
//	findAll: function () {
//		return this.getData();
//	},
//
//	findByPk: function (id) {
//		let allUsers = this.findAll();
//		let userFound = allUsers.find(oneUser => oneUser.id === id);
//		return userFound;
//	},
//
//	findByField: function (field, text) {
//		let allUsers = this.findAll();
//		let userFound = allUsers.find(oneUser => oneUser[field] === text);
//		return userFound;
//	},
//
//	create: (req, res)=> {
//		db.User.create({...req.body, image: (req.file && req.file.filename) ? req.file.filename : 'default-img-user.png'})
//		res.redirect('/users/profile/:id')
//	},
	
	delete: (req,res)=>{
		db.User.destroy({where:{id:req.params.id}})
		res.redirect('/products/crud')
	}
}

module.exports = controller;