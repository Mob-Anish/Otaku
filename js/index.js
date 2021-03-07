const form = document.querySelector('.form');
const passwordValue = document.querySelector('#password');
const confirmpasswordVal = document.querySelector('#repeat');
const signIn = document.querySelector('.btn--signin');
const signUp = document.querySelector('.btn--signup');
const formSignup = document.querySelector('.form__signup');
const formLogin = document.querySelector('.form__login');

const submit = () => {
  if (passwordValue != confirmpasswordVal) {
     alert('Incorrect confirm password!!');
     return;
  }
};

// Showing login form
const Login = () => {
    formLogin.style.opacity = '1';
    formLogin.style.visibility = 'visible';
    formSignup.style.opacity = '0';
    formSignup.style.visibility = 'hidden';
}

// Showing register form 
const Register = () => {
    formLogin.style.opacity = '0';
    formLogin.style.visibility = 'hidden';
    formSignup.style.opacity = '1';
    formSignup.style.visibility = 'visible';
}

// Form submit
form.addEventListener('submit', (e) => {
  e.preventDefault();
  submit();
});


// SignIn button
signIn.addEventListener('click', e => {
    e.preventDefault();
    Login();
});

// SignUp button
signUp.addEventListener('click', e => {
    e.preventDefault();
    Register();
});


