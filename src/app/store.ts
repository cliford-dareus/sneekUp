import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer  from "../features/userSlice";

export const store = configureStore({
    reducer: {
        user: userSliceReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat()
    
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch