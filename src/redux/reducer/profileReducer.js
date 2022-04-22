import { ADD_TO_FAVORITE, REMOVE_TO_FAVORITE, SET_USER_INFO } from "../types";

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
            const favorite = state.profile.favorites.find(pokemon=>{
                if(pokemon.name === action.payload.name){
                    return pokemon
                }
            })

            if(favorite){
                return state
            }else{
                return{
                    ...state,
                    profile:{
                        ...state.profile,
                        favorites:[...state.profile.favorites,action.payload]
                    }
                }
            }
        case REMOVE_TO_FAVORITE:
            let del_index = 0;
            const fav = state.profile.favorites.find((pokemon, index)=>{
                if(pokemon.name === action.payload.name){
                    del_index = index
                }
            })

            const del_favorites = state.profile.favorites.splice(del_index, 1)

            if(fav){
                return{
                    ...state,
                    profile:{
                        ...state.profile,
                        favorites:[del_favorites]
                    }
                }
            }

            return state
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