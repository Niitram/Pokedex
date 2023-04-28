import axios from "axios"

export const handleSubmitModify = async (e, setPokemonCreated, pokemonCreated, pokemonData, errors, setErrors, setPokemonData, id) => {
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
            const response = await axios.put(`http://localhost:3001/pokemons/${id}`, pokemonData)
            console.log(response);
            if (response.data === "Pokemon already exists") {
                setErrors(prevState => { return { ...prevState, name: response.data } })
                setPokemonCreated({ created: false, id: "", creating: false, exists: true })
            }
            else {
                if (response.data) {
                    setPokemonCreated({ created: true, id: response.data.id, creating: false, exists: false })
                }
            }
        }

    } catch (err) {
        console.log(`error: ${err.message}`);
    }
}