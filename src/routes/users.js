const express = require('express');
const router = express.Router();

const controller = require('../controllers/usersController');

const uploadFile = require('../middlewares/multerMW');
const validations = require('../middlewares/validateRegisterMW');

router.get('/register', controller.register);

router.post('/register', uploadFile.single('avatar'), validations, controller.processRegister);

router.get('/login', controller.login);

router.post('/login', controller.processLogin);

module.exports = router;