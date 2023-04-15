import React from 'react'

import FilterTypes from '../FilterTypes/FilterTypes';


function Filters() {

    const handleOriginFilterChange = () => {

    }
    const handleSortOrderNameChange = () => {

    }
    const handleSortOrderAttackChange = () => {

    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Show all</button>
                <FilterTypes />

                <div>
                    <label htmlFor="origin-filter">Filter by origin:</label>
                    <select id="origin-filter" onChange={handleOriginFilterChange}>
                        <option value="api">Originals</option>
                        <option value="database">Created by me</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sort-order-name">Sort by:</label>
                    <select id="sort-order-name" onChange={handleSortOrderNameChange}>
                        <option value="name-asc">Nombre (Ascending)</option>
                        <option value="name-desc">Nombre (Descending)</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sort-order-attack">Sort by:</label>
                    <select id="sort-order-attack" onChange={handleSortOrderAttackChange}>
                        <option value="attack-asc">Attack (Ascending)</option>
                        <option value="attack-desc">Attack (Descending)</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filters