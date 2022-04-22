import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { next_page, prev_page } from '../redux/actions/pokemonActions'
  import PokemonContainer from '../containers/PokemonContainer'


const Home = () => {
  const dispatch = useDispatch()
  const pokemons = useSelector(state => state.pokemons.pokemons.data)

  return (  
    <div className='Home mt-10'>
      <div className="m-auto flex justify-center gap-10">
        <button className='px-5 py-2 bg-blue-600 text-white rounded' onClick={()=>{dispatch(prev_page())}}>
          prev page
        </button>
        <button className='px-5 py-2 bg-blue-600 text-white rounded' onClick={()=>{dispatch(next_page())}}>
          next page
        </button>
      </div>
        <PokemonContainer pokemons={pokemons}/>
    </div>
  )
}

export default Home