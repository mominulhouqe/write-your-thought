import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../store";

// write type for basic user
export type RUser = {
  user_id: string;
  role: string;
  iat: string;
  exp: string;
};

// write type for user detailed info
export type RUserInfo = {
  _id: string;
  user_id: string;
  name: string;
  avatar: {
    id: string | null;
    url: string | null;
  };
  email: string;
  role: string;
  banned_user: boolean;
  deleted_user: boolean;
  email_verified: boolean;
  createdAt: string;
};

type RAuthState = {
  user: null | RUser;
  token: null | string;
  userInfo: null | RUserInfo;
};

const initialState: RAuthState = {
  user: null,
  userInfo: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    setUserInfo: (state, action) => {
      state.userInfo = action?.payload;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.userInfo = null;
    },
  },
});

export const { setUser, setUserInfo, logout } = authSlice.actions;

export default authSlice.reducer;

export const useUser = (state: RootState) => state.auth.user;
export const useToken = (state: RootState) => state.auth.token;
export const useUserInfo = (state: RootState) => state.auth.userInfo;
