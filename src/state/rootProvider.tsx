"use client";
import { Provider } from "react-redux";
import { persistor, store } from ".";
import { ReactNode } from "react";
import { PersistGate } from "redux-persist/lib/integration/react";

export const RootProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
};
