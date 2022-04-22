import { GET_POKEMONS, NEXT_PAGE, PREV_PAGE } from "../types";


const initialState = {
    pokemons: {
        base_url: "https://pokeapi.co/api/v2/",
        endpoints: {
            pokemon: "pokemon/"
        },
        limit: 20,
        offset: 0,
        data: []
    }
}

const pokemonReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_POKEMONS:
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    data: action.payload
                }
            }
        case NEXT_PAGE:
            console.log("next page");
            console.log(action.payload);
            return {
                ...state,
                pokemons: {
                    ...state.pokemons,
                    offset: state.pokemons.offset + action.payload.offset,
                    data:action.payload.data
                }
            }
        case PREV_PAGE:
            if(state.pokemons.offset>=20){
                return {
                    ...state,
                    pokemons: {
                        ...state.pokemons,
                        offset: state.pokemons.offset - action.payload.offset,
                        data:action.payload.data
                    }
                }
            }else{
                return state
            }

        default:
            return state
    }
}

export default pokemonReducer