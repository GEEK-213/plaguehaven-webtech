const signInBtnLink = document.querySelector('.signInBtn-link');
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

signInBtnLink.addEventListener('click', () => {
    wrapper.classList.toggle('active');
});

document.getElementById('login-button').addEventListener('click', () => {
    alert('Logging in...');
});

document.getElementById('signup-button').addEventListener('click', () => {
    alert('Signing up...');
});