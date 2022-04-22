import React from 'react'
import PokemonCard from '../components/PokemonCard'

const PokemonContainer = ({ pokemons }) => {
   return (
    <div className='PokemonContainer flex flex-wrap gap-5 justify-around px-8 mt-10'>
        {pokemons.map(pokemon => {
          return <PokemonCard pokemon={pokemon} key={pokemon.name} />
        })}
    </div>
  )
}

export default PokemonContainer