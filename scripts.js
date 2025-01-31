document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const keepSignedIn = document.getElementById('keep-signed').checked;
    
    if (validateEmail(email) && validatePassword(password)) {
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Keep signed in:', keepSignedIn);
        
        // Simulación de login
        document.querySelector('.sign-in-button').innerHTML = 'Iniciando sesión...';
        setTimeout(() => {
            alert('Inicio de sesión exitoso!');
            document.querySelector('.sign-in-button').innerHTML = 'Iniciar sesión';
        }, 1000);
    } else {
        alert('Ha habido un problema\nTu email o contraseña son incorrectos');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6;
}

// Manejar el botón de crear cuenta
document.querySelector('.create-account-button').addEventListener('click', function() {
    window.location.href = 'register.html';
});
