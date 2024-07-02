import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../features/Userslice.js'

export const store = configureStore({
    reducer: {
        user : userReducer
    },
    
    
})