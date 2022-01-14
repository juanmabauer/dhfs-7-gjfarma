window.onload= function (){

    let formulario = document.querySelector(".form-registry-login");
    let name = document.querySelector('#registry-name');
    let lastname = document.querySelector('#registry-lastname');
    let avatar = document.querySelector('#registry-image');
    let email = document.querySelector('#registry-email');
    let password = document.querySelector('#registry-password')
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
        if(name.value.length<2){
            errors.name =("Debes ingresar un nombre de almenos 2 caracteres")
            showError('#nameerror', errors.name)
        }else{
            showError('#nameerror', "")
            delete errors.name;
        }
        if(lastname.value.length<2){
            errors.lastname =("Debes ingresar un apellido de almenos 2 caracteres")
            showError('#lastnameerror', errors.lastname)
        }else{
            showError('#lastnameerror', "")
            delete errors.lastname;
        }

        if(password.value.length<8){
            errors.password =("Debes ingresar una contraseña de almenos 8 caracteres")
            showError('#passworderror', errors.password)
        }else{
            showError('#passworderror',"")
            delete errors.password;
        }
        if(!(/\.(gif|jpeg|jpg|png)$/i).test(avatar.value)){
            errors.avatar=("Debes ingresar una imagen")
            showError('#avatarerror', errors.avatar)
        }else{
            showError('#avatarerror', "")
            delete errors.image;
        }
        if( Object.keys(errors).length==0){
            formulario.submit();
        }

    })
    
}