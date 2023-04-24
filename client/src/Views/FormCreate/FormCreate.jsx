import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './FormCreate.module.css'
import { useSelector } from 'react-redux'
import { handleSubmit } from './handlersFormCreate'
import Typechecked from '../../Components/FormComponents/TypesChecked/Typechecked'
import InputImage from '../../Components/FormComponents/InputImage/InputImage'
import InputStringName from '../../Components/FormComponents/InputString/InputStringName'
import InputNumber from '../../Components/FormComponents/InputNumber/InputNumber'


function FormCreate() {
  const [pokemonCreated,setPokemonCreated]=useState({
    created:false,
    id:"",
    creating:false,
    exists:false
  })
  const allTypes = useSelector(state => state.allTypes)

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

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Create your</h1>
        <div className={styles.headerImg}></div>
      </div>
      <form className={styles.form} onSubmit={(e)=>{
        handleSubmit(e, setPokemonCreated, pokemonCreated, pokemonData, errors, setErrors, setPokemonData)
      }}>
        <div className={styles.formContainer}>
          <InputImage setPokemonData={setPokemonData} pokemonData={pokemonData} setErrors={setErrors} errors={errors} />
          <div className={styles.containerInputs}>
              <InputStringName setPokemonData={setPokemonData} pokemonData={pokemonData} setErrors={setErrors} errors={errors}/>
              <InputNumber setPokemonData={setPokemonData} pokemonData={pokemonData} setErrors={setErrors} errors={errors} ability="hp"/>
              <InputNumber setPokemonData={setPokemonData} pokemonData={pokemonData} setErrors={setErrors} errors={errors} ability="attack"/>
              <InputNumber setPokemonData={setPokemonData} pokemonData={pokemonData} setErrors={setErrors} errors={errors} ability="defense"/>
              <InputNumber setPokemonData={setPokemonData} pokemonData={pokemonData} setErrors={setErrors} errors={errors} ability="speed"/>
              <InputNumber setPokemonData={setPokemonData} pokemonData={pokemonData} setErrors={setErrors} errors={errors} ability="height"/>
              <InputNumber setPokemonData={setPokemonData} pokemonData={pokemonData} setErrors={setErrors} errors={errors} ability="weight"/>
          </div>
        </div>
        <Typechecked errors={errors} allTypes={allTypes} setPokemonData={setPokemonData} pokemonData={pokemonData}setErrors={setErrors} />
        {
          (pokemonData.name&&!errors.name&&!errors.image&&!errors.hp&&!errors.attack&&!errors.defense&&!errors.speed&&!errors.types) ?
            <button type="submit" className={styles.buttonCreate}>Create</button>
            :
            <button type="submit" className={styles.buttonCreate} disabled>Create</button>
        }
      </form>
      {pokemonCreated.exists&&<div className={styles.errorMessage}>Pokemon already exists</div>}
      {pokemonCreated.creating&&<div className={styles.message}>Creating...</div>}
      {pokemonCreated.created&&<Link className={styles.linkDetail} to={`/detail/${pokemonCreated.id}`}>View created Pokemon</Link>}
    </div>
  )
}

export default FormCreate