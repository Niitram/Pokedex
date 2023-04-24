import React from 'react'
import { handleInputChange } from '../../../Views/FormCreate/handlersFormCreate'
import styles from './InputImage.module.css'

function InputImage({setPokemonData, pokemonData, setErrors, errors}) {
    return (
        <div className={styles.containerImgInput}>
            <div className={styles.labelInputImg}>
                <label className={styles.labels} htmlFor="image-input">Image:</label>
                <input  className={styles.inputs} placeholder='https://image.png' onChange={(e)=>{
                    handleInputChange(e,setPokemonData,pokemonData,setErrors)
                }} type="text" id="image-input" name="image"/>
            </div>
            <div style={{ backgroundImage: `url(${(pokemonData.image.length>1 && !errors.image) ? pokemonData.image:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/1280px-International_Pok%C3%A9mon_logo.svg.png"})`}} className={styles.containerImg}>
            {errors.image?<div className={styles.errorMessage}>{errors.image}</div>:<div></div>}
            </div>
        </div>
    )
}

export default InputImage