
let users = {};

// Handle Signup
function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const operator = document.getElementById('operator').value;
    
    if (!name || !email || !password || !operator) {
        document.getElementById('signup-alert').innerText = 'Please fill out all fields.';
        return;
    }
    
    // Store user details in localStorage
    users[email] = { name, password, operator };
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful! Please log in.');
    
    // Switch to login view
    document.getElementById('signup-container').classList.remove('visible');
    document.getElementById('login-container').classList.add('visible');
}

// Handle Login
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    const storedUsers = JSON.parse(localStorage.getItem('users'));
    
    if (storedUsers && storedUsers[email] && storedUsers[email].password === password) {
        const user = storedUsers[email];
        document.getElementById('username').innerText = user.name;
        document.getElementById('selected-operator').innerText = user.operator;

    
        sessionStorage.setItem('loggedInUser', JSON.stringify(user));
        
        // Switch to calculator view
        document.getElementById('login-container').classList.remove('visible');
        document.getElementById('calculator-container').classList.add('visible');
    } else {
        document.getElementById('login-alert').innerText = 'Invalid credentials. Please try again.';
    }
}

// Handle Calculation
function calculate() {
    const input1 = parseFloat(document.getElementById('input1').value);
    const input2 = parseFloat(document.getElementById('input2').value);

    if (isNaN(input1) || isNaN(input2)) {
        alert('Please enter valid numbers.');
        return;
    }

    const user = JSON.parse(sessionStorage.getItem('loggedInUser'));
    const operator = user.operator;
    let result = 0;

    switch (operator) {
        case '+':
            result = input1 + input2;
            break;
        case '-':
            result = input1 - input2;
            break;
        case '*':
            result = input1 * input2;
            break;
        default:
            alert('Invalid operator.');
            return;
    }

    document.getElementById('result').innerText = result;
}

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  
    const storedUsers = localStorage.getItem('users');
    if (storedUsers) {
        users = JSON.parse(storedUsers);
    }
});