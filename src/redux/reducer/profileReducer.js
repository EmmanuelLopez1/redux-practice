import { ADD_TO_FAVORITE } from "../types";

const initialState = {
    profile:{
        info:{
            name:"",
            lastname:""
        },
        loged:false,
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
    
        default:
            return state
    }
}

export default profileReducer