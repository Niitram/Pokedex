import { SEARCH_BY_NAME, GET_ALL_POKEMONS, GET_ALL_TYPES, FILTER_TYPES, FILTER_ORIGIN, ORDER_NAME, ORDER_ATTACK, DELETE_POKEMON } from "./actions"




const initialState = {
    allPokemons: [],
    copyAllPokemons: [],
    allTypes: [],
    copyAllTypes: [],
    filteredPokemons: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BY_NAME:
            const aux = []
            aux.push(action.payload)
            return { ...state, copyAllPokemons: [...aux] }

        case GET_ALL_POKEMONS:
            return {
                ...state,
                copyAllPokemons: [...action.payload],
                allPokemons: [...action.payload],
                filteredPokemons: [...action.payload]
            }
        case DELETE_POKEMON:
            const pokemons = state.allPokemons.filter(pokemon => pokemon.id !== action.payload);
            return {
                ...state,
                copyAllPokemons: [...pokemons],
                allPokemons: [...pokemons],
                filteredPokemons: [...pokemons]
            }

        case GET_ALL_TYPES:
            return { ...state, allTypes: [...action.payload], copyAllTypes: [...action.payload] }

        //Todos los filters
        case FILTER_ORIGIN:
            //ordenamiento por origin
            if (action.payload === "api") {
                const numericPokemons = state.allPokemons.filter(pokemon => typeof pokemon.id === 'number');
                return {
                    ...state,
                    copyAllPokemons: [...numericPokemons],
                    filteredPokemons: [...numericPokemons]
                }
            } else {
                const stringIdPokemons = state.allPokemons.filter(pokemon => typeof pokemon.id !== 'number');
                return {
                    ...state,
                    copyAllPokemons: [...stringIdPokemons],
                    filteredPokemons: [...stringIdPokemons]
                }
            }
        case FILTER_TYPES:
            //ordenamiento por types
            const arrFilter = [...state.filteredPokemons]
            const filter = arrFilter.filter(pokemon => {
                return action.payload.every(type => pokemon.types.includes(type))
            });
            return {
                ...state,
                copyAllPokemons: [...filter]
            }
        //Ordena por Name
        case ORDER_NAME:
            //ordenamiento por nombre
            if (action.payload === "name-asc") {
                //ordenar ascendente
                const ordered = [...state.copyAllPokemons].sort((a, b) => a.name.localeCompare(b.name))
                return {
                    ...state,
                    copyAllPokemons: [...ordered],
                    filteredPokemons: [...ordered]
                }
            } else {
                //ordenar descendente
                const ordered = [...state.copyAllPokemons].sort((a, b) => b.name.localeCompare(a.name))
                return {
                    ...state,
                    copyAllPokemons: [...ordered],
                    filteredPokemons: [...ordered]
                }
            }
        //Ordena por Attack
        case ORDER_ATTACK:
            //ordenamiento por nombre
            if (action.payload === "attack-asc") {
                //ordenar ascendente
                const ordered = [...state.copyAllPokemons].sort((a, b) => a.attack - b.attack);
                return {
                    ...state,
                    copyAllPokemons: [...ordered],
                    filteredPokemons: [...ordered]
                }
            } else {
                //ordenar descendente
                const ordered = [...state.copyAllPokemons].sort((a, b) => b.attack - a.attack);
                return {
                    ...state,
                    copyAllPokemons: [...ordered],
                    filteredPokemons: [...ordered]
                }
            }


        default:
            return { ...state }
    }
}

export default rootReducer;