import axios from "axios"

export const SEARCH_BY_NAME = "SEARCH_BY_NAME"
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_ALL_TYPES = "GET_ALL_TYPES"
export const FILTER_TYPES = "FILTER_TYPES"
export const FILTER_ORIGIN = "FILTER_ORIGIN"
export const ORDER_NAME = "ORDER_NAME"
export const ORDER_ATTACK = "ORDER_ATTACK"
export const DELETE_POKEMON = "DELETE_POKEMON"

const URL_BASE = `http://localhost:3001`

/* busca un pokemon en db y en API */
export const searchByName = (pokemonData) => {
    /* return async function (dispatch) {
        const response = await axios.get(`${URL_BASE}/pokemons/name`, { params: { name: name } })
        if (response.data === "pokemon no encontrado") {
            window.alert('Pokemon not found');
        } else {
            //Si lo encuentra devuelve un objeto con el pokemon
            dispatch({
                type: SEARCH_BY_NAME,
                payload: response.data
            })
        }
    } */
    return {
        type: SEARCH_BY_NAME,
        payload: pokemonData
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
/* delete pokemon db */
export const deletePokemon = (id) => {
    try {
        return async function (dispatch) {
            await axios.delete(`${URL_BASE}/pokemons/${id}`)
            dispatch({
                type: DELETE_POKEMON,
                payload: id
            })
        }
        // eslint-disable-next-line no-unreachable
    } catch (error) {
        console.error(error.mesagge);
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
/* filtra los types */
export const filterType = (arrType) => {
    return {
        type: FILTER_TYPES,
        payload: arrType
    }
}
/* filtra  origin  */
export const filterByOrigin = (string) => {
    return {
        type: FILTER_ORIGIN,
        payload: string
    }
}
/* filtra  origin  */
export const orderName = (string) => {
    return {
        type: ORDER_NAME,
        payload: string
    }
}
/* ordena  attack  */
export const orderAttack = (string) => {
    return {
        type: ORDER_ATTACK,
        payload: string
    }
}