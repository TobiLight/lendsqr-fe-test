import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import userReducer from "../features/user/usersSlice"

export default configureStore({
    reducer: {
        auth: authReducer,
        users: userReducer
    },
})