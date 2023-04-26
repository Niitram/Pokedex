import React from 'react'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { searchByName } from '../../Redux/actions';
import styles from './SearchPokemon.module.css'
import { handlerChange, handlerSubmit } from './handlersSearchPokemon';


function SearchPokemon() {
    const dispatch = useDispatch()
    const [nameSearch, setNameSearch] = useState("")
    const [searching, setSearching] = useState(false)
    const [pokemonFound, setPokemonFound] = useState(true)

    
    return (
        <>
            <form className={styles.containerForm} onSubmit={(e)=>{
                handlerSubmit(e,nameSearch,setSearching,setPokemonFound,dispatch,searchByName,setNameSearch)
            }}>
                <label className={styles.label} htmlFor="">Search Pokemon</label>
                {searching && <div className={styles.searching}>Searching...</div>}
                {!pokemonFound && <div className={styles.pokemonFound}>Pokemon not found</div>}
                <div>
                    <input
                        className={styles.input} 
                        onChange={(e)=>{handlerChange(e, setNameSearch)}} 
                        type="text" 
                        value={nameSearch}
                        placeholder='Your favorite Pokemon' 
                        onKeyDown={(e)=>{
                            if (e.key === 'Enter') {
                                handlerSubmit(e,nameSearch,setSearching,setPokemonFound,dispatch,searchByName,setNameSearch)
                            }}}
                    />
                    <button disabled={nameSearch.length===0 || nameSearch===" "} className={styles.button} type="submit" >Search</button>
                </div>
            </form>
        </>
    )
}

export default SearchPokemon