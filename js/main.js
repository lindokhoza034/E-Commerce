//**Code For Form Validation**
const form = document.querySelector('form');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//Event listener to validate the form
form.addEventListener('submit', (event) => {
    if (!emailRegex.test(email.value)) {
        event.preventDefault();
        email.classList.add('is-invalid');
    } else {
        email.classList.remove('is-invalid');
    }

    if (password.value.length < 8) {
        event.preventDefault();
        password.classList.add('is-invalid');
    } else {
        password.classList.remove('is-invalid');
    }
});

//***Code For Redirecting to Products page
const defaultEmail = "fullstack@gmail.com";
const defaultPassword = "1234@8765";

function login(arg) {
    //Get user input from form
    const mail = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    //Check if Email and Password are Correct
    if (mail === defaultEmail && pass === defaultPassword) {
        //Redirect to products page
        window.location.href = "products.html"
    } else {
        //Display Error Message
        alert("Invalid Email Address or Password");
    }
}