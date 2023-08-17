import { createSlice } from "@reduxjs/toolkit";

enum Role {
  ADMIN,
  CUSTOMER,
}

interface IUser {
  name?: string;
  email?: string;
  mobile: string;
  role: Role;
  isVerified: boolean;
}

interface IAuth {
  user: null | IUser;
  token: string;
  isLogged: boolean;
}

const initialState: IAuth = {
  user: null,
  token: "",
  isLogged: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state) => {},
    logout: (state) => {},
  },
});

export const authReducer = authSlice.reducer;
