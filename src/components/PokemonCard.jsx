import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import searchPokemon from '../hooks/useSearchPokemon'
import { add_to_favorite, remove_to_favorite } from '../redux/actions/profileAction'


const PokemonCard = ({ pokemon }) => {
    const [pk, setPk] = useState()
    const dispatch = useDispatch()
    const favorites = useSelector(state => state.profile.profile.favorites)
    const favIcon = useRef()

    useEffect(() => {
        if (!pk) {
            if (pokemon.url) {
                searchPokemon(pokemon.url).then(data => {
                    setPk(data)
                })
            } else {
                setPk(pokemon)
            }
        } else {
            isFavorite(()=>{
                favIcon.current.style.fill = "#ef4444"
            },
            ()=>{
                favIcon.current.style.fill = ""
            })
        }
    }, [pk])

    const isFavorite = (action1, action2) => {
        if (pk) {
            const favorite = favorites.find(pokemon => pokemon.name === pk.name)
            if (favorite) {
                action1()
            } else {
                action2()
            }
        }
    }

    const toogleFaavorite = () => {
        isFavorite(
            () => {
                dispatch(remove_to_favorite(pk))
                favIcon.current.style.fill = ""
            },

            () => {
                dispatch(add_to_favorite(pk))
                favIcon.current.style.fill = "#ef4444"
            })
    }

    return (
        <div className='PokemonCard w-48 border border-cyan-400 rounded relative'>
            <svg version="1.1" ref={favIcon} id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                viewBox="0 0 490.4 490.4"
                className='w-8 block absolute left-2 top-2 hover:cursor-pointer 
                hover:fill-red-500' onClick={toogleFaavorite}>
                <g>
                    <g>
                        <path d="M222.5,453.7c6.1,6.1,14.3,9.5,22.9,9.5c8.5,0,16.9-3.5,22.9-9.5L448,274c27.3-27.3,42.3-63.6,42.4-102.1
                        c0-38.6-15-74.9-42.3-102.2S384.6,27.4,346,27.4c-37.9,0-73.6,14.5-100.7,40.9c-27.2-26.5-63-41.1-101-41.1
                        c-38.5,0-74.7,15-102,42.2C15,96.7,0,133,0,171.6c0,38.5,15.1,74.8,42.4,102.1L222.5,453.7z M59.7,86.8
                        c22.6-22.6,52.7-35.1,84.7-35.1s62.2,12.5,84.9,35.2l7.4,7.4c2.3,2.3,5.4,3.6,8.7,3.6l0,0c3.2,0,6.4-1.3,8.7-3.6l7.2-7.2
                        c22.7-22.7,52.8-35.2,84.9-35.2c32,0,62.1,12.5,84.7,35.1c22.7,22.7,35.1,52.8,35.1,84.8s-12.5,62.1-35.2,84.8L251,436.4
                        c-2.9,2.9-8.2,2.9-11.2,0l-180-180c-22.7-22.7-35.2-52.8-35.2-84.8C24.6,139.6,37.1,109.5,59.7,86.8z"/>
                    </g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
                <g>
                </g>
            </svg>
            {
                pk !== undefined &&
                <div className="">
                    <img src={pk.sprites.front_default} alt="" className='w-full border-b-2' />
                    <div className="px-5 mb-5">
                        <h3 className='text-xl my-2 text-center'>{pk.name}</h3>
                        <h4 className='mt-2'>Type:</h4>
                        <ul>
                            {
                                pk.types.map(type => {
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