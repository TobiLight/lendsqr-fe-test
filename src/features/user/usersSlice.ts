import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { UserType } from '../../helpers/types'

const initialState: { data: Array<Partial<UserType>> } = {
    data: []
}

export const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers: (state, action: PayloadAction<{ data: Array<Partial<UserType>> }>) => {
            return {
                ...state.data,
                ...action.payload
            }
        },
    }
})

export const { setUsers } = userSlice.actions

export default userSlice.reducer