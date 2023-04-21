import Card from "../Card/Card";

const showPokemons = (pokemonList, page) => {
    const startIndex = (page - 1) * 12;
    const endIndex = startIndex + 11;
    // Obtener los pokemons de la página actual
    const pagePokemons = pokemonList.slice(startIndex, endIndex + 1);
    return (
        <>
            {pagePokemons.map((pokemon, index) => {
                return (
                    <Card key={pokemon.id} pokemon={pokemon} />
                );
            })}
        </>
    );
}

export default showPokemons