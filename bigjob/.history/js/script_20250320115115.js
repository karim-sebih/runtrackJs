
const container = document.getElementById('container');
const loginButton = document.getElementById('connecti');
const signUpButton = document.getElementById('inscription');

signUpButton.addEventListener('click', () => {
	container.classList.add('panel-active');
})

loginButton.addEventListener('click', () => {
	container.classList.remove('panel-active');
})
