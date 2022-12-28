import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {
        first_name: 'John',
        last_name:'Doe',
        email:'john.doe@gmail.com',
        role: {
            display_name: 'Guest'
        }
    },
    // isLoading: true
}

export const userSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        userLoggedOut: (state, action) => initialState
    }
})

export const { setCurrentUser, userLoggedOut } = userSlice.actions

export default userSlice.reducer;