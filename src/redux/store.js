import { composeWithDevTools } from "redux-devtools-extension";
import {createStore, applyMiddleware} from "redux"

import rootReducer from "./reducer";
import { fetch_pokemons, change_pokemon_page } from "./features/pokemon";

const composedEnhancer = composeWithDevTools(
    applyMiddleware(fetch_pokemons, change_pokemon_page)
)


const store = createStore(rootReducer, composedEnhancer)

export default store