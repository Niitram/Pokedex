import React from 'react'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { searchByName } from '../../Redux/actions';
import styles from './SearchPokemon.module.css'
import axios from 'axios';

function SearchPokemon() {
    const dispatch = useDispatch()
    const [nameSearch, setNameSearch] = useState("")
    const [searching, setSearching] = useState(false)
    const [pokemonFound, setPokemonFound] = useState(true)



    const handlerSubmit= async(e)=>{
        e.preventDefault()
        try {
            if (nameSearch.length>0) {
                setSearching(true)
                const response = await axios.get(`http://localhost:3001/pokemons/name`, { params: { name: nameSearch } })
                if (response.data === "pokemon no encontrado") {
                    setPokemonFound(false)
                } else {
                    setPokemonFound(true)
                    dispatch(searchByName(response.data))
                }
            }
        } catch (error) {
            console.log(error.message);
        }finally{
            setSearching(false)
            setNameSearch("")
        }
    }
    const handlerChange=(e)=>{
        e.preventDefault()
        setNameSearch(e.target.value)
    }
    return (
        <>
            <form className={styles.containerForm} onSubmit={handlerSubmit}>
                <label className={styles.label} htmlFor="">Search Pokemon</label>
                {searching && <div className={styles.searching}>Searching...</div>}
                {!pokemonFound && <div className={styles.pokemonFound}>Pokemon not found</div>}
                <div>
                    <input
                        className={styles.input} 
                        onChange={handlerChange} 
                        type="text" 
                        value={nameSearch}
                        placeholder='Your favorite Pokemon' 
                        onKeyDown={(e)=>{
                            if (e.key === 'Enter') {
                                handlerSubmit(e)
                            }}}
                    />
                    <button disabled={nameSearch.length===0} className={styles.button} type="submit" >Search</button>
                </div>
            </form>
        </>
    )
}

export default SearchPokemon