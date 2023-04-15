import { SEARCH_BY_NAME, GET_ALL_POKEMONS, GET_ALL_TYPES } from "./actions"




const initialState = {
    allPokemons: [],
    copyAllPokemons: [],
    allTypes: [],
    copyAllTypes: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BY_NAME:
            const aux = []
            aux.push(action.payload)
            return { ...state, copyAllPokemons: [...aux] }

        case GET_ALL_POKEMONS:
            return { ...state, copyAllPokemons: [...action.payload], allPokemons: [...action.payload] }

        case GET_ALL_TYPES:
            return { ...state, allTypes: [...action.payload], copyAllTypes: [...action.payload] }

        default:
            return { ...state }
    }
}

export default rootReducer;