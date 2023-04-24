import React from 'react'
import styles from "./InputNumber.module.css"
import { handleInputChange } from '../../../Views/FormCreate/handlersFormCreate'

function InputNumber({setPokemonData,pokemonData,setErrors,errors,ability}) {
    return (
        <div className={styles.containersImputsLabels}>
            <div className={styles.containerinputs}>
                <label className={styles.labels} htmlFor={`${ability}-input`}>{ability}:</label>
                <input className={styles.inputs} onChange={(e)=>{
                    handleInputChange(e,setPokemonData,pokemonData,setErrors)
                }} value={pokemonData[ability]} type="number" id={`${ability}-input`} name={`${ability}`} />
            </div>
            {errors[ability]?<div className={styles.errorMessage}>{errors[ability]}</div>:<div className={styles.message}>Only numbers</div>}
        </div>
    )
}

export default InputNumber