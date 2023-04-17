import React from 'react'
import {Link}from "react-router-dom"
import styles from "./Card.module.css"
import colorTypesGenerator from "../../utils/colorTypesGenerator"

function Card({pokemon}) {


    return (
        <Link style={{ textDecoration: 'none' }} to={`/detail/${pokemon.id}`} >
            <div className={styles.container}>
                <div className={styles.containerImg}><img className={styles.img} src={pokemon.image} alt={pokemon.name} /></div>
                <div className={styles.name} >{pokemon.name}</div>
                <div className={styles.typesContainer}>{pokemon.types.map(tipo => <div style={{ backgroundColor: `${colorTypesGenerator(tipo)}`, padding: '10px' }} className={styles.type} key={tipo}>{tipo}</div>)}</div>
            </div>
        </Link>
    )
}

export default Card