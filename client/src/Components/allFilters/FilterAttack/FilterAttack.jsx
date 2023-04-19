import React from 'react'
import styles from './FilterAttack.module.css'

function FilterAttack({handleSortOrderAttackChange}) {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor="sort-order-attack">Sort by:</label>
            <select className={styles.filter} id="sort-order-attack" onChange={handleSortOrderAttackChange}>
                <option value="attack-asc">Attack (Ascending)</option>
                <option value="attack-desc">Attack (Descending)</option>
            </select>
        </div>
    )
}

export default FilterAttack