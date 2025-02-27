import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import {
  loginThunk,
  logoutThunk,
  refreshThunk,
  registerThunk,
} from "./operations";

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

      .addCase(refreshThunk.pending, (state) => {
        state.isRefreshing = true;
      })

      .addCase(refreshThunk.fulfilled, (state, action) => {
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })

      .addCase(refreshThunk.rejected, (state) => {
        state.isRefreshing = false;
      })

      .addCase(logoutThunk.fulfilled, () => {
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
