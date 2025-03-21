// Attendre que le DOM soit entièrement chargé avant d'exécuter le code
document.addEventListener('DOMContentLoaded', function () {
    // Récupérer le corps du tableau où les demandes seront affichées
    const tableBody = document.getElementById('requests-table');

    // Récupérer les demandes de présence depuis localStorage, ou un tableau vide si aucune demande n'existe
    let requests = JSON.parse(localStorage.getItem("presenceRequests")) || [];

    // Fonction pour afficher toutes les demandes dans le tableau
    function displayRequests() {
        // Vider le corps du tableau avant de le remplir à nouveau
        tableBody.innerHTML = "";

        // Pour chaque demande dans le tableau, créer une ligne dans le tableau HTML
        requests.forEach((request, index) => {
            let row = document.createElement("tr");
            row.setAttribute("id", `row-${index}`); // Identifier chaque ligne de manière unique

            row.innerHTML = `
                <td>Utilisateur ${request.userId}</td>
                <td>${request.date}</td>
                <td id="status-${index}">${request.status}</td> <!-- Afficher le statut de la demande -->
                <td>
                    <button onclick="updateStatus(${index}, 'Accepté')">Accepter</button> <!-- Bouton pour accepter -->
                    <button onclick="removeRequest(${index})">Refuser</button> <!-- Bouton pour refuser -->
                </td>
            `;

            tableBody.appendChild(row); // Ajouter la ligne au tableau
        });
    }

    // Fonction pour mettre à jour le statut d'une demande
    window.updateStatus = function (index, newStatus) {
        document.getElementById(`status-${index}`).textContent = newStatus; // Mettre à jour le statut visible
        requests[index].status = newStatus; // Mettre à jour le statut dans le tableau des demandes
        localStorage.setItem("presenceRequests", JSON.stringify(requests)); // Sauvegarder les modifications dans localStorage
    };

    // Fonction pour supprimer une demande du tableau
    window.removeRequest = function (index) {
        requests.splice(index, 1); // Supprimer la demande du tableau
        localStorage.setItem("presenceRequests", JSON.stringify(requests)); // Mettre à jour localStorage
        displayRequests(); // Rafraîchir le tableau pour refléter la suppression
    };

    displayRequests(); // Afficher toutes les demandes au chargement de la page
});
