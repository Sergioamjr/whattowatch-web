import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { FixMeLater, Genres, Movie } from "types/common";
import mock from "./mock";

const key = "a1dc06d0f8d65b34ac156d07fe333060";
const baseURL = "https://api.themoviedb.org";
const useMock = process.env.REACT_APP_USE_MOCK === "true";

if (useMock) {
  console.log("MOCKING RESQUEST...");
  mock(axios, MockAdapter);
}

const formatMoviesResponse = (response) => {
  const {
    data: { results },
  } = response;
  return results;
};

export const fetchMovies = (page = 1): FixMeLater => {
  return axios
    .get(
      `${baseURL}/3/discover/movie?include_adult=false&api_key=${key}&page=${page}`
    )
    .then(formatMoviesResponse);
};

const formatGenresResponse = (response): Genres[] => {
  return response.data.genres;
};

export const fetchGenres = (): Promise<Genres[]> => {
  return axios
    .get(`${baseURL}/3/genre/movie/list?api_key=api_key=${key}`)
    .then(formatGenresResponse);
};

const normalizeSingleMovie = ({ data }) => {
  return {
    title: data.title,
    movieID: data.id,
    adult: data.adult,
    backdropPath: data.backdrop_path,
    genre_ids: data.genres,
    original_language: data.original_language,
    posterPath: data.poster_path,
    original_title: data.original_title,
    overview: data.overview,
    popularity: data.popularity,
    release_date: data.release_date,
    video: data.video,
    vote_average: data.vote_average,
    vote_count: data.vote_count,
  };
};

export const fetchSingleMovie = (id: number): Promise<Movie> => {
  return axios
    .get(`${baseURL}/3/movie/${id}?api_key=${key}`)
    .then(normalizeSingleMovie);
};
