import React from 'react'

function FilterOrigin({handleOriginFilterChange}) {
    return (
        <div>
            <label htmlFor="origin-filter">Filter by origin:</label>
            <select id="origin-filter" onChange={handleOriginFilterChange}>
                <option value="api">Originals</option>
                <option value="database">Created by me</option>
            </select>
        </div>
    )
}

export default FilterOrigin