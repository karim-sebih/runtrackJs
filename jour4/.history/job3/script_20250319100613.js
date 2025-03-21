let allPokemon = [];

// Charger le fichier JSON
fetch('pokemon.json')
    .then(response => response.json())
    .then(data => {
        allPokemon = data;
        populateTypeFilter(data);
        displayPokemon(data);
    });

// Remplir le filtre des types dynamiquement
function populateTypeFilter(pokemonList) {
    const typeSet = new Set();
    pokemonList.forEach(pokemon => pokemon.type.forEach(t => typeSet.add(t)));
    const typeFilter = document.getElementById('typeFilter');

    typeSet.forEach(type => {
        let option = document.createElement('option');
        option.value = type;
        option.textContent = type;
        typeFilter.appendChild(option);
    });
}

// Filtrer et afficher les Pokémon
function filterPokemon() {
    const idValue = document.getElementById('idFilter').value.toLowerCase();
    const nameValue = document.getElementById('nameFilter').value.toLowerCase();
    const typeValue = document.getElementById('typeFilter').value;

    const filtered = allPokemon.filter(pokemon =>
        (idValue === "" || pokemon.id.toString().includes(idValue)) &&
        (nameValue === "" || pokemon.name.toLowerCase().includes(nameValue)) &&
        (typeValue === "" || pokemon.type.includes(typeValue))
    );

    displayPokemon(filtered);
}

// Afficher la liste des Pokémon
function displayPokemon(pokemonList) {
    const list = document.getElementById('pokemonList');
    list.innerHTML = ""; // Réinitialiser la liste
    pokemonList.forEach(pokemon => {
        let li = document.createElement('li');
        li.textContent = `${pokemon.id} - ${pokemon.name} (${pokemon.type.join(", ")})`;
        list.appendChild(li);
    });
}

//Button pour les catégories
getElementById("pokemonfilter").addEventListener("click", async function() {
    fetch(pokemon.json)
    let result = fetch("../job3/pokemon.json")
    let data = response.json();

})