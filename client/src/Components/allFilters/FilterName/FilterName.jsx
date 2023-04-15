import React from 'react'

function FilterName({handleSortOrderNameChange}) {
    return (
        <div>
            <label htmlFor="sort-order-name">Sort by:</label>
                    <select id="sort-order-name" onChange={handleSortOrderNameChange}>
                        <option value="name-asc">Nombre (Ascending)</option>
                        <option value="name-desc">Nombre (Descending)</option>
                    </select>
        </div>
    )
}

export default FilterName