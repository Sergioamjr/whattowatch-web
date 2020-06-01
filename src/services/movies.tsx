import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { FixMeLater } from "types/common";
import mock from "./mock";

const useMock = process.env.REACT_APP_USE_MOCK === "true";

if (useMock) {
  console.log("MOCKING RESQUEST...");
  mock(axios, MockAdapter);
}

const key = "a1dc06d0f8d65b34ac156d07fe333060";
const baseURL = "https://api.themoviedb.org";

const formatResponse = (response) => {
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
    .then(formatResponse);
};
