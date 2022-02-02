const db = require('../database/models');


module.exports = {
    home: (req, res) => {
        let productsBeauty = db.Product.findAll({
            where: {category_id: 1},
            limit: 4,
            include: ['image']
        });
        let productsHealthy = db.Product.findAll({
            where: {category_id: 2},
            limit: 4,
            include: ['image']
        });
        let productsCleaning = db.Product.findAll({
            where: {category_id: 3},
            limit: 4,
            include: ['image']
        });

        Promise.all([productsBeauty, productsHealthy, productsCleaning])
            .then(([belleza, salud, limpieza]) =>{
            
            res.render('home', {belleza, salud, limpieza})
        })
        .catch((resultado)=>{
            console.log(resultado)
        })



    },
    faq:(req,res)=>{
        res.render('general/faq')
    },
    contact:(req,res)=>{
        res.render('general/contact')
    }, aboutus:(req,res)=>{
        res.render('general/aboutus')
    }, workwithus:(req,res)=>{
        res.render('general/workwithus')
    }

}