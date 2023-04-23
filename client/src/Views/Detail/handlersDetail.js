import { deletePokemon } from "../../Redux/actions"



export const handlerDelete = (e, dispatch, id) => {
    dispatch(deletePokemon(id))
    e.preventDefault()
}
