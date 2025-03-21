document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('presence-form');
    const messageDiv = document.getElementById('message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const selectedDate = new Date(document.getElementById('date').value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            messageDiv.textContent = "Impossible de modifier une demande pour une date passée.";
            messageDiv.style.color = "red";
            return;
        }

        const requestData = {
            userId: 1, // À récupérer dynamiquement selon l'utilisateur connecté
            date: selectedDate.toISOString().split('T')[0],
            status: "En attente"
        };

        localStorage.setItem("presenceRequest", JSON.stringify(requestData));
        messageDiv.textContent = "Demande envoyée avec succès.";
        messageDiv.style.color = "green";
    });
});
