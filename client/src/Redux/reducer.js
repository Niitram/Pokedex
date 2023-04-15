import { SEARCH_BY_NAME, GET_ALL_POKEMONS, GET_ALL_TYPES, FILTER_TYPES } from "./actions"




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

        case FILTER_TYPES:
            const arrFilter = [...state.allPokemons]
            const filter = arrFilter.filter(pokemon => {
                return action.payload.every(type => pokemon.types.includes(type))
            });
            return {
                ...state,
                copyAllPokemons: [...filter]
            }

        default:
            return { ...state }
    }
}

export default rootReducer;