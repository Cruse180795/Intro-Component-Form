const form = document.getElementById('form');
const firstName = document.getElementById('first');
const lastName = document.getElementById('last');
const email = document.getElementById('email');
const password = document.getElementById('password');


form.addEventListener('submit', function(e){
    e.preventDefault();
    validateInput();
});


function validateInput(){
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();


    if(firstNameValue === ''){
        handleError(firstName, "First Name Cannot Be Empty");
        firstName.placeholder = firstNameValue;
    }
    else{
        handleSuccess(firstName, 'First Name Accepted')
    }

    if(lastNameValue === ''){
        handleError(lastName, "Last Name Cannot Be Empty");
        lastName.placeholder = lastNameValue;
    }
    else{
        handleSuccess(lastName, 'Last Name Accepted')
    }

    if(emailValue === ''){
        handleError(email, "Looks like this is not an email");
        email.placeholder = emailValue;
    }
    else{
        handleSuccess(email, 'Email Address Accepted')
    }

    if(passwordValue === ''){
        handleError(password, "Password Cannot Be Empty");
        password.placeholder = passwordValue;
    }
    else{
        handleSuccess(password, 'Password Accepted')
    }

    
}

function handleError(input, message){
    const inputContainer = input.parentElement;
    const small = inputContainer.querySelector('small');
    inputContainer.className = 'input__container error';
    small.innerText = message;
}

function handleSuccess(input, message){
    const inputContainer = input.parentElement;
    const small = inputContainer.querySelector('small');
    inputContainer.className = 'input__container success';
    small.innerText = message;
}