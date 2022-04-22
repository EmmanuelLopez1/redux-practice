import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonContainer from '../containers/PokemonContainer'
import store from "../redux/store"

const Favorites = () => {
    let favorites = useSelector(state => state.profile.profile.favorites)
    const [finalFavs, setFinalFavs] = useState(favorites)
    
    store.subscribe(()=>{
        const state = store.getState()
        const favs = state.profile.profile.favorites
        setFinalFavs(favs)
        console.log("se tendria que eliminar la mierda esta");
    })

    useEffect(()=>{
        console.log("puta madre");
    }, [finalFavs])
    
    return (
        <div>
            <PokemonContainer pokemons={finalFavs}/>
        </div>
    )
}

export default Favorites