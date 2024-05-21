import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";


const initialState={
    status:false,
    userData:null,
    token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
}

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            state.status=true,
            state.userData=action.payload,
            state.token = action.payload.token;
      localStorage.setItem("token", action.payload.token);
        },
        logout: (state) => {
            state.status = false;
            state.userData = null;
            state.token=null;
            localStorage.removeItem("token");
          },
        tokenSet:(state,action)=>{
            state.token=action.payload
        },
        

    }
})

export default authSlice.reducer
export const{login,logout,tokenSet} =authSlice.actions