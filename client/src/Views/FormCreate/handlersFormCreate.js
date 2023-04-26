import { validateStringAndNumber, validateTypes } from "./validates"
import axios from "axios"


export const handleInputChange = (e, setPokemonData, pokemonData, setErrors) => {
    e.preventDefault()
    setPokemonData({ ...pokemonData, [e.target.name]: e.target.value })
    validateStringAndNumber({ ...pokemonData, [e.target.name]: e.target.value }, setErrors)
}

export const handleChangeTypes = (e, setPokemonData, pokemonData, setErrors) => {
    const type = e.target.value;
    // Verificar si el checkbox ha sido marcado o desmarcado
    if (e.target.checked) {
        setPokemonData({ ...pokemonData, types: [...pokemonData.types, type] });
        validateTypes({ ...pokemonData, types: [...pokemonData.types, type] }, setErrors)
    } else {
        setPokemonData({ ...pokemonData, types: pokemonData.types.filter(typeData => typeData !== type) });
        validateTypes({ ...pokemonData, types: pokemonData.types.filter(typeData => typeData !== type) }, setErrors)
    }
};

export const handleSubmit = async (e, setPokemonCreated, pokemonCreated, pokemonData, errors, setErrors, setPokemonData) => {
    e.preventDefault()
    setPokemonCreated({ ...pokemonCreated, creating: true })
    try {
        if (pokemonData.name && !errors.name && !errors.image && !errors.hp && !errors.attack && !errors.defense && !errors.speed && !errors.types) {
            if (!pokemonData.speed) pokemonData.speed = 0
            if (!pokemonData.height) pokemonData.height = 0
            if (!pokemonData.weight) pokemonData.weight = 0

            setPokemonData({
                name: pokemonData.name.toLowerCase(),
                image: pokemonData.image,
                hp: parseInt(pokemonData.hp),
                attack: parseInt(pokemonData.attack),
                defense: parseInt(pokemonData.defense),
                speed: parseInt(pokemonData.speed),
                height: parseInt(pokemonData.height),
                weight: parseInt(pokemonData.weight),
                types: [...pokemonData.types]
            })
            const response = await axios.post("http://localhost:3001/pokemons", pokemonData)
            if (!response.data) {
                setErrors(prevState => { return { ...prevState, name: response.data } })
                setPokemonCreated({ created: false, id: "", creating: false, exists: true })
            }
            if (response.data) {
                setPokemonCreated({ created: true, id: response.data.id, creating: false, exists: false })
            }
        }

    } catch (err) {
        console.log(`error: ${err.message}`);
    }
}
