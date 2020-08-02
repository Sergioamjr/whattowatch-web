/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from "react";
import useQueryUser from "./useQueryUser";
import { ReactChildren, AppStoreTypes } from "types/common";

const defaultAppStore = {
  isLogged: false,
  setIsLogged: () => {},
};

export const AppStore = createContext<AppStoreTypes>(defaultAppStore);

export const StoreProvider = ({ children }: ReactChildren): JSX.Element => {
  const { token } = useQueryUser();
  const [isLogged, setIsLogged] = useState(!!token);

  return (
    <AppStore.Provider
      value={{
        isLogged,
        setIsLogged,
      }}
    >
      {children}
    </AppStore.Provider>
  );
};

export default (): AppStoreTypes => {
  return useContext(AppStore);
};
