import React from 'react'

function FilterAttack({handleSortOrderAttackChange}) {
    return (
        <div>
            <label htmlFor="sort-order-attack">Sort by:</label>
                        <select id="sort-order-attack" onChange={handleSortOrderAttackChange}>
                            <option value="attack-asc">Attack (Ascending)</option>
                            <option value="attack-desc">Attack (Descending)</option>
                        </select>
        </div>
    )
}

export default FilterAttack