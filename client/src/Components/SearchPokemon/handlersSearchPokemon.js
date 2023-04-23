import axios from 'axios';


export const handlerSubmit = async (e, nameSearch, setSearching, setPokemonFound, dispatch, searchByName, setNameSearch) => {
    e.preventDefault()
    try {
        if (nameSearch.length > 0) {
            setSearching(true)
            const response = await axios.get(`http://localhost:3001/pokemons/name`, { params: { name: nameSearch } })
            if (response.data === "pokemon no encontrado") {
                setPokemonFound(false)
            } else {
                setPokemonFound(true)
                dispatch(searchByName(response.data))
            }
        }
    } catch (error) {
        console.log(error.message);
    } finally {
        setSearching(false)
        setNameSearch("")
    }
}

export const handlerChange = (e, setNameSearch) => {
    e.preventDefault()
    setNameSearch(e.target.value)
}