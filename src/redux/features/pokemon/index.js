export const fetch_pokemons = (storeAPI) => (next) => async (action) => {
    const { getState } = storeAPI
    const state = getState().pokemons.pokemons

    if (state.data.length === 0) {
        try {
            let res = await fetch(`${state.base_url}${state.endpoints.pokemon}?limit=${state.limit}`)
            let pokemons = await res.json()
            pokemons = await pokemons.results

            // SETTING POKEMONS IN STATE
            next({type:action.type, payload:pokemons})
            
        } catch (error) {
            console.log(error);
        }
    }else{
        next(action)
    }
}

export const change_pokemon_page = (storeAPI)=> (next)=> async(action)=>{
    const {getState} = storeAPI
    const state = getState().pokemons.pokemons
    if(action.type === "NEXT_PAGE" || action.type === "PREV_PAGE"){
        try {
            console.log("fetching");
            let res = await fetch(`${state.base_url}${state.endpoints.pokemon}?limit=${state.limit}&offset=${action.payload}`)
            let pokemons = await res.json()
            pokemons = await pokemons.results

            // SETTING POKEMONS IN STATE
            next({type:action.type, payload:{data:pokemons, offset:action.payload}})
            
        } catch (error) {
            console.log(error);
        }
    }else{
        next(action)
    }

}