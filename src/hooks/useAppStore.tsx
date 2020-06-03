/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from "react";
import useQueryUser from "./useQueryUser";

interface cachedMovie {
  title?: string;
}

interface AppStoreTypes {
  isLogged: boolean;
  cachedMovie: cachedMovie;
  setCachedMovie: (arg0: cachedMovie) => void;
  setIsLogged: (arg0: boolean) => void;
}

const defaultAppStore = {
  cachedMovie: {},
  isLogged: false,
  setCachedMovie: () => {},
  setIsLogged: () => {},
};

export const AppStore = createContext<AppStoreTypes>(defaultAppStore);

export const StoreProvider: React.FC = ({ children }) => {
  const { token } = useQueryUser();
  const [cachedMovie, setCachedMovie] = useState<cachedMovie>(
    defaultAppStore.cachedMovie
  );
  const [isLogged, setIsLogged] = useState(!!token);

  return (
    <AppStore.Provider
      value={{ cachedMovie, setCachedMovie, isLogged, setIsLogged }}
    >
      {children}
    </AppStore.Provider>
  );
};

export default (): AppStoreTypes => {
  return useContext(AppStore);
};
