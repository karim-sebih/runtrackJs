const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const signUpButton = document.getElementById('signUp');

signUpButton.addEventListener('click', () => {
	container.classList.add('panel-active');
})

loginButton.addEventListener('click', () => {
	container.classList.remove('panel-active');
})

document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('.sign-up-container form');
    const loginForm = document.querySelector('.login-container form');

    function showError(input, message) {
        let errorSpan = input.nextElementSibling;
        if (!errorSpan || !errorSpan.classList.contains('error-message')) {
            errorSpan = document.createElement('span');
            errorSpan.classList.add('error-message');
            input.parentNode.insertBefore(errorSpan, input.nextSibling);
        }
        errorSpan.textContent = message;
        input.classList.add('input-error');
    }

    function clearError(input) {
        let errorSpan = input.nextElementSibling;
        if (errorSpan && errorSpan.classList.contains('error-message')) {
            errorSpan.remove();
        }
        input.classList.remove('input-error');
    }

    function validateEmail(email) {
        return email.endsWith('@laplateforme.io');
    }

    function validatePassword(password) {
        const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regex.test(password);
    }

    function validatePasswordNotEmpty(password) {
        return password.trim() !== "";
    }

    function validateName(name) {
        return name.trim() !== "";
    }

    // Validation pour l'inscription
    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = signUpForm.querySelector('input[type="email"]');
        const passwordInput = signUpForm.querySelector('input[type="password"]');
        const confirmPasswordInput = signUpForm.querySelectorAll('input[type="password"]')[1];
        const nameInput = signUpForm.querySelector('input[type="text"]');

        let isValid = true;

        if (!validateName(nameInput.value)) {
            showError(nameInput, "Le nom ne peut pas être vide.");
            showError.style.color = "red";
            isValid = false;
        } else {
            clearError(nameInput);
        }

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "L'email doit être une adresse @laplateforme.io.");
            showError.style.color = "red";
            isValid = false;
        } else {
            clearError(emailInput);
        }

        if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.");
            showError.style.color = "red";
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            showError(confirmPasswordInput, "Les mots de passe ne correspondent pas.");
            showError.style.color = "red";
            isValid = false;
        } else {
            clearError(confirmPasswordInput);
        }

        if (isValid) {
            alert("Compte créé avec succès !");
            window.location.href = "accueil.html"; // Redirection après inscription
        }
    });

    // Validation pour la connexion
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const emailInput = loginForm.querySelector('input[type="email"]');
        const passwordInput = loginForm.querySelector('input[type="password"]');

        let isValid = true;

        if (!validateEmail(emailInput.value)) {
            showError(emailInput, "L'email doit être une adresse @laplateforme.io.");
            showError.style.color = "red";
            isValid = false;
        } else {
            clearError(emailInput);
        }

        if (!validatePasswordNotEmpty(passwordInput.value)) {
            showError(passwordInput, "Le mot de passe ne peut pas être vide.");
            showError.style.color = "red";
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        if (isValid) {
            
            window.location.href = "/files/accueil.html"; // Redirection après connexion
        }
    });
});
