import React from 'react'
import { useSelector } from 'react-redux'

function FilterTypes({ handleTypeFilterChange }) {


    const allTypes = useSelector(state => state.allTypes)

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