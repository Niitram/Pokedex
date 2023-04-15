import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTypes } from '../../Redux/actions';
import { filterType } from '../../Redux/actions';

function FilterTypes() {

    const dispatch = useDispatch()
    const allTypes = useSelector(state => state.allTypes)
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

    return (
        <div>
            <fieldset>
                <legend>Filter by types:</legend>
                {
                    allTypes.map((type) => {
                        return (<label key={type.id}>
                            <input
                                type="checkbox"
                                name="type"
                                value={type.name}
                                onChange={handleTypeFilterChange} />
                            {type.name}
                        </label>)
                    })
                }
            </fieldset>
        </div>
    )
}

export default FilterTypes