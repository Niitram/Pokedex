import React from 'react'
import { useDispatch } from "react-redux";
import { useState } from 'react';
import { searchByName } from '../../Redux/actions';
import styles from './SearchPokemon.module.css'

function SearchPokemon() {
    const dispatch = useDispatch()
    const [nameSearch, setNameSearch] = useState("")

    const handlerSubmit=(e)=>{
        e.preventDefault()
        if (nameSearch.length>0) {
            dispatch(searchByName(nameSearch))
        }else{

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
                <div>
                    <input
                        className={styles.input} 
                        onChange={handlerChange} 
                        type="text" 
                        placeholder='Your favorite Pokemon' 
                        onKeyDown={(e)=>{
                            if (e.key === 'Enter') {
                                handlerSubmit(e)
                            }}}
                    />
                    <button className={styles.button} type="submit" >Search</button>
                </div>
            </form>
        </>
    )
}

export default SearchPokemon