document.getElementById('searchButton').addEventListener('click', function () {
    const monsterName = document.getElementById('monsterInput').value.toLowerCase();
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${monsterName}`;

    axios.get(apiUrl)
        .then(response => {
            const pokemon = response.data;
            const resultDiv = document.getElementById('monsterResult');
            resultDiv.innerHTML = `
                <h2>${pokemon.name}</h2>
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}" />
                <p>Altura: ${pokemon.height}</p>
                <p>Peso: ${pokemon.weight}</p>
                <p>Geração: ${pokemon.generation}</p>
                <p>Tipo: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
                <p>Habilidades: ${pokemon.abilities.map(abilityInfo => abilityInfo.ability.name).join(', ')}</p>
            `;
        })
        .catch(error => {
            document.getElementById('monsterResult').innerHTML = '<p>Pokémon não encontrado.</p>';
        });
});