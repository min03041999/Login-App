import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "./features/UserSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice
    }
})

export const AppDispatch = store.dispatch;
export const RootState = store.getState();