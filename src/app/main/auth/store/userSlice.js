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

export const loginSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload
        },
        userLoggedOut: (state, action) => initialState
    }
})

export const { setCurrentUser } = loginSlice.actions

export default loginSlice.reducer;