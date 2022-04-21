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
    }
}