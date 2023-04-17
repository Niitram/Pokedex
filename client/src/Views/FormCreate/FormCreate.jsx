import React, { useEffect, useState } from 'react'
import {  validateStringAndNumber, validateTypes } from './validates'
import axios from "axios"
import { Link } from 'react-router-dom'


function FormCreate() {
  const [pokemonTypes,setPokemonTypes]=useState([])
  const [pokemonCreated,setPokemonCreated]=useState({created:false,id:""})

  const [pokemonData,setPokemonData]=useState({
    name:"",
    image:"",
    hp:0,
    attack:0,
    defense:0,
    speed:0,
    height:0,
    weight:0,
    types:[]
  })
  const [errors,setErrors]=useState({
    name:"",
    image:"",
    hp:0,
    attack:0,
    defense:0,
    speed:0,
    height:0,
    weight:0,
    types:[]
  })
  
  //Configurar para que empieze con error y se limpie al salir
  useEffect(()=>{
    fetch("http://localhost:3001/types")
      .then(response=>response.json())
      .then((data)=>{
        if (data.length) {
          setPokemonTypes({...pokemonTypes, types : data.map(type=>type.name)})
        }
      }).catch((err)=>{
        console.log(`error: ${err.message}`);
      })

  },[])

  //handlers

  const handleInputChange =(e)=>{
    e.preventDefault()
    setPokemonData({...pokemonData, [e.target.name]:e.target.value})
    validateStringAndNumber({...pokemonData, [e.target.name]:e.target.value},setErrors)
  }

  const handleChangeTypes = (e) => {
    const type = e.target.value;
    // Verificar si el checkbox ha sido marcado o desmarcado
    if (e.target.checked) {
      setPokemonData({ ...pokemonData, types: [...pokemonData.types, type] });
      validateTypes({ ...pokemonData, types: [...pokemonData.types, type] },setErrors)
    } else{
      setPokemonData({ ...pokemonData, types: pokemonData.types.filter(typeData=>typeData!==type) });
      validateTypes({ ...pokemonData, types: pokemonData.types.filter(typeData=>typeData!==type) },setErrors)
    }
  };

  const handleSubmit = async(e)=>{
    e.preventDefault()
    try {
      if(pokemonData.name&&!errors.name&&!errors.image&&!errors.hp&&!errors.attack&&!errors.defense&&!errors.speed&&!errors.types){
        const response = await axios.post("http://localhost:3001/pokemons",pokemonData )
        if (response.data==="Ya existe un Pokemon con ese nombre") {
          setErrors(prevState => { return { ...prevState, name: response.data} })
        }
        else{
          console.log(response.data);
          setPokemonCreated({created:true,id:response.data.id})
        }
      }
      
    } catch (err) {
      console.log(`error: ${err.message}`);
    }
  }
  



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name-input">Name:</label>
          <input placeholder='Pokemon name' onChange={handleInputChange} value={pokemonData.name} type="text" id="name-input" name="name"/>
          {errors.name?<div>{errors.name}</div>:<div></div>}
        </div>
        <div>
          <div>
            <label htmlFor="image-input">Image:</label>
            <input placeholder='Url-Image' onChange={handleInputChange} type="text" id="image-input" name="image"/>
            {errors.image?<div>{errors.image}</div>:<div></div>}
          </div>
          <div>
            <div>
              <label htmlFor="hp-input">Hp:</label>
              <input onChange={handleInputChange} value={pokemonData.hp} type="number" id="hp-input" name="hp" />
              {errors.hp?<div>{errors.hp}</div>:<div></div>}
            </div>
            <div>
              <label htmlFor="attack-input">Attack:</label>
              <input onChange={handleInputChange} value={pokemonData.attack} type="number" id="attack-input" name="attack" />
              {errors.attack?<div>{errors.attack}</div>:<div></div>}
            </div>
            <div>
              <label htmlFor="defense-input">Defense:</label>
              <input onChange={handleInputChange} value={pokemonData.defense} type="number" id="defense-input" name="defense"/>
              {errors.defense?<div>{errors.defense}</div>:<div></div>}
            </div>
            <div>
              <label htmlFor="speed-input">Speed:</label>
              <input onChange={handleInputChange} value={pokemonData.speed} type="number" id="speed-input" name="speed"/>
              {errors.speed?<div>{errors.speed}</div>:<div></div>}
            </div>
            <div>
              <label htmlFor="height-input">Height:</label>
              <input onChange={handleInputChange} value={pokemonData.height} type="number" id="height-input" name="height"/>
            </div>
            <div>
              <label htmlFor="weight-input">Weight:</label>
              <input onChange={handleInputChange} value={pokemonData.weight} type="number" id="weight-input" name="weight"/>
            </div>
            <div>
              <fieldset>
              {errors.types?<div>{errors.types}</div>:<div></div>}
                <legend>Types:</legend>
                <label>
                  <input type="checkbox" name="types" value="normal" onChange={handleChangeTypes} multiple/>
                  Normal
                </label>
                <label>
                  <input type="checkbox" name="types" value="fighting" onChange={handleChangeTypes} />
                  Fighting
                </label>
                <label>
                  <input type="checkbox" name="types" value="flying" onChange={handleChangeTypes} />
                  Flying
                </label>
                <label>
                  <input type="checkbox" name="types" value="poison" onChange={handleChangeTypes} />
                  Poison
                </label>
                <label>
                  <input type="checkbox" name="types" value="ground" onChange={handleChangeTypes} />
                  Ground
                </label>
                <label>
                  <input type="checkbox" name="types" value="rock" onChange={handleChangeTypes} />
                  Rock
                </label>
                <label>
                  <input type="checkbox" name="types" value="bug" onChange={handleChangeTypes} />
                  Bug
                </label>
                <label>
                  <input type="checkbox" name="types" value="ghost" onChange={handleChangeTypes} />
                  Ghost
                </label>
                <label>
                  <input type="checkbox" name="types" value="steel" onChange={handleChangeTypes} />
                  Steel
                </label>
                <label>
                  <input type="checkbox" name="types" value="fire" onChange={handleChangeTypes} />
                  Fire
                </label>
                <label>
                  <input type="checkbox" name="types" value="water" onChange={handleChangeTypes} />
                  Water
                </label>
                <label>
                  <input type="checkbox" name="types" value="grass" onChange={handleChangeTypes} />
                  Grass
                </label>
                <label>
                  <input type="checkbox" name="types" value="electric" onChange={handleChangeTypes} />
                  Electric
                </label>
                <label>
                  <input type="checkbox" name="types" value="psychic" onChange={handleChangeTypes} />
                  Psychic
                </label>
                <label>
                  <input type="checkbox" name="types" value="ice" onChange={handleChangeTypes} />
                  Ice
                </label>
                <label>
                  <input type="checkbox" name="types" value="dragon" onChange={handleChangeTypes} />
                  Dragon
                </label>
                <label>
                  <input type="checkbox" name="types" value="dark" onChange={handleChangeTypes} />
                  Dark
                </label>
                <label>
                  <input type="checkbox" name="types" value="fairy" onChange={handleChangeTypes} />
                  Fairy
                </label>
              </fieldset>
            </div>
          </div>
        </div>
        {
          (pokemonData.name&&!errors.name&&!errors.image&&!errors.hp&&!errors.attack&&!errors.defense&&!errors.speed&&!errors.types) ?
            <button type="submit">Create</button>
            :
            <button type="submit" disabled>Create</button>
        }
      </form>
      {pokemonCreated.created&&<Link to={`/detail/${pokemonCreated.id}`}>View created Pokemon</Link>}
    </div>
  )
}

export default FormCreate