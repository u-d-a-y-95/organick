"use client";
import { Provider } from "react-redux";
import { store } from ".";
import { ReactNode } from "react";

export const RootProvider = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};
