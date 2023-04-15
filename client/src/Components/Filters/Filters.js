import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllTypes } from '../../Redux/actions';

function Filters() {
    const dispatch = useDispatch()
    const copyAllTypes = useSelector(state => state.copyAllTypes)
    useEffect(() => {
        dispatch(getAllTypes())
    }, [dispatch])

    const handleTypeFilterChange = () => {

    }
    const handleOriginFilterChange = () => {

    }
    const handleSortOrderNameChange = () => {

    }
    const handleSortOrderAttackChange = () => {

    }

    return (
        <div>
            <form>
                <button type='submit'>Show all</button>
                <fieldset>
                    <legend>Filter by types:</legend>
                    {
                        copyAllTypes.map((type) => {
                            return (<label key={type.id}>
                                <input type="checkbox" name="type" value={type.name} onChange={handleTypeFilterChange} />
                                {type.name}
                            </label>)
                        })
                    }
                </fieldset>
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