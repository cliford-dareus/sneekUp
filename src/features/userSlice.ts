import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../app/store";
import { Pin } from "../lib/PinHelper";
import { UserType } from "../utils/types";

const USER = Pin.get("fakename");

const initialState: UserType = {
  pin: USER.pin || null,
  isloggin: USER.isloggin || false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    register: (
      state,
      action: PayloadAction<{ username: string; pin: number }>
    ) => {
      state.pin = action.payload.pin;
      Pin.create(action.payload.username, action.payload.pin);
    },
    login: (state) => {
      state.isloggin = true;
      Pin.login();
    },
  },
});

export const { register, login } = userSlice.actions;
export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
