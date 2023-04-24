import React from 'react'
import styles from './InputStringName.module.css'
import { handleInputChange } from '../../../Views/FormCreate/handlersFormCreate'

function InputStringName({setPokemonData,pokemonData,setErrors,errors}) {
    return (
        <div className={styles.containersImputsLabels}>
            <div className={styles.containerinput}>
                <label className={styles.labels} htmlFor="name-input">Name:</label>
                <input className={styles.inputs} placeholder='pikachu, lucario, etc' onChange={(e)=>{
                    handleInputChange(e,setPokemonData,pokemonData,setErrors)
                }} value={pokemonData.name} type="text" id="name-input" name="name"/>
            </div>
            {errors.name?<div className={styles.errorMessage}>{errors.name}</div>:<div className={styles.message}>Only letters</div>}
        </div>
    )
}

export default InputStringName