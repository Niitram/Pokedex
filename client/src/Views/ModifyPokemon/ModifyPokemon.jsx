import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

function ModifyPokemon() {

    const {id}=useParams()
    const [pokemon , setPokemon]=useState({})
    
    useEffect(()=>{
        fetch(`http://localhost:3001/pokemons/${id}`)
                .then((response) => response.json())
                .then((poke) => {
                    if (poke.name) {
                    setPokemon(poke);
                    } else {
                    window.alert("No hay personajes con ese ID");
                    }
                })
                .catch((err) => {
                    console.log(`error: ${err.message}`);
                });
                return setPokemon({});
    },[id])

    return (
        <div>ModifyPokemon</div>
    )
}

export default ModifyPokemon