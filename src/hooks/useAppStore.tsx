/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from "react";
import useQueryUser from "./useQueryUser";
import { Movie, ReactChildren } from "types/common";

interface AppStoreTypes {
  isLogged: boolean;
  cachedMovie: Movie;
  setCachedMovie: (arg0: Movie) => void;
  setIsLogged: (arg0: boolean) => void;
}

const defaultAppStore = {
  cachedMovie: {},
  isLogged: false,
  setCachedMovie: () => {},
  setIsLogged: () => {},
};

export const AppStore = createContext<AppStoreTypes>(defaultAppStore);

export const StoreProvider = ({ children }: ReactChildren): JSX.Element => {
  const { token } = useQueryUser();
  const [cachedMovie, setCachedMovie] = useState<Movie>(
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
