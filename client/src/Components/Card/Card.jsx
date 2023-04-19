import React from 'react'
import {Link}from "react-router-dom"
import styles from "./Card.module.css"
import colorTypesGenerator from "../../utils/colorTypesGenerator"

function Card({pokemon}) {

    
    return (
        <Link style={{ textDecoration: 'none' }} to={`/detail/${pokemon.id}`} >
            <div 
            //logica de backgroundColor segun el type del pokemon
            style={{ backgroundColor: `${
                pokemon.types.length > 1 ?
                colorTypesGenerator(pokemon.types[1])
                :
                colorTypesGenerator(pokemon.types[0])
            }`}}
            className={styles.container}>
                <div className={styles.containerImg}><img className={styles.img} src={pokemon.image} alt={pokemon.name} /></div>
                <div className={styles.name} >{pokemon.name}</div>

                <div className={styles.typesContainer}>
                    {/* Logica de backgroundColor de los botones segun el type del pokemon */}
                    {pokemon.types.map(tipo => {
                        return <div style={{ backgroundColor: `${colorTypesGenerator(tipo)}`, padding: '10px' }} className={styles.type} key={tipo}>{tipo}</div>
                    })}
                </div>
            </div>
        </Link>
    )
}

export default Card