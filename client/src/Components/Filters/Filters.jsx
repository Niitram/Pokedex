import React, { useEffect, useState } from 'react'
import { filterByOrigin, filterType, getAllPokemons, getAllTypes, orderAttack, orderName } from '../../Redux/actions';
import FilterTypes from '../allFilters/FilterTypes/FilterTypes';
import { useDispatch } from 'react-redux';
import FilterOrigin from '../allFilters/FilterOrigin/FilterOrigin';
import FilterName from '../allFilters/FilterName/FilterName';
import FilterAttack from '../allFilters/FilterAttack/FilterAttack';
import styles from './Filters.module.css'

function Filters() {


    const dispatch = useDispatch()
    const [selectedTypes, setSelectedTypes] = useState([])

    useEffect(() => {
        dispatch(getAllTypes())
    }, [dispatch])

    const handleTypeFilterChange = (e) => {
        let updateTypes = [...selectedTypes, e.target.value]
        if (e.target.checked) {
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
        setSelectedTypes([])
        dispatch(getAllPokemons())
    }

    return (
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div>
                    <FilterTypes handleTypeFilterChange={handleTypeFilterChange} selectedTypes={selectedTypes}/>
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
                <button  className={styles.button} type='submit'>Show all</button>
            </form>
        </div>
    )
}

export default Filters