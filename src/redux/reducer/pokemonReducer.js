import { GET_POKEMONS } from "../types";


const initialState = {
    pokemons:{
        base_url:"https://pokeapi.co/api/v2/",
        endpoints:{
            pokemon:"pokemon/"
        },
        limit:150,
        data:[]
    }
}

const pokemonReducer = (state = initialState, action)=>{
    switch (action.type) {
        case GET_POKEMONS:
            return{
                ...state,
                pokemons:{
                    ...state.pokemons,
                    data:action.payload
                }
            }
    
        default:
            return state
    }
}

export default pokemonReducer