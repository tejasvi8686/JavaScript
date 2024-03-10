let form = document.querySelector('.sign-up-form');
let email = document.querySelector('#email');
let password = document.querySelector('#password');


form.addEventListener('submit', (e)=> {

    e.preventDefault()
    console.log(email.value,password.value);
})