"use client";

import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";

interface ProvidersProps {
  children: ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Providers;
