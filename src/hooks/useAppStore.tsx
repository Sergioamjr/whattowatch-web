/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from "react";
import useQueryUser from "./useQueryUser";

export interface cachedMovie {
  title?: string;
  movieID?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  posterPath?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  release_date?: "2020-01-15";
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
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
