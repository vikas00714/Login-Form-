let x = document.getElementById("login");
let y = document.getElementById("register");
let z = document.getElementById("btn");


window.addEventListener('load', function() {
    document.getElementById('loginForm').reset();
    document.getElementById('registerForm').reset();
});


document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    this.reset();
});

document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    this.reset();
});


function register() {
    const loginForm = document.getElementById("login");
    const registerForm = document.getElementById("register");
    const btn = document.getElementById("btn");

    loginForm.classList.add('inactive');
    loginForm.classList.remove('active');
    
    registerForm.classList.add('active');
    registerForm.classList.remove('inactive');
    
    btn.style.left = "110px";
}

function login() {
    const loginForm = document.getElementById("login");
    const registerForm = document.getElementById("register");
    const btn = document.getElementById("btn");

    registerForm.classList.add('inactive');
    registerForm.classList.remove('active');
    
    loginForm.classList.add('active');
    loginForm.classList.remove('inactive');
    
    btn.style.left = "0";
}
function togglePassword(eyeIcon){
    const passwordInput=eyeIcon.previousElementSibling;
    if(passwordInput.type==="password"){
        passwordInput.type="text";
        eyeIcon.classList.remove("fa-eye");
        eyeIcon.classList.remove("fa-eye-slash");
    }else{
        passwordInput.type="password";
        eyeIcon.classList.remove("fa-eye-slash");
        eyeIcon.classList.add("fa-eye");
    }
}