let allPokemon = [];

// Charger le fichier JSON
fetch('pokemon.json')
    .then(response => response.json())
    .then(data => {
        allPokemon = data;
        populateTypeFilter(data);
        displayPokemon(data);
    })
    .catch(error => console.error("Erreur lors du chargement du fichier JSON :", error));

// Remplir la liste des types
function populateTypeFilter(pokemonList) {
    const typeSet = new Set();
    pokemonList.forEach(pokemon => pokemon.type.forEach(t => typeSet.add(t)));

    console.log('Types disponibles:', [...typeSet]);

    const typeFilter = document.getElementById('typeFilter');
    typeSet.forEach(type => {
        let option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeFilter.appendChild(option);
    });
}


// Filtrer les Pokémon
function filterPokemon() {
    const idValue = document.getElementById('idFilter');
    const nameValue = document.getElementById('nameFilter');
    const typeValue = document.getElementById('typeFilter');

    const filtered = allPokemon.filter(pokemon =>
        (idValue === "" || pokemon.id.toString().includes(idValue)) &&
        (nameValue === "" || pokemon.name.french.toLowerCase().includes(nameValue)) &&
        (typeValue === "" || pokemon.type.some(t => t === typeValue))
    );
    

    displayPokemon(filtered);
}

// Afficher la liste des Pokémon
function displayPokemon(pokemonList) {
    const list = document.getElementById('pokemonList');
    list.innerHTML = ""; // Réinitialisation de la liste

    pokemonList.forEach(pokemon => {
        let li = document.createElement('li');
        li.textContent = `${pokemon.id} - ${pokemon.name.french

        } (${pokemon.type.join(", ")})`;
        list.appendChild(li);
    });
}

// Bouton pour filtrer
document.getElementById("pokemonfilter").addEventListener("click", function() {
    filterPokemon();
});
