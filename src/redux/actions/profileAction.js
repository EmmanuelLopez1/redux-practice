import {ADD_TO_FAVORITE, SET_USER_INFO } from "../types";

export const add_to_favorite = (favorite)=>({type:ADD_TO_FAVORITE, payload:favorite})
export const set_user_info = (payload)=>{
    const objeto = {type:SET_USER_INFO, payload}
    return objeto
}

