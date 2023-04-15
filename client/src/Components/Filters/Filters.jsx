import React, { useEffect, useState } from 'react'
import { filterByOrigin, filterType, getAllPokemons, getAllTypes, orderAttack, orderName } from '../../Redux/actions';
import FilterTypes from '../allFilters/FilterTypes/FilterTypes';
import { useDispatch } from 'react-redux';
import FilterOrigin from '../allFilters/FilterOrigin/FilterOrigin';
import FilterName from '../allFilters/FilterName/FilterName';
import FilterAttack from '../allFilters/FilterAttack/FilterAttack';

function Filters() {


    const dispatch = useDispatch()
    const [selectedTypes, setSelectedTypes] = useState([])

    useEffect(() => {
        dispatch(getAllTypes())
    }, [dispatch])

    const handleTypeFilterChange = (e) => {
        let updateTypes = [...selectedTypes, e.target.value]
        if (e.target.checked) {
            updateTypes = [...selectedTypes, e.target.value]
            setSelectedTypes([...updateTypes])
            dispatch(filterType(updateTypes))
        } else {
            updateTypes = updateTypes.filter(type => type !== e.target.value);
            setSelectedTypes([...updateTypes])
            dispatch(filterType(updateTypes))
        }
    }

    const handleOriginFilterChange = (e) => {
        dispatch(filterByOrigin(e.target.value))
    }
    const handleSortOrderNameChange = (e) => {
        dispatch(orderName(e.target.value))
    }
    const handleSortOrderAttackChange = (e) => {
        dispatch(orderAttack(e.target.value))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getAllPokemons())
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <button type='submit'>Clear filters</button>
                <div>
                    <FilterTypes handleTypeFilterChange={handleTypeFilterChange} />
                </div>
                <div>
                    <FilterOrigin handleOriginFilterChange={handleOriginFilterChange} />
                </div>
                <div>
                    <FilterName handleSortOrderNameChange={handleSortOrderNameChange} />
                </div>
                <div>
                    <FilterAttack handleSortOrderAttackChange={handleSortOrderAttackChange} />
                </div>
            </form>
        </div>
    )
}

export default Filters