import React, {useRef} from 'react'
import { useDispatch } from 'react-redux'
import { set_user_info } from '../redux/actions/profileAction'


const Login = () => {
    const dispatch = useDispatch()
    const name = useRef(null)
    const lastname = useRef(null)
    const img = useRef("https://bootdey.com/img/Content/avatar/avatar7.png")

    const get_values = ()=>{
        return  {
            name:name.current.value,
            lastname:lastname.current.value,
            img:img.current
        }
    }



    // dispatch({type:"SET_USER_INFO"})
    return (
        <div className='Login border border-black m-auto mt-10 rounded p-5 w-10/12 flex flex-col'>
            <label htmlFor="name" >
                Name
            </label>
            <input type="text" id="name" placeholder='maxo' className='my-3 border border-gray rounded p-3' ref={name}/>
            <label htmlFor="lastname">
                Lastname
            </label>
            <input type="text" id='lastname' placeholder='Lopez' className='my-3 border border-gray rounded p-3' ref={lastname}/>
            <button className='bg-teal-900 rounded w-1/12 m-auto p-2 text-white mt-3' 
                onClick={()=>{dispatch(set_user_info(get_values()))}}>
                Loggin
            </button>
        </div>
    )
}

export default Login