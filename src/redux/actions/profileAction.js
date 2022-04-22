import {ADD_TO_FAVORITE, REMOVE_TO_FAVORITE, SET_USER_INFO } from "../types";

export const add_to_favorite = (favorite)=>({type:ADD_TO_FAVORITE, payload:favorite})
export const set_user_info = (payload)=>({type:SET_USER_INFO, payload})
export const remove_to_favorite = (payload)=>({type:REMOVE_TO_FAVORITE, payload})

