// Switch between Sign In and Sign Up Pages
function switchToSignup() {
    document.getElementById('sign-up-page').style.display = 'block';
    document.getElementById('login-page').style.display = 'none';
}

function switchToLogin() {
    document.getElementById('login-page').style.display = 'block';
    document.getElementById('sign-up-page').style.display = 'none';
}

// Sign Up Functionality (Basic Validation)
function signUp() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    // Basic form validation
    if (name === '' || email === '' || password === '') {
        alert('Please fill out all fields');
        return;
    }

    // Simulate user registration (in reality, you would send this data to a server)
    alert('Signed Up successfully!\n' + `Name: ${name}\nEmail: ${email}`);
    
    // After sign up, switch to login page
    switchToLogin();
}

// Sign In Functionality (Basic Validation)
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    // Basic form validation
    if (email === '' || password === '') {
        alert('Please fill out all fields');
        return;
    }

    // Simulate successful login (you can integrate with backend authentication here)
    alert('Logged In successfully!\n' + `Email: ${email}`);
    
    // After successful login, redirect the user (you could redirect to a dashboard, for instance)
    // For now, we just reset the form and show a success message
    // window.location.href = 'dashboard.html'; // Example of redirection
}

