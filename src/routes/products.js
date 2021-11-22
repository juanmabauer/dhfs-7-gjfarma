const express = require('express');
const router = express.Router();
const multer  = require('multer');
const path = require ('path');
const controller = require('../controllers/productController');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname, '../../public/images/products'));
    },
    filename: function (req, file, cb) {
        const name = `product-${Date.now()}${path.extname(file.originalname)}`
        cb(null, name)
    }
});
const authMiddleware = require('../middlewares/authMiddleware');

const upload = multer ({storage});

router.get('/cart', authMiddleware, controller.cart);

router.get('/detail/:id', controller.detail);

router.get('/crud', authMiddleware, controller.crud);

router.get('/editItem/:id', authMiddleware, controller.editItem);
router.put('/editItem/:id', authMiddleware, upload.single('image'), controller.update);

router.get('/addItem', authMiddleware, controller.addItem);
router.post('/addItem', authMiddleware, upload.single('image'), controller.store);


router.delete('/delete/:id', authMiddleware, upload.single('image'), controller.delete);


module.exports = router;