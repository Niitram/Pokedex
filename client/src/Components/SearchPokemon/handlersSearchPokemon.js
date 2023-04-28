import axios from 'axios';


export const handlerSubmit = async (e, nameSearch, setSearching, setPokemonFound, dispatch, searchByName, setNameSearch) => {
    e.preventDefault()
    try {
        if (nameSearch.length > 0) {
            setSearching(true)
            const response = await axios.get(`http://localhost:3001/pokemons/name`, { params: { name: nameSearch } })
            let pokemonData = {}
            if (Array.isArray(response.data)) {
                pokemonData = {
                    name: response.data[0].name,
                    attack: response.data[0].attack,
                    hp: response.data[0].hp,
                    defense: response.data[0].defense,
                    height: response.data[0].height,
                    speed: response.data[0].speed,
                    weight: response.data[0].weight,
                    id: response.data[0].id,
                    image: response.data[0].image,
                    types: response.data[0].types.map(tipo => tipo.name)
                }
            } else {
                pokemonData = { ...response.data }
            }
            if (response.data === "pokemon no encontrado") {
                setPokemonFound(false)
            } else {
                setPokemonFound(true)
                dispatch(searchByName(pokemonData))
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