document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('presence-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const selectedDate = document.getElementById('date').value;
        const today = new Date().toISOString().split('T')[0];

        if (selectedDate < today) {
            messageDiv.textContent = "Impossible de modifier une demande pour une date passée.";
            messageDiv.style.color = "red";
            return;
        }

        const requestData = {
            userId: 1, // À récupérer dynamiquement selon l'utilisateur connecté
            date: selectedDate,
            status: "En attente"
        };

        fetch('save_presence.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(response => response.json())
        .then(data => {
            messageDiv.textContent = data.message;
            messageDiv.style.color = data.success ? "green" : "red";
        })
        .catch(error => console.error('Erreur:', error));
    });
});
