import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import mock from "./mock";

const baseURL = "https://api.themoviedb.org";

export const client = axios.create({
  baseURL,
});

const useMock = process.env.REACT_APP_USE_MOCK === "true";
if (useMock) {
  console.log("MOCKING RESQUEST...");
  mock(axios, MockAdapter);
}
