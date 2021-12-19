const db = require('../database/models');


let controller = {
    cart: (req, res) => {
        res.render('products/cart');
    },
    detail: (req, res) => {
        db.Product.findByPk(req.params.id)
            .then((product) => {
                res.render('products/detail', { product: product })
            })
            .catch((resultado) => { console.log(resultado) })
    },
    crud: (req, res) => {

        res.render('products/crud', { products })
    },
    editItem: (req, res) => {
        let productEdit = db.Product.findByPk(req.params.id)
            .then((product) => {
                res.render('products/editItem', { product: productEdit });
            })
            .catch((resultado) => { console.log(resultado) })
    },
    update: (req, res) => {
        db.Product.update({
            name: req.body.name,
            brand_id: req.body.brand,
            description: req.body.description,
            image_id: (req.file && req.file.filename) ? req.file.filename : 'default-image-jpg',
            category_id: req.body.category,
            stock: req.body.stock,
            price: req.body.price,
        },
            { where: { id: req.params.id } }
        )
        res.redirect('/products/crud');
    },
    addItem: (req, res) => {
        res.render('products/addItem')
    },
    store: (req, res) => {
        db.Product.create({ ...req.body, image: (req.file && req.file.filename) ? req.file.filename : 'default-image-product.jpg' })
        res.redirect('/products/crud')
    },
    delete: (req, res) => {
        db.Product.destroy({where:{id:req.params.id}}) 
        res.redirect('/products/crud')
    }
}
module.exports = controller;