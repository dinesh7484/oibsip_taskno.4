document.addEventListener('DOMContentLoaded', function () {
    console.log('DOMContentLoaded event fired');
    const loggedIn = localStorage.getItem('loggedIn') === 'true';
    console.log('loggedIn:', loggedIn);
    // Handle registration
    const registrationForm = document.getElementById('registration-form');
    registrationForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        localStorage.setItem(username, password);
        alert('Registration successful. Please login.');
        registrationForm.reset(); 
        window.location.href = 'login.html'
    });

     // Handle login script written in login.html
     // Handle logout script written in secured.html page
    });



    
