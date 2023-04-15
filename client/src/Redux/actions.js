import axios from "axios"

export const SEARCH_BY_NAME = "SEARCH_BY_NAME"
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_ALL_TYPES = "GET_ALL_TYPES"

const URL_BASE = `http://localhost:3001`

/* busca un pokemon en db y en API */
export const searchByName = (name) => {
    return async function (dispatch) {
        const response = await axios.get(`${URL_BASE}/pokemons/name`, { params: { name: name } })
        if (response.data === "pokemon no encontrado") {
            window.alert('No hay personajes con ese ID o ya esta seleccionado');
        } else {
            //Si lo encuentra devuelve un objeto con el pokemon
            dispatch({
                type: SEARCH_BY_NAME,
                payload: response.data
            })
        }
    }
}
/* trae todos los pokemons */
export const getAllPokemons = () => {
    return async function (dispatch) {
        const response = await axios.get(`${URL_BASE}/pokemons`)
        dispatch({
            type: GET_ALL_POKEMONS,
            payload: response.data
        })
    }
}
/* trae todos los types */
export const getAllTypes = () => {
    return async function (dispatch) {
        const response = await axios.get(`${URL_BASE}/types`)
        dispatch({
            type: GET_ALL_TYPES,
            payload: response.data
        })
    }
}