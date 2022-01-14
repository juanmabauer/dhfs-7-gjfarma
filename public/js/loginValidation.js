window.onload= function (){

    let formulario = document.querySelector(".form-user-login");
    let email = document.querySelector('#control-email');
    let password = document.querySelector('#control-password')
    const regexEmail = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    function showError(selector, message){
        document.querySelector(selector).innerText = message;
    }


    formulario.addEventListener('submit', function(e){
        e.preventDefault();
        let errors= {};
        if(email.value==""){
            errors.email =("Debes ingresar un email")
            showError('#emailerror', errors.email)
        }else if(!regexEmail.test(email.value)){
            errors.email= 'Debes ingresar un email valido'
            showError('#emailerror', errors.email)
        }else{
            showError('#emailerror', "")
            delete errors.email;
        }
        if(password.value.length==""){
            errors.password =("Debes ingresar tu contraseña")
            showError('#passworderror', errors.password)
        }else{
            showError('#passworderror',"")
            delete errors.password;
        }
        if( Object.keys(errors).length==0){
            formulario.submit();
        }

    })
    
}

