import { Movie, OptionalMovie, MoviePageState } from "./movies";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FixMeLater = any;
export * from "./movies";

export type ReactChildren = {
  children: React.ReactNode;
};

export type GenresType = {
  id: number;
  name: string;
};

export interface AppStoreTypes {
  isLogged: boolean;
  cachedMovie: Movie | OptionalMovie;
  setCachedMovie: (arg0: Movie | OptionalMovie) => void;
  setIsLogged: (arg0: boolean) => void;
  movies: MoviePageState;
  setMovies: (arg0: MoviePageState) => void;
}
