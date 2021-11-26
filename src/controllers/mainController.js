const path = require('path');
const fs = require ('fs');

let jsonProducts = fs.readFileSync(path.resolve(__dirname,'../db/products.json'), 'utf-8'); 
let products = JSON.parse(jsonProducts);


module.exports = {
    home: (req, res) => {
        let productsBeauty = [];
        let productsHealthy = [];
        let productsCleaning = [];

        products.forEach(product => {
            if(product.category=="Belleza" && productsBeauty.length<4){
                productsBeauty.push(product)
            }
            if(product.category=='Salud' && productsHealthy.length<4){
                productsHealthy.push(product)
            }if(product.category=='Limpieza' && productsCleaning.length<4)
            {
                productsCleaning.push(product)
            }
            
        });
        res.render('home', {productsBeauty,productsHealthy,productsCleaning});
    
    }

}