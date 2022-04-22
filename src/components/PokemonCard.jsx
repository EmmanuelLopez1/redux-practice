import async from 'async'
import React, { useEffect, useState } from 'react'
import searchPokemon from '../hooks/useSearchPokemon'

const PokemonCard = ({ pokemon }) => {
    const [pk, setPk] = useState()

    useEffect(() => {
        searchPokemon(pokemon.url).then(data => {
            setPk(data)
        })
    }, [])

    return (
        <div className='PokemonCard w-48 border border-cyan-400 rounded'>
            {
                pk !== undefined &&
                <div className="">
                    <img src={pk.sprites.front_default} alt="" className='w-full border-b-2' />
                    <div className="px-5 mb-5">
                        <h3 className='text-xl my-2 text-center'>{pk.name}</h3>
                        <h4 className='mt-2'>Type:</h4>
                        <ul>
                            {
                                pk.types.map(type=>{
                                    return <li className="list-disc ml-10">{type.type.name}</li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            }

        </div >
    )
}

export default PokemonCard