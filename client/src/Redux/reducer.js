import { SEARCH_BY_NAME } from "./actions"




const initialState = {
    allPokemons: [],
    copyAllPokemons: [],
    allTypes: [],
    copyAllTypes: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_BY_NAME:
            console.log(action.payload);
            const armado = []
            armado.push(action.payload)
            console.log(armado);
            return { ...state, copyAllPokemons: [...armado] }

        default:
            return { ...state }
    }
}

export default rootReducer;