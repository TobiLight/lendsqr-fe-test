import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../helpers/types'

const initialState: Array<Partial<UserType>> = []

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<Array<Partial<UserType>>>) => {
            return {
                ...state,
                ...action.payload,
            }
        },
    }
})

export const { setUsers } = userSlice.actions

export default userSlice.reducer