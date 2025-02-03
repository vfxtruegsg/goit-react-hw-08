import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { loginThunk, logoutThunk, registerThunk } from "./operations";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      // .addCase(registerThunk.fulfilled, (state, action) => {
      //   state.user = action.payload.user;
      //   state.isLoggedIn = true;
      //   state.token = action.payload.token;
      // })
      // .addCase(loginThunk.fulfilled, (state, action) => {
      //   state.user = action.payload.user;
      //   state.isLoggedIn = true;
      //   state.token = action.payload.token;
      // })
      .addCase(logoutThunk.fulfilled, (state, action) => {
        return initialState;
      })

      .addMatcher(
        isAnyOf(registerThunk.fulfilled, loginThunk.fulfilled),
        (state, action) => {
          state.user = action.payload.user;
          state.isLoggedIn = true;
          state.token = action.payload.token;
        }
      );
  },
});

export default slice.reducer;
