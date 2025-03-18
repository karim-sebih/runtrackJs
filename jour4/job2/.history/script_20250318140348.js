function jsonValueKey(jsonString, key) {
    try {
        // Convertir la chaîne JSON en objet JavaScript
        let jsonObject = JSON.parse(jsonString);
        
        // Retourner la valeur associée à la clé donnée
        return jsonObject[key] || "Clé non trouvée";
    } catch (error) {
        return "Erreur : JSON invalide";
    }
}


let jsonData = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

console.log(jsonValueKey(jsonData, "city"));
console.log(jsonValueKey(jsonData, "name")); // Affiche "La Plateforme_"
console.log(jsonValueKey(jsonData, "country")); // Affiche "Clé non trouvée"
console.log(jsonValueKey("{invalidJSON}", "city")); // Affiche "Erreur : JSON invalide"
