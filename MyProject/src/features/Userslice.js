import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    user: null,
    isLoggedIn: false,
    
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        loginSuccess:(state,action) => {
            
            state.user = action.payload
            state.isLoggedIn = true
            
        },
        logout:(state) =>{
            
            state.user = null,
            state.isLoggedIn = false
            
        },
        registerSuccess: (state, action) => {
            state.user = action.payload;
            state.isRegistered = true;
          }

    }
})

export const {loginSuccess,logout,registerSuccess} = userSlice.actions;

export const selectUser = (state) => state.user.user

export const selectIsRegistered = (state) => state.user.isRegistered;


export default userSlice.reducer