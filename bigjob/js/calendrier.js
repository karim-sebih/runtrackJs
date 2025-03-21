document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('presence-form');
    const messageDiv = document.getElementById('message');
    const requestsDiv = document.getElementById('requests-list'); // Div pour afficher les demandes

    // Afficher les demandes enregistrées
    function displayRequests() {
        const requests = JSON.parse(localStorage.getItem("presenceRequests")) || [];
        requestsDiv.innerHTML = ''; // Effacer les anciennes demandes

        if (requests.length === 0) {
            requestsDiv.textContent = "Aucune demande enregistrée.";
            return;
        }

        requests.forEach(request => {
            const requestElement = document.createElement('div');
            requestElement.textContent = `Date: ${request.date} - Statut: ${request.status}`;
            requestsDiv.appendChild(requestElement);
        });
    }

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const selectedDate = new Date(document.getElementById('date').value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        // Cacher le message au début
        messageDiv.classList.remove('show');

        if (selectedDate < today) {
            messageDiv.textContent = "Impossible de modifier une demande pour une date passée.";
            messageDiv.classList.add('error', 'show'); // Ajouter la classe d'erreur et la rendre visible
            return;
        }

        const requestData = {
            userId: 1, // ID fictif
            date: selectedDate.toISOString().split('T')[0],
            status: "En attente"
        };

        // Charger les demandes existantes
        let requests = JSON.parse(localStorage.getItem("presenceRequests")) || [];
        requests.push(requestData);
        
        // Sauvegarder dans localStorage
        localStorage.setItem("presenceRequests", JSON.stringify(requests));

        messageDiv.textContent = "Demande enregistrée avec succès !";
        messageDiv.classList.add('success', 'show','green'); // Ajouter la classe de succès et la rendre visible

        // Mettre à jour l'affichage des demandes
        displayRequests();
    });

    // Initialiser l'affichage des demandes existantes au chargement
    displayRequests();
});
