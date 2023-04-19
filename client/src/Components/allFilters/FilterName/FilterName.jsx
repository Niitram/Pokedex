import React from 'react'
import styles from './FilterName.module.css'

function FilterName({handleSortOrderNameChange}) {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor="sort-order-name">Sort by:</label>
                    <select className={styles.select} id="sort-order-name" onChange={handleSortOrderNameChange}>
                        <option value="name-asc">Nombre (Ascending)</option>
                        <option value="name-desc">Nombre (Descending)</option>
                    </select>
        </div>
    )
}

export default FilterName