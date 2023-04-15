import Card from "../Card/Card";

// Función para mostrar los pokemons en una página determinada
const showPokemons = (pokemonList, page) => {
    const startIndex = (page - 1) * 12;
    const endIndex = startIndex + 11;
    // Obtener los pokemons de la página actual
    const pagePokemons = pokemonList.slice(startIndex, endIndex + 1);
    return (
        <div>
            {pagePokemons.map((pokemon) => {
                return (
                    <Card key={pokemon.id} pokemon={pokemon} />
                );
            })}
        </div>
    );
}

export default showPokemons