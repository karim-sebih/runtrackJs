
const container = document.getElementById('container');
const loginButton = document.getElementById('login');
const signUpButton = document.getElementById('inscri');

signUpButton.addEventListener('click', () => {
	container.classList.add('panel-active');
})

loginButton.addEventListener('click', () => {
	container.classList.remove('panel-active');
})
