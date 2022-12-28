import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loggingSuccess: false
}

const loginSlice = createSlice({
    name: 'Login',
    initialState,
    reducers: {
        manageLoggingSuccess: (state, action) => {
            state.loggingSuccess= action.payload 
        },
        notLoggedIn: (state, action) => initialState
    }
})

export const { manageLoggingSuccess, notLoggedIn } = loginSlice.actions;

export default loginSlice.reducer;