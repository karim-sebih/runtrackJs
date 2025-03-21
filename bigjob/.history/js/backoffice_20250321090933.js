document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('requests-table');

    let requestData = JSON.parse(localStorage.getItem("presenceRequest"));

    if (requestData) {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>Utilisateur 1</td>
            <td>${requestData.date}</td>
            <td id="status">${requestData.status}</td>
            <td>
                <button onclick="updateStatus('Accepté')">Accepter</button>
                <button onclick="updateStatus('Refusé')">Refuser</button>
            </td>
        `;

        tableBody.appendChild(row);
    }

    window.updateStatus = function (newStatus) {
        document.getElementById("status").textContent = newStatus;
        requestData.status = newStatus;
        localStorage.setItem("presenceRequest", JSON.stringify(requestData));
    };
});
