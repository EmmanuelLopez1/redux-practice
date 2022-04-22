import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
    const profile = useSelector(state=>state.profile.profile)
    return (
        <div className='bg-cyan-900 p-5 flex items-center justify-between'>
            <div className="flex">
                <Link to="/">
                    <p className='p-2 rounded text-white text-lg hover:bg-black hover:text-white'>Home</p>
                </Link>
                <Link to="/favorites">
                    <p className='p-2 rounded text-white text-lg hover:bg-black hover:text-white'>
                        Favorites
                    </p>
                </Link>
                {
                    !profile.logged &&

                    <Link to="/login">
                        <p className='p-2 rounded text-white text-lg hover:bg-black hover:text-white'>Login</p>
                    </Link>
                }
            </div>
            
            <div className="user flex items-center">
                <p className='text-white p-1'>{profile.user.name}</p>
                <p className='text-white p-1'>{profile.user.lastname}</p>
                <img src={profile.user.img} alt="" className='w-14 ml-7 rounded-full'/>
            </div>
        </div>
    )
}

export default Header