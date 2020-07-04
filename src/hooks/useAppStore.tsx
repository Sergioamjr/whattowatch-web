/* eslint-disable @typescript-eslint/no-empty-function */
import React, { createContext, useContext, useState } from "react";
import useQueryUser from "./useQueryUser";
import {
  Movie,
  ReactChildren,
  AppStoreTypes,
  MoviePageState,
} from "types/common";

const defaultAppStore = {
  cachedMovie: {},
  isLogged: false,
  setCachedMovie: () => {},
  setIsLogged: () => {},
  movies: {
    results: [],
    page: 0,
    total_pages: 1000,
  },
  setMovies: () => {},
};

export const AppStore = createContext<AppStoreTypes>(defaultAppStore);

export const StoreProvider = ({ children }: ReactChildren): JSX.Element => {
  const { token } = useQueryUser();
  const [cachedMovie, setCachedMovie] = useState<Partial<Movie>>(
    defaultAppStore.cachedMovie
  );
  const [movies, setMovies] = useState<MoviePageState>(defaultAppStore.movies);
  const [isLogged, setIsLogged] = useState(!!token);

  return (
    <AppStore.Provider
      value={{
        cachedMovie,
        setCachedMovie,
        isLogged,
        setIsLogged,
        movies,
        setMovies,
      }}
    >
      {children}
    </AppStore.Provider>
  );
};

export default (): AppStoreTypes => {
  return useContext(AppStore);
};
