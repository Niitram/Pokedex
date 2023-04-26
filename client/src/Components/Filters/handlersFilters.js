import { getAllPokemons, filterType, filterByOrigin, orderAttack, orderName } from "../../Redux/actions";


export const handleTypeFilterChange = (e, selectedTypes, setSelectedTypes, dispatch, setCurrentPage) => {
    let updateTypes = [...selectedTypes, e.target.value]
    if (e.target.checked) {
        setSelectedTypes([...updateTypes])
        dispatch(filterType(updateTypes))
        setCurrentPage(1)
    } else {
        updateTypes = updateTypes.filter(type => type !== e.target.value);
        setSelectedTypes([...updateTypes])
        dispatch(filterType(updateTypes))
    }
}

export const handleOriginFilterChange = (e, dispatch, setCurrentPage) => {
    dispatch(filterByOrigin(e.target.value))
    setCurrentPage(1)
}

export const handleSortOrderNameChange = (e, dispatch) => {
    dispatch(orderName(e.target.value))
}

export const handleSortOrderAttackChange = (e, dispatch) => {
    dispatch(orderAttack(e.target.value))
}

export const handleSubmit = (e, setSelectedTypes, dispatch) => {
    e.preventDefault()
    setSelectedTypes([])
    dispatch(getAllPokemons())
}