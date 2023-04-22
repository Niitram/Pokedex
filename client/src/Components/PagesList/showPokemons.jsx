import Card from "../Card/Card";
import React from 'react'

const ShowPokemons = ({ copyAllPokemons, currentPage }) => {
    const startIndex = (currentPage - 1) * 12;
    const endIndex = startIndex + 11;
    // Obtener los pokemons de la página actual
    const pagePokemons = copyAllPokemons.slice(startIndex, endIndex + 1);
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

export default ShowPokemons