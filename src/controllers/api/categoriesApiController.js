const db = require('../../database/models');

const categoriesApiController = {
    'list': (req, res) => {
        db.Category.findAll({include: ['products']})
            .then(categories => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: categories.length,
                        url: 'api/categories'
                    },
                    data: categories.map(category => {
                        return {
                            id: category.id,
                            name: category.name,
                            products: category.products.length,
                            url: 'http://localhost:3001/api/categories/' + category.id
                        }
                    })
                }
                res.json(respuesta);
            })
    },
    'detail': (req, res) => {
        db.Category.findByPk(req.params.id)
            .then(category => {
                let respuesta = {
                    meta: {
                        status: 200,
                        total: category.length,
                        url: '/api/categories/:id'
                    },
                    data: category
                }
                res.json(respuesta);
            });
    }
}

module.exports = categoriesApiController;