import { Middleware } from "@reduxjs/toolkit";
import { authApi } from "./useAuth";

export const apiReducer = {
  [authApi.reducerPath]: authApi.reducer,
};

export const apiMiddleware: Middleware[] = [authApi.middleware];
