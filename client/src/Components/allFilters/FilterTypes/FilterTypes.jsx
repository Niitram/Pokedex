import React from 'react'
import { useSelector } from 'react-redux'
import styles from './FilterTypes.module.css'
import colorTypesGenerator from '../../../utils/colorTypesGenerator'

function FilterTypes({ handleTypeFilterChange }) {


    const allTypes = useSelector(state => state.allTypes)

    return (
        <div>
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Filter by types:</legend>
                {
                    allTypes.map((type) => {
                        return (<label style={{ backgroundColor: `${colorTypesGenerator(type.name)}` }} className={styles.label} key={type.id}>
                            <input
                                type="checkbox"
                                name="type"
                                value={type.name}
                                onChange={handleTypeFilterChange} />
                            {type.name}
                        </label>)
                    })
                }
            </fieldset>
        </div>
    )
}

export default FilterTypes