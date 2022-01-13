const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');
const db = require('../database/models');

let controller = {
	register: (req, res) => {
		res.render('users/registry');
	},
	processRegister: async function (req, res) {
		const resultValidation = validationResult(req);

		if (resultValidation.errors.length > 0) {
			res.render('users/registry', {
				errors: resultValidation.mapped(),
				oldData: req.body
			});
		}
		let userInDB = await db.User.findOne({ where: { email: req.body.email } });
		
		if (userInDB !== null) {
			return res.render('users/registry', {
				errors: {
					email: {
						msg: 'Este email ya está registrado'
					}
				},
				oldData: req.body
			});
		}

		let customerRol = await db.Rol.findOne({ where: { name: 'customer' } })

		let userToCreate = {
			...req.body,
			password: bcryptjs.hashSync(req.body.password, 10),
			avatar: (req.file && req.file.filename) ? req.file.filename : 'default-img-user.png',
			rol_id: customerRol.id,
			isAdmin: false
		}

		await db.User.create(userToCreate);

		res.redirect('profile');
	},
	profile: async (req, res) => {
		res.render('users/profile', { user: req.session.userLogged, isAdmin: req.session.isAdmin })
	},
	login: (req, res) => {
		res.render('users/login');
	},
	processLogin: async (req, res) => {
		let userToLogin = await db.User.findOne({ where: { email: req.body.email }, include: ['rol'] });

		if (userToLogin) {
			let isOkThePassword = bcryptjs.compareSync(req.body.password, userToLogin.password);
			if (isOkThePassword) {
				delete userToLogin.password;
				req.session.userLogged = userToLogin;
				req.session.isAdmin = userToLogin.rol.name == "admin";

				if (req.body.remember) {
					res.cookie('userEmail', req.body.email, { maxAge: 1000 * 60 })
				}

				res.redirect('/');
				return;
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
	logout: (req, res) => {
		res.clearCookie('userEmail');
		req.session.destroy();
		return res.redirect('/');
	},
	delete: (req, res) => {
		db.User.destroy({ where: { id: req.params.id } })
		res.redirect('/products/crud')
	}
}

module.exports = controller;