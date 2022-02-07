window.onload= function (){

    let formulario = document.querySelector('#form-add-product');
    let name = document.querySelector('#product_name');
    let description = document.querySelector('#description');
    let image = document.querySelector('#img');
    let stock = document.querySelector('#stock');
    let price = document.querySelector('#product_price');
   
    function showError(selector, message){
        document.querySelector(selector).innerText = message;
    }

    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        let errors= {};
        if(name.value.length<5){
            errors.name =("Debes ingresar un nombre de al menos 5 caracteres")
            showError('#nameerror', errors.name)
        }else{
            showError('#nameerror', "")
            delete errors.name;
        }
        if(description.value.length<20){
            errors.description =("Debes ingresar una descripción de al menos 20 caracteres")
            showError('#descriptionerror', errors.description)
        }else{
            showError('#descriptionerror', "")
            delete errors.description;
        }
        if(!(/\.(gif|jpeg|jpg|png)$/i).test(image.value)){
            errors.image=("Debes ingresar una imagen")
            showError('#imageerror', errors.image)
        }else{
            showError('#imageerror', "")
            delete errors.image;
        }
        if(stock.value.length < 1 ){
            errors.stock =("Debes ingresar un stock")
            showError('#stockerror', errors.stock)
        }else{
            showError('#stockerror', "")
            delete errors.stock;
        }
        if(price.value.length < 1 ){
            errors.price =("Debes ingresar un precio")
            showError('#priceerror', errors.price)
        }else{
            showError('#priceerror', "")
            delete errors.price;
        }
        if( Object.keys(errors).length==0){
            formulario.submit();
        }

    })
    
}