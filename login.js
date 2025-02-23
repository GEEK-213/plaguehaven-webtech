// Form switching functionality
const signUpBtnLink = document.querySelector('.signUpBtn-link');
const signInBtnLink = document.querySelector('.signInBtn-link');
const wrapper = document.querySelector('.wrapper');

signUpBtnLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.add('active');
});

signInBtnLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.remove('active');
});

// Login form handling
const loginForm = document.querySelector('.sign-in form');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    if (username && password) {
        alert(`Welcome back, ${username}! You have successfully logged in.`);
        window.location.href = 'index.html'; // Redirect to home page
    } else {
        document.querySelector('.error-message').textContent = 'Please fill in all fields';
    }
});

// Signup form handling
const signupForm = document.querySelector('.sign-up form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('signup-username').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const terms = document.querySelector('input[name="terms"]').checked;

    if (username && email && password && terms) {
        alert('Account created successfully! Please log in.');
        wrapper.classList.remove('active'); // Switch back to login form
    } else {
        alert('Please fill in all fields and accept the terms & conditions');
    }
});