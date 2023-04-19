import React from 'react'
import styles from './FilterOrigin.module.css'

function FilterOrigin({handleOriginFilterChange}) {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor="origin-filter">Origin:</label>
            <select className={styles.select} id="origin-filter" onChange={handleOriginFilterChange}>
                <option value="api">Originals</option>
                <option value="database">Created by me</option>
            </select>
        </div>
    )
}

export default FilterOrigin