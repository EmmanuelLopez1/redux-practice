import { ADD_TO_FAVORITE, SET_USER_INFO } from "../types";

const initialState = {
    profile:{
        user:{
            name:"name",
            lastname:"lastname",
            img:"https://illumesense.com/resources/illumesense/style/img/website/profile-picture-blanks/male-profile.jpg"
        },
        logged:false,
        favorites:[],
    }
}


const profileReducer = (state = initialState, action)=>{
    switch (action.type) {
        case ADD_TO_FAVORITE:
            return{
                ...state,
                profile:{
                    ...state.profile,
                    favorites:action.payload
                }
            }
        case SET_USER_INFO:
            const user = action.payload
            return{
                ...state,
                profile:{
                    ...state.profile,
                    logged:true,
                    user:{
                        name:user.name,
                        lastname:user.lastname,
                        img:user.img
                    }
                }
            }
    
        default:
            return state
    }
}

export default profileReducer