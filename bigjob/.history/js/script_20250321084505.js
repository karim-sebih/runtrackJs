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
    const emailInput = signUpForm.querySelector('input[type="email"]');
    const passwordInput = signUpForm.querySelector('input[type="password"]');
    const nameInput = signUpForm.querySelector('input[type="text"]');

    // Création des messages d'erreur
    const errorMessages = {
        email: "L'email doit être une adresse @laplateforme.io.",
        password: "Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre.",
        name: "Le nom ne peut pas être vide."
    };


	
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

    function validateName(name) {
        return name.trim() !== "";
    }

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Empêche l'envoi immédiat du formulaire

        let isValid = true;

        // Vérification du nom
        if (!validateName(nameInput.value)) {
            showError(nameInput, errorMessages.name);
            isValid = false;
        } else {
            clearError(nameInput);
        }

        // Vérification de l'email
        if (!validateEmail(emailInput.value)) {
            showError(emailInput, errorMessages.email);
            isValid = false;
        } else {
            clearError(emailInput);
        }

        // Vérification du mot de passe
        if (!validatePassword(passwordInput.value)) {
            showError(passwordInput, errorMessages.password);
            isValid = false;
        } else {
            clearError(passwordInput);
        }

        // Si tout est bon, on peut soumettre
        if (isValid) {
            alert("Compte créé avec succès !");
            signUpForm.reset();
        }
    });
});
