import { composeWithDevTools } from "redux-devtools-extension";
import {createStore, applyMiddleware} from "redux"

import rootReducer from "./reducer";
import { fetch_pokemons } from "./features/pokemon";

const composedEnhancer = composeWithDevTools(
    applyMiddleware(fetch_pokemons)
)


const store = createStore(rootReducer, composedEnhancer)

export default store