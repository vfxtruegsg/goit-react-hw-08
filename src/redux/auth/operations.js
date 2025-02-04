import { createAsyncThunk } from "@reduxjs/toolkit";
import { goitAPI } from "../contacts/operations";
import toast from "react-hot-toast";

export const setAuthHeader = (token) => {
  goitAPI.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearAuthHeader = () => {
  delete goitAPI.defaults.headers.common.Authorization;
};

export const registerThunk = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitAPI.post("users/signup", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      if (error.response.data.code == 11000) {
        toast.error("This user is already registered");
        return thunkAPI.rejectWithValue(error.message);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginThunk = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitAPI.post("users/login", credentials);
      setAuthHeader(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutThunk = createAsyncThunk(
  "auth/logout",
  async (_, thunkAPI) => {
    try {
      const { data } = await goitAPI.post("users/logout");

      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    } finally {
      clearAuthHeader();
    }
  }
);

export const refreshThunk = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (!savedToken) {
      return thunkAPI.rejectWithValue("Token not found");
    }

    setAuthHeader(savedToken);

    try {
      const { data } = await goitAPI.get("users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// sashamotorolla12@gmail.com
