document.addEventListener('DOMContentLoaded', function () {
    const tableBody = document.getElementById('requests-table');

    let requests = JSON.parse(localStorage.getItem("presenceRequests")) || [];

    requests.forEach((request, index) => {
        let row = document.createElement("tr");

        row.innerHTML = `
            <td>Utilisateur ${request.userId}</td>
            <td>${request.date}</td>
            <td id="status-${index}">${request.status}</td>
            <td>
                <button onclick="updateStatus(${index}, 'Accepté')">Accepter</button>
                <button onclick="updateStatus(${index}, 'Refusé')">Refuser</button>
            </td>
        `;

        tableBody.appendChild(row);
    });

    window.updateStatus = function (index, newStatus) {
        document.getElementById(`status-${index}`).textContent = newStatus;
        requests[index].status = newStatus;
        localStorage.setItem("presenceRequests", JSON.stringify(requests));
    };
});

