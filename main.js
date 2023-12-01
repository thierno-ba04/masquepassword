let eyeicon = document.getElementById('eyeicon');
let password = document.getElementById('password');

eyeicon.onclick = function(){
    if(password.type == "password"){
      password.type = "text"; 
      eyeicon.src = "img/eye-of.png";
    }else{
        password.type = 'password';
        eyeicon.src = "img/-ne-voit-pas.png";
    }
}


let form = document.querySelector('#loginform');
// ecouter la modification du password
form.password.addEventListener('change', function(){
    validPassword(this);
});

// ecouter la soumission du formulaire
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(validPassword(form.password)){
    form.submit();

    }
});


// validationd du password
const validPassword = function(inputPassword){
    let msg;
    let valid = false;
    
        // Au moins 3 caracteres
        if(inputPassword.value.length < 4){
            msg= 'le mot de passe doit contenir au moins 3caracteres'
        }
         // Au moins 1 maj
         else if(!/[A-Z]/.test(inputPassword.value)){
            msg= 'le mot de passe doit contenir au moins 1 majuscules'
         }
        //  console.log(msg);
          // Au moins 1 min
          else if(!/[a-z]/.test(inputPassword.value)){
            msg= 'le mot de passe doit contenir au moins 1 minuscule'
         }
           // Au moins 1 chiffre
           else if(!/[0-9]/.test(inputPassword.value)){
            msg= 'le mot de passe doit contenir au moins 1 chiffres'
         }
    
        //  mot de pass valid
         else{
            msg ='le mot de passe est valide';
            valid = true;
         }

          //  affichage
         // recuperation de la balise small
         let small = inputPassword.nextElementSibling;

         // on tst l'expression reguliere
        if (valid) {
            small.innerHTML = 'mot de passe valide';
            small.classList.remove('text-danger');
            small.classList.add('text-success');
            return true;
        }
        else{
            small.innerHTML = msg;
            small.classList.remove('text-success');
            small.classList.add('text-danger');
            return false;
        }
};