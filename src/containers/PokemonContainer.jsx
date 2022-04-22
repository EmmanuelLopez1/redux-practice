import React from 'react'
import PokemonCard from '../components/PokemonCard'
import { useDispatch, useSelector } from 'react-redux'
import { next_page, prev_page } from '../redux/actions/pokemonActions'

const PokemonContainer = ({ children }) => {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons.pokemons.data)
  return (
    <div className='PokemonContainer mt-10'>
      <div className="m-auto flex justify-center gap-10">
        <button className='px-5 py-2 bg-blue-600 text-white rounded' onClick={()=>{dispatch(prev_page())}}>
          prev page
        </button>
        <button className='px-5 py-2 bg-blue-600 text-white rounded' onClick={()=>{dispatch(next_page())}}>
          next page
        </button>
      </div>
      <div className=" flex flex-wrap gap-5 justify-around px-8 mt-10">

        {pokemons.map(pokemon => {
          return <PokemonCard pokemon={pokemon} key={pokemon.name} />
        })}
      </div>
    </div>
  )
}

export default PokemonContainer