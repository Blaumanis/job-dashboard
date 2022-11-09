import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./features/nav/navSlice";
import jobsReducer from "./features/job/jobSlice";
import authReducer from "./features/auth/authSlice";

export const store = configureStore({
    reducer: {
        nav: navReducer,
        jobs: jobsReducer,
        auth: authReducer,
    }
})