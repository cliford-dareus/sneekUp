import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../features/userSlice";
import { weatherApi } from "../features/weatherApi";

export const store = configureStore({
  reducer: {
    user: userSliceReducer,
    [weatherApi.reducerPath]: weatherApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(weatherApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
