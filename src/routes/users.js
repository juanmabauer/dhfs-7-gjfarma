const express = require('express');
const router = express.Router();

const controller = require('../controllers/usersController');

const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const guestMiddleware = require('../middlewares/guestMiddleware');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/register', guestMiddleware, controller.register);

router.post('/register', uploadFile.single('avatar'), validations, controller.processRegister);

router.get('/login', controller.login);

router.post('/login', controller.processLogin);

router.get('/profile/:id', authMiddleware, controller.profile);

router.get('/logout', controller.logout);

module.exports = router;