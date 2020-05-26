import axios from "axios";
const key = "a1dc06d0f8d65b34ac156d07fe333060";
const baseURL = "https://api.themoviedb.org";

const formatResponse = (response) => {
  const {
    data: { results },
  } = response;
  return results;
};

export const fetchMovies = (page = 1) => {
  return axios
    .get(
      `${baseURL}/3/discover/movie?include_adult=false&api_key=${key}&page=${page}`
    )
    .then(formatResponse);
};
