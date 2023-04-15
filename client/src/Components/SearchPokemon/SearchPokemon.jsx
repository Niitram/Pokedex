import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { useState } from 'react';
import { searchByName } from '../../Redux/actions';

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
        <div>
            <form onSubmit={handlerSubmit}>
                <label htmlFor="">Search Pokemon</label>
                <div>
                    <input 
                        onChange={handlerChange} 
                        type="text" 
                        placeholder='Your favorite Pokemon' 
                        onKeyDown={(e)=>{
                            if (e.key === 'Enter') {
                                handlerSubmit(e)
                            }}}
                    />
                    <button type="submit">Search</button>
                </div>
            </form>
        </div>
    )
}

export default SearchPokemon