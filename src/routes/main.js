const express = require('express');
const router = express.Router();
const controller = require('../controllers/mainController');

router.get('/', controller.home);
router.get('/faq', controller.faq);
router.get('/pickup', controller.pickup);
router.get('/contact', controller.contact);
router.get('/aboutus', controller.aboutus);
router.get('/workwithus', controller.workwithus);

module.exports = router;