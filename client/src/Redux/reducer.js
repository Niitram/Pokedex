const initialState = {
    pokemons: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "value":

            break;

        default:
            return { ...state }
    }
}

export default rootReducer;