document.getElementById('export-json').addEventListener('click', function () {
    let requests = localStorage.getItem("presenceRequests");

    if (!requests) {
        alert("Aucune demande enregistrée !");
        return;
    }

    const blob = new Blob([requests], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "demandes_presences.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
    