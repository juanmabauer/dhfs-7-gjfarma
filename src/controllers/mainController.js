const db = require('../database/models');


module.exports = {
    home: (req, res) => {
        let productsBeauty = db.Product.findAll({
            where: {category_id: 1},
            limit: 4
        });
        let productsHealthy = db.Product.findAll({
            where: {category_id: 2},
            limit: 4
        });
        let productsCleaning = db.Product.findAll({
            where: {category_id: 3},
            limit: 4
        });

        Promise.all([productsBeauty, productsHealthy, productsCleaning])
            .then(([belleza, salud, limpieza]) =>{
            
            res.render('home', {belleza, salud, limpieza})
        })
        .catch((resultado)=>{
            console.log(resultado)
        })

       // db.Product.findAll({ include: ['categories'] })
       //     .then((product) => {
       //         if (product.category == "Belleza" && productsBeauty.length < 4) {
       //             productsBeauty.push(product)
       //         }
       //         if (product.category == 'Salud' && productsHealthy.length < 4) {
       //             productsHealthy.push(product)
       //         } if (product.category == 'Limpieza' && productsCleaning.length < 4) {
       //             productsCleaning.push(product)
       //         }
       //         res.render('home', { productsBeauty, productsHealthy, productsCleaning });
       //     }
         //   )
         //   .catch((resultado) => { console.log(resultado) })

    }

}