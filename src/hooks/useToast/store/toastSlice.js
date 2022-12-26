import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    state: null,
	options: {
		anchorOrigin: {
			vertical: 'top',
			horizontal: 'center'
		},
		autoHideDuration: 6000,
		message: 'Hi',
		variant: null
	}
}

const toastSlice = createSlice({
    name: 'toastMessage',
    initialState,
    reducers: {
        showMessage: (state, action) => {
			state.state = true;
			state.options = {
				...initialState.options,
				...action.payload
			};
		},
        hideMessage: (state, action) => {
            state.state = null
        }
    }
})

export const { showMessage, hideMessage } = toastSlice.actions

export default toastSlice.reducer