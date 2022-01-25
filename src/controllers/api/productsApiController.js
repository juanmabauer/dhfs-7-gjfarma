const db = require('../../database/models');

const productsApiController = {
    'list': (req, res) => {
        db.Product.findAll({ include: ['image', 'brand'] })
        .then(products => {
            let respuesta = {
                meta: {
                    status : 200,
                    total: products.length,
                    url: 'api/products'
                },
                data: products.map((p)=>{
                    return{
                        id: p.id,
                        name: p.name,
                        description: p.description,
                        price: p.price,
                        stock: p.stock,
                        brand: p.brand.name,
                        image: 'http://localhost:3000/images/products/'+p.image.name
                    }
                })
            }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Product.findByPk(req.params.id, {
            include: ['image', 'category', 'brand']
        })
            .then(product => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: product.length,
                        url: '/api/products/:id'
                    },
                    data: product
                }
                res.json(respuesta);
            });
    }
}

module.exports = productsApiController ;