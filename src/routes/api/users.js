const express = require('express');
const router = express.Router();
const usersApiController = require('../../controllers/api/usersApiController');

const corsMiddleware = require('../../middlewares/corsMiddleware');

router.get('/', corsMiddleware, usersApiController.list);

router.get('/:id', corsMiddleware, usersApiController.detail);

module.exports = router;