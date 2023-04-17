import React, { useState } from 'react'
import { validateImage, validateStringAndNumber } from './validates'


function FormCreate() {
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
  //Validates
  /* validateStringAndNumber(pokemonData,setErrors) */


  //Configurar para que empieze con error y se limpie al salir
  /* useEffect(()=>{
    setErrors()
  },[]) */

  //handlers
  

  const handleInputChange =(e)=>{
    e.preventDefault()
    setPokemonData({...pokemonData, [e.target.name]:e.target.value})
    validateStringAndNumber({...pokemonData, [e.target.name]:e.target.value},setErrors)
  }
  const handleInputImage =(e)=>{
    e.preventDefault()
    console.log(e.target.files[0]);
    setPokemonData({...pokemonData, [e.target.name]:e.target.files[0]})
    validateImage({...pokemonData, [e.target.name]:e.target.files[0]},setErrors)
  }
  const handleChangeTypes =(e)=>{
  }

  const handleSubmit =(e)=>{
    e.preventDefault()

  }
  



  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name-input">Name:</label>
          <input onChange={handleInputChange} value={pokemonData.name} type="text" id="name-input" name="name"/>
          {errors.name?<div>{errors.name}</div>:<div></div>}
        </div>
        <div>
          <div>
            <label htmlFor="image-input">Image:</label>
            <input onChange={handleInputImage} type="file" id="image-input" name="image" accept="image/png, image/jpeg, image/jpg"/>
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
                <legend>Types:</legend>
                <label>
                  <input type="checkbox" name="type" value="normal" onChange={handleChangeTypes} />
                  Normal
                </label>
                <label>
                  <input type="checkbox" name="type" value="fighting" onChange={handleChangeTypes} />
                  Fighting
                </label>
                <label>
                  <input type="checkbox" name="type" value="flying" onChange={handleChangeTypes} />
                  Flying
                </label>
                <label>
                  <input type="checkbox" name="type" value="poison" onChange={handleChangeTypes} />
                  Poison
                </label>
                <label>
                  <input type="checkbox" name="type" value="ground" onChange={handleChangeTypes} />
                  Ground
                </label>
                <label>
                  <input type="checkbox" name="type" value="rock" onChange={handleChangeTypes} />
                  Rock
                </label>
                <label>
                  <input type="checkbox" name="type" value="bug" onChange={handleChangeTypes} />
                  Bug
                </label>
                <label>
                  <input type="checkbox" name="type" value="ghost" onChange={handleChangeTypes} />
                  Ghost
                </label>
                <label>
                  <input type="checkbox" name="type" value="steel" onChange={handleChangeTypes} />
                  Steel
                </label>
                <label>
                  <input type="checkbox" name="type" value="fire" onChange={handleChangeTypes} />
                  Fire
                </label>
                <label>
                  <input type="checkbox" name="type" value="water" onChange={handleChangeTypes} />
                  Water
                </label>
                <label>
                  <input type="checkbox" name="type" value="grass" onChange={handleChangeTypes} />
                  Grass
                </label>
                <label>
                  <input type="checkbox" name="type" value="electric" onChange={handleChangeTypes} />
                  Electric
                </label>
                <label>
                  <input type="checkbox" name="type" value="psychic" onChange={handleChangeTypes} />
                  Psychic
                </label>
                <label>
                  <input type="checkbox" name="type" value="ice" onChange={handleChangeTypes} />
                  Ice
                </label>
                <label>
                  <input type="checkbox" name="type" value="dragon" onChange={handleChangeTypes} />
                  Dragon
                </label>
                <label>
                  <input type="checkbox" name="type" value="dark" onChange={handleChangeTypes} />
                  Dark
                </label>
                <label>
                  <input type="checkbox" name="type" value="fairy" onChange={handleChangeTypes} />
                  Fairy
                </label>
              </fieldset>
            </div>
          </div>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  )
}

export default FormCreate