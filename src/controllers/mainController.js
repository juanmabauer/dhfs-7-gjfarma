const db = require('../database/models');


module.exports = {
    home: (req, res) => {
        let productsBeauty = [];
        let productsHealthy = [];
        let productsCleaning = [];

        db.Product.findAll({ include: ['categories'] })
            .then((product) => {
                if (product.category == "Belleza" && productsBeauty.length < 4) {
                    productsBeauty.push(product)
                }
                if (product.category == 'Salud' && productsHealthy.length < 4) {
                    productsHealthy.push(product)
                } if (product.category == 'Limpieza' && productsCleaning.length < 4) {
                    productsCleaning.push(product)
                }
                res.render('home', { productsBeauty, productsHealthy, productsCleaning });
            }
            )
            .catch((resultado) => { console.log(resultado) })

    }

}