import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null, // Will store user data like {name, email, token}
  isAuthenticated: false,
  accessToken: null, // Will store JWT token if needed
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    login: (state, action) => {
      state.accessToken = action.payload;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.accessToken = null;
    },
  },
});

export const { login, logout, setUser } = authSlice.actions;
export default authSlice.reducer;
