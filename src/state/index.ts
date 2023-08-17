import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slices/auth.slice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { apiMiddleware, apiReducer } from "@/hooks/apis";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  auth: authReducer,
  ...apiReducer,
});

const persistConfig = {
  key: "organick",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(apiMiddleware),

  devTools: process.env.NODE_ENV !== "production",
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch: TypedUseSelectorHook<RootState> = useDispatch;
