import React, { useEffect, useState } from 'react'
import { getAllTypes } from '../../Redux/actions';
import FilterTypes from '../allFilters/FilterTypes/FilterTypes';
import { useDispatch } from 'react-redux';
import FilterOrigin from '../allFilters/FilterOrigin/FilterOrigin';
import FilterName from '../allFilters/FilterName/FilterName';
import FilterAttack from '../allFilters/FilterAttack/FilterAttack';
import styles from './Filters.module.css'
import { handleOriginFilterChange, handleSortOrderAttackChange, handleSortOrderNameChange, handleSubmit, handleTypeFilterChange } from './handlersFilters';

function Filters() {


    const dispatch = useDispatch()
    const [selectedTypes, setSelectedTypes] = useState([])

    useEffect(() => {
        dispatch(getAllTypes())
    }, [dispatch])

    

    return (
        <div>
            <form className={styles.form} onSubmit={(e)=>{
                handleSubmit(e, setSelectedTypes, dispatch)
            }}>
                <div>
                    <FilterTypes handleTypeFilterChange={(e)=>{
                        handleTypeFilterChange(e,selectedTypes, setSelectedTypes,dispatch)
                    }} selectedTypes={selectedTypes}/>
                </div>
                <div>
                    <FilterOrigin handleOriginFilterChange={(e)=>{
                        handleOriginFilterChange(e, dispatch)
                    }} />
                </div>
                <div>
                    <FilterName handleSortOrderNameChange={(e)=>{
                        handleSortOrderNameChange(e,dispatch)
                    }} />
                </div>
                <div>
                    <FilterAttack handleSortOrderAttackChange={(e)=>{
                        handleSortOrderAttackChange(e,dispatch)
                    }} />
                </div>
                <button  className={styles.button} type='submit'>Show all</button>
            </form>
        </div>
    )
}

export default Filters