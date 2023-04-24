import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import styles from "./ModifyPokemon.module.css"
import InputImage from '../../Components/FormComponents/InputImage/InputImage';
import InputStringName from '../../Components/FormComponents/InputString/InputStringName';
import InputNumber from '../../Components/FormComponents/InputNumber/InputNumber';
import Typechecked from '../../Components/FormComponents/TypesChecked/Typechecked';
import { handleSubmitModify } from './handleSubmitModify';

function ModifyPokemon() {
    const {id}=useParams()
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
    
    //Configurar para que empieze con error y se limpie al salir
    useEffect(()=>{
        fetch(`http://localhost:3001/pokemons/${id}`)
                .then((response) => response.json())
                .then((poke) => {
                    if (poke.name) {
                        setPokemonData(poke);
                    } else {
                    window.alert("No hay personajes con ese ID");
                    }
                })
                .catch((err) => {
                    console.log(`error: ${err.message}`);
                });
                return setPokemonData({
                    name:"",
                    image:"",
                    hp:0,
                    attack:0,
                    defense:0,
                    speed:0,
                    height:0,
                    weight:0,
                    types:[]
                });
    },[id])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Edit your</h1>
                <div className={styles.headerImg}></div>
            </div>
            <form className={styles.form} onSubmit={(e)=>{
                handleSubmitModify(e, setPokemonCreated, pokemonCreated, pokemonData, errors, setErrors, setPokemonData,id)
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
                <Typechecked inputChecked={pokemonData.types} errors={errors} allTypes={allTypes} setPokemonData={setPokemonData} pokemonData={pokemonData}setErrors={setErrors} />
                {
                (pokemonData.name&&!errors.name&&!errors.image&&!errors.hp&&!errors.attack&&!errors.defense&&!errors.speed&&!errors.types) ?
                    <button type="submit" className={styles.buttonCreate}>Modify</button>
                    :
                    <button type="submit" className={styles.buttonCreate} disabled>Modify</button>
                }
            </form>
            {pokemonCreated.exists&&<div className={styles.errorMessage}>Pokemon already exists</div>}
            {pokemonCreated.creating&&<div className={styles.message}>Modifying...</div>}
            {pokemonCreated.created&&<Link className={styles.linkDetail} to={`/detail/${pokemonCreated.id}`}>View created Pokemon</Link>}
            </div>
        )
}

export default ModifyPokemon