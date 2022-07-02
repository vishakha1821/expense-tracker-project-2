function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector('form-message');
    messageElement.textContent = message;
    messageElement.classList.remove('form-message-success', 'form-message-error');
    messageElement.classList.add(`form-message ${type}`);
}
setFormMessage(loginForm, "success", 'you are loged in!');

document.addEventListener("DOMContentLoaded", ()=>{
    const loginForm = document.querySelector('#login');
    const createAccountForm = document.querySelector('#createAccount');

    document.querySelector('#linkCreateAccount').addEventListener('click', e =>{
        e.preventDefault();
        loginForm.classList.add('form-hidden');
        createAccountForm.classList.remove('form-hidden')
    });
    document.querySelector('#linkLogin').addEventListener('click', e =>{
        e.preventDefault();
        loginForm.classList.remove('form-hidden');
        createAccountForm.classList.add('form-hidden')
    });
});

axios.post('http://127.0.0.1:5500/index.html')