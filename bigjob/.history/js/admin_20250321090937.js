document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('add-user-form');
    const userList = document.getElementById('user-list');

    let users = JSON.parse(localStorage.getItem("users")) || [];

    function displayUsers() {
        userList.innerHTML = "";
        users.forEach((user, index) => {
            let li = document.createElement("li");
            li.innerHTML = `${user.email} - ${user.role} <button onclick="removeUser(${index})">Supprimer</button>`;
            userList.appendChild(li);
        });
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        let email = document.getElementById('email').value;
        let role = document.getElementById('role').value;

        users.push({ email, role });
        localStorage.setItem("users", JSON.stringify(users));
        displayUsers();
    });

    window.removeUser = function (index) {
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));
        displayUsers();
    };

    displayUsers();
});
