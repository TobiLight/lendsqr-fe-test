import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../helpers/types'

const initialState: { user: Partial<UserType> | null, isLoggedIn: boolean } = {
    user: null,
    isLoggedIn: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<{ email: string }>) => {
            return {
                ...state,
                user: { ...action.payload },
                isLoggedIn: true
            }
        },
        logout: (state) => {
            return {
                ...state,
                user: null,
                isLoggedIn: false
            }
        }
    }
})

export const { login, logout } = authSlice.actions

export default authSlice.reducer