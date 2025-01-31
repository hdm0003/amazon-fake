document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const password2 = document.getElementById('password2').value;
    
    // Resetear errores previos
    clearErrors();
    
    if (!validateName(name)) {
        showError('name', 'Por favor, introduce tu nombre completo');
        return;
    }
    
    if (!validateEmail(email)) {
        showError('email', 'Dirección de correo electrónico no válida');
        return;
    }
    
    if (!validatePassword(password)) {
        showError('password', 'La contraseña debe tener al menos 6 caracteres');
        return;
    }
    
    if (password !== password2) {
        showError('password2', 'Las contraseñas no coinciden');
        return;
    }
    
    // Simulación de registro exitoso
    document.querySelector('.sign-in-button').innerHTML = 'Verificando...';
    setTimeout(() => {
        alert('¡Cuenta creada exitosamente!');
        window.location.href = 'index.html';
    }, 1500);
});

function validateName(name) {
    return name.length >= 2 && name.includes(' ');
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function validatePassword(password) {
    return password.length >= 6;
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = message;
    field.classList.add('error-input');
    field.parentNode.appendChild(errorDiv);
}

function clearErrors() {
    document.querySelectorAll('.error').forEach(error => error.remove());
    document.querySelectorAll('.error-input').forEach(input => input.classList.remove('error-input'));
}
