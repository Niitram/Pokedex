import React from 'react'
import colorTypesGenerator from '../../../utils/colorTypesGenerator'
import styles from './Typechecked.module.css'
import { handleChangeTypes } from '../../../Views/FormCreate/handlersFormCreate'

function Typechecked({inputChecked,errors, allTypes, setPokemonData, pokemonData,setErrors}) {
    return (
        <div className={styles.containerFieldset}>
            <h3 className={styles.titleFieldset}>Types</h3>
            {errors.types?<div className={styles.errorMessage}>{errors.types}</div>:<div className={styles.message}>Maximum 2</div>}
            <fieldset className={styles.fieldset}>
                {
                allTypes.map((type)=>{
                    return(
                    <label style={{ backgroundColor: `${colorTypesGenerator(type.name)}` }} key={type.id} className={styles.labelTypes}>
                    {
                        inputChecked ? <input checked={inputChecked.includes(type.name)} className={styles.inputTypes} type="checkbox" name="types" value={type.name} onChange={(e)=>{
                            handleChangeTypes(e,setPokemonData,pokemonData,setErrors)
                        }} key={type.id} multiple/>
                        :
                        <input className={styles.inputTypes} type="checkbox" name="types" value={type.name} onChange={(e)=>{
                            handleChangeTypes(e,setPokemonData,pokemonData,setErrors)
                        }} key={type.id} multiple/>
                    }
                    {type.name}
                    </label>
                    )
                })
                }
            </fieldset>
        </div>  
    )
}

export default Typechecked