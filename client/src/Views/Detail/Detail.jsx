import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function Detail() {
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

  const {name, image, hp,attack,defense,speed,height,weight,types} = pokemon
  
  return (
      <>
      {pokemon?
        (<div>
          <Link to={"/home"}>Home</Link>
          <div>{name}</div>
          <div>Nº{pokemon.id}</div>
          <div>
            <div><img src={image} alt={name} /></div>
            <div>
                <div>{hp}</div>
                <div>{attack}</div>
                <div>{defense}</div>
                <div>{speed}</div>
                <div>{height}</div>
                <div>{weight}</div>
                <div>{types && types.length ? types.map(type => <div>{type}</div>) : <div>{types}</div>}</div>
            </div>
          </div>
        </div>)
      :
        (<div>Loading...</div>)}
    </>
  )
}

export default Detail