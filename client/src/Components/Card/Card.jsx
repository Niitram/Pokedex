import React from 'react'
import {Link}from "react-router-dom"

function Card({pokemon}) {


    return (
        <Link to={`/detail/${pokemon.id}`}>
            <div>
                <div><img src={pokemon.image} alt={pokemon.name} /></div>
                <div>{pokemon.name}</div>
                <div>{pokemon.types}</div>
            </div>
        </Link>
    )
}

export default Card