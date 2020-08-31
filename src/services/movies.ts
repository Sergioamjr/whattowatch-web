import { FixMeLater, GenresType, Movie } from "types/common";
import GenresMock from "./mock/genres.json";
import { client } from "./config";
import {
  normalizeSingleMovie,
  formatMoviesResponse,
  formatGenresResponse,
} from "./formaters";

const api_key = process.env.REACT_APP_MOVIE_API_KEY;

export const fetchMovies = (page: number): FixMeLater => {
  return client
    .get("/3/discover/movie", {
      params: {
        api_key,
        page,
        include_adult: false,
      },
    })
    .then(formatMoviesResponse);
};

export const fetchGenres = (): GenresType[] => {
  return formatGenresResponse(GenresMock);
};

export const fetchSingleMovie = (id: number): Promise<Movie> => {
  return client
    .get(`/3/movie/${id}`, {
      params: {
        api_key,
      },
    })
    .then(normalizeSingleMovie);
};

export const fetchMoviesByGenrer = (
  page: number,
  id: number
): Promise<FixMeLater> => {
  return client
    .get("/3/discover/movie", {
      params: {
        with_genres: id,
        page,
        api_key,
      },
    })
    .then(formatMoviesResponse);
};

export const searchMovieByTitle = async (
  query: string
): Promise<FixMeLater> => {
  const res = await client.get("/3/search/movie", {
    params: {
      query,
      api_key,
    },
  });
  return formatMoviesResponse(res).results;
};
