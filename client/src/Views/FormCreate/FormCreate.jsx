import React, { useEffect, useState } from 'react'
import {  validateStringAndNumber, validateTypes } from './validates'
import axios from "axios"
import { Link } from 'react-router-dom'
import styles from './FormCreate.module.css'


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
  
  console.log((pokemonData.image.length>1 && !errors.image));


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Create your</h1>
        <div className={styles.headerImg}></div>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.formContainer}>
          <div className={styles.containerImgInput}>
            <div className={styles.labelInputImg}>
              <label className={styles.labels} htmlFor="image-input">Image:</label>
              <input className={styles.inputs} placeholder='Url-Image' onChange={handleInputChange} type="text" id="image-input" name="image"/>
            </div>
            <div style={{ backgroundImage: `url(${(pokemonData.image.length>1 && !errors.image) ? pokemonData.image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"})`}} className={styles.containerImg}>
            {errors.image?<div className={styles.errorMessage}>{errors.image}</div>:<div></div>}
            </div>
          </div>
          <div className={styles.containerInputs}>
              <div className={styles.containersImputsLabels}>
                <label className={styles.labels} htmlFor="name-input">Name:</label>
                <input className={styles.inputs} placeholder='Pokemon name' onChange={handleInputChange} value={pokemonData.name} type="text" id="name-input" name="name"/>
                {errors.name?<div className={styles.errorMessage}>{errors.name}</div>:<div className={styles.message}>Only letters</div>}
              </div>
              <div className={styles.containersImputsLabels}>
                <label className={styles.labels} htmlFor="hp-input">Hp:</label>
                <input className={styles.inputs} onChange={handleInputChange} value={pokemonData.hp} type="number" id="hp-input" name="hp" />
                {errors.hp?<div className={styles.errorMessage}>{errors.hp}</div>:<div className={styles.message}>Only numbers</div>}
              </div>
              <div className={styles.containersImputsLabels}>
                <label className={styles.labels} htmlFor="attack-input">Attack:</label>
                <input className={styles.inputs} onChange={handleInputChange} value={pokemonData.attack} type="number" id="attack-input" name="attack" />
                {errors.attack?<div className={styles.errorMessage}>{errors.attack}</div>:<div className={styles.message}>Only numbers</div>}
              </div>
              <div className={styles.containersImputsLabels}>
                <label className={styles.labels} htmlFor="defense-input">Defense:</label>
                <input className={styles.inputs} onChange={handleInputChange} value={pokemonData.defense} type="number" id="defense-input" name="defense"/>
                {errors.defense?<div className={styles.errorMessage}>{errors.defense}</div>:<div className={styles.message}>Only numbers</div>}
              </div>
              <div className={styles.containersImputsLabels}>
                <label className={styles.labels} htmlFor="speed-input">Speed:</label>
                <input className={styles.inputs} onChange={handleInputChange} value={pokemonData.speed} type="number" id="speed-input" name="speed"/>
                {errors.speed?<div className={styles.errorMessage}>{errors.speed}</div>:<div className={styles.message}>Only numbers</div>}
              </div>
              <div className={styles.containersImputsLabels}>
                <label className={styles.labels} htmlFor="height-input">Height:</label>
                <input className={styles.inputs} onChange={handleInputChange} value={pokemonData.height} type="number" id="height-input" name="height"/>
              </div>
              <div className={styles.containersImputsLabels}>
                <label className={styles.labels} htmlFor="weight-input">Weight:</label>
                <input className={styles.inputs} onChange={handleInputChange} value={pokemonData.weight} type="number" id="weight-input" name="weight"/>
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