const searchPokemon = async(url)=>{
    let pokemon = await fetch(url)
    pokemon = pokemon.json()
    
    return pokemon
}

export default searchPokemon