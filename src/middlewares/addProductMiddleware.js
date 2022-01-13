const path = require('path');
const { body } = require('express-validator');

module.exports = [
	body('name').isLength({min: 5}).withMessage('Tienes que escribir un nombre mayor a 5 carácteres'),
    body('stock').isNumeric().withMessage('Tienes que ingresar un stock numérico'),
	body('price').isNumeric().withMessage('Tienes que ingresar un precio numérico'),
    body('description').isLength({min: 20}).withMessage('Tienes que escribir una descripción mayor a 20 carácteres'),
	body('image').custom((value, { req }) => {
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