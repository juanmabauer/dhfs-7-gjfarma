const express = require('express');
const router = express.Router();
const categoriesApiController = require('../../controllers/api/categoriesApiController');

const corsMiddleware = require('../../middlewares/corsMiddleware');


router.get('/', corsMiddleware, categoriesApiController.list);

router.get('/:id', corsMiddleware, categoriesApiController.detail);

module.exports = router;