const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('first_name').isLength({min: 2}).withMessage('Tienes que escribir un nombre mayor a 2 carácteres'),
	body('last_name').isLength({min: 2}).withMessage('Tienes que escribir un apellido'),
	body('email').isEmail().withMessage('Tienes que escribir un correo electrónico válido'),
	body('password').isLength({min: 8}).withMessage('Tienes que escribir una contraseña mayor a 8 carácteres'),
	body('avatar').custom((value, { req }) => {
		let file = req.file;
		let acceptedExtensions = ['.jpg', '.jpeg', '.png', '.gif'];

		if (file) {
			let fileExtension = path.extname(file.originalname);
			if (!acceptedExtensions.includes(fileExtension)) {
				throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`);
			}
		}

		return true;
	})
]