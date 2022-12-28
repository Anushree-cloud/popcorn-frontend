import { configureStore } from "@reduxjs/toolkit";
import userReducer from './main/auth/store/userSlice'
import loginReducer from "./main/auth/store/loginSlice";
import toastSlice from "../hooks/useToast/store/toastSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        login: loginReducer,
        message: toastSlice
    }
})