import {combineReducers} from "redux"
import pokemonReducer from "./pokemonReducer";
import profileReducer from "./profileReducer";

const rootReducer = combineReducers({
    pokemons:pokemonReducer,
    profile:profileReducer
})

export default rootReducer