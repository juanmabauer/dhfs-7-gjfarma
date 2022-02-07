const db = require('../../database/models');
const { Sequelize, Op } = require("sequelize");
const ejs = require("ejs");

const productsApiController = {
    'list': (req, res) => {
        db.Product.findAll({include: ['image', 'brand', 'category'] })
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
                        category: p.category.name,
                        image: 'http://localhost:3001/images/products/'+p.image.name
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
    },
    'search': async (req,res)=>{
        db.Product.findAll({
            where: Sequelize.literal(`product.name like '%${req.query.searchString}%' OR brand.name like '%${req.query.searchString}%'`),
          include: ['image', 'brand']
        })
        .then(async products => {
            let productsHtmlArray= await Promise.all(products.map(async product=>{
                let html = await ejs
                .renderFile("./src/views/partials/searchResultItem.ejs", { model: product })
                .then((output) => output);
                return html;
            }));
            res.json(productsHtmlArray);
        })
    }
}

module.exports = productsApiController ;