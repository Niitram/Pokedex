import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from "react-redux";
import styles from './Detail.module.css'
import colorTypesGenerator from  '../../utils/colorTypesGenerator'
import { handlerDelete } from './handlersDetail';
import redirectHome from './redirectHome';

function Detail() {
  const {id}=useParams()
  const [pokemon , setPokemon]=useState({})
  const [pokemonDeleted , setPokemonDeleted]=useState(false)
  const dispatch = useDispatch();
  const navigate = useNavigate();

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

  redirectHome(pokemonDeleted,navigate)

  const {name, image, hp,attack,defense,speed,height,weight,types} = pokemon
  
  return (
    <>
      {pokemon.name?
        (<div className={styles.detail}>
          <div className={styles.container}>
            <div className={styles.header}>
              <Link className={styles.back} to={"/home"}>{"<"}</Link>
              {typeof pokemon.id === "string" && <Link className={styles.edit} to={`/modify/${pokemon.id}`}></Link> }
              <div className={styles.name}>{name}</div>
            </div>
            <div className={styles.number}>Nº{typeof pokemon.id === "string" ? "Unknown" :pokemon.id}</div>
            <div className={styles.body}>
              <div className={styles.containerImage}><img className={styles.image} src={image} alt={name} /></div>
              <div className={styles.containerInfo}>
                  <h1 className={styles.title}>Pokedex data</h1>
                  <div className={styles.containerInfoStructure}>
                    <div className={styles.infoDecoration}>
                      <div className={styles.iconHp}></div>
                      <div className={styles.info}>Hp: {hp}</div>
                    </div>
                    <div className={styles.infoDecoration}>
                      <div className={styles.iconAttack}></div>
                      <div className={styles.info}>Attack: {attack}</div>
                    </div>
                    <div className={styles.infoDecoration}>
                      <div className={styles.iconDefense}></div>
                      <div className={styles.info}>Defense: {defense}</div>
                    </div>
                    <div className={styles.infoDecoration}>
                      <div className={styles.iconSpeed}></div>
                      <div className={styles.info}>Speed: {speed<=0? "Unknown":speed}</div>
                    </div>
                    <div className={styles.infoDecoration}>
                      <div className={styles.iconHeight}></div>
                      <div className={styles.info}>Height: {height<=0? "Unknown":height}</div>
                    </div>
                    <div className={styles.infoDecoration}>
                      <div className={styles.iconWeight}></div>
                      <div className={styles.info}>Weight: {weight<=0? "Unknown":weight}</div>
                    </div>
                  </div>
                  <div className={styles.containerTypes}>{types &&  types.map((type,index) => <div key={index} style={{ color: `${colorTypesGenerator(type)}` }} className={styles.type}>{type}</div>)}</div>
              </div>
              {typeof pokemon.id === "string" && <button className={styles.deleteButton} onClick={(e)=>{
                handlerDelete(e,dispatch,pokemon.id)
                setPokemonDeleted(true)
              }}>Delete Pokemon</button> }
              {pokemonDeleted && <div className={styles.messageDeleted}>Pokemon deleted, redirecting to home...</div>}
            </div>
          </div>
        </div>)
      :
        (<div>Loading...</div>)}
    </>
  )
}

export default Detail