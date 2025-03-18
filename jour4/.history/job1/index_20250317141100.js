document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("button").addEventListener("click", function() {
        fetch("./expression.txt")
            .then(response => response.text())
            .then(text => {
                const paragraph = document.createElement("");
                paragraph.textContent = text;
                document.body.appendChild(paragraph);
            })
            .catch(error => console.error("Erreur de chargement :", error));
    });
});
