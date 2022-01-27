const express = require('express');
const router = express.Router();
const productsApiController = require('../../controllers/api/productsApiController');

const corsMiddleware = require('../../middlewares/corsMiddleware');


router.get('/', corsMiddleware, productsApiController.list);

router.get('/:id', corsMiddleware, productsApiController.detail);

module.exports = router;