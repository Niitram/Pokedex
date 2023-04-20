export const validateStringAndNumber = (pokemon, setErrors) => {
    //Validacion name
    const regexString = /^[a-zA-Z][a-zA-Z\s]*$/
    if (!pokemon.name) setErrors(prevState => { return { ...prevState, name: "Required" } })
    if (pokemon.name) {
        if (regexString.test(pokemon.name)) {
            setErrors(prevState => { return { ...prevState, name: "" } })
        }
        else { setErrors(prevState => { return { ...prevState, name: "Invalid name" } }) }
    }
    //Validacion hp
    const regexNumber = /^\d+$/
    if (!pokemon.hp) setErrors(prevState => { return { ...prevState, hp: "Required" } })
    if (pokemon.hp) {
        if (regexNumber.test(pokemon.hp)) {
            setErrors(prevState => { return { ...prevState, hp: "" } })
        }
        else { setErrors(prevState => { return { ...prevState, hp: "Invalid number" } }) }
    }
    //Validacion attack
    if (!pokemon.attack) setErrors(prevState => { return { ...prevState, attack: "Required" } })
    if (pokemon.attack) {
        if (regexNumber.test(pokemon.attack)) {
            setErrors(prevState => { return { ...prevState, attack: "" } })
        }
        else { setErrors(prevState => { return { ...prevState, attack: "Invalid number" } }) }
    }
    //Validacion defense
    if (!pokemon.defense) setErrors(prevState => { return { ...prevState, defense: "Required" } })
    if (pokemon.defense) {
        if (regexNumber.test(pokemon.defense)) {
            setErrors(prevState => { return { ...prevState, defense: "" } })
        }
        else { setErrors(prevState => { return { ...prevState, defense: "Invalid number" } }) }
    }
    //Validacion speed
    if (pokemon.speed) {
        if (regexNumber.test(pokemon.speed)) {
            setErrors(prevState => { return { ...prevState, speed: "" } })
        }
        else { setErrors(prevState => { return { ...prevState, speed: "Invalid number" } }) }
    }
    //Validacion image
    const regexUrlImage = /(https?:\/\/.*\.(?:png|jpg|jpeg))/i

    if (!pokemon.image) setErrors(prevState => { return { ...prevState, image: "Required" } })
    if (pokemon.image) {
        if (regexUrlImage.test(pokemon.image)) {
            setErrors(prevState => { return { ...prevState, image: "" } })
        }
        else { setErrors(prevState => { return { ...prevState, image: "Invalid image" } }) }
    }

}

export const validateTypes = (pokemon, setErrors, pokemonTypes) => {
    // Validacion types
    if (pokemon.types.length === 0) {
        setErrors((prevState) => {
            return { ...prevState, types: "Required" };
        });
    } else if (pokemon.types.length > 2) {
        setErrors((prevState) => {
            return { ...prevState, types: "Maximum 2 types" };
        });
    } else {
        setErrors((prevState) => {
            return { ...prevState, types: "" };
        });
    }
};