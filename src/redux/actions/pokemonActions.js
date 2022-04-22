import { GET_POKEMONS, NEXT_PAGE, PREV_PAGE } from "../types";

export const get_pokemons = ()=>({type:GET_POKEMONS})
export const next_page = ()=>({type:NEXT_PAGE, payload:20})
export const prev_page = ()=>({type:PREV_PAGE, payload:20})