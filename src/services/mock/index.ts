import { FixMeLater } from "types/common";
import discovery from "./discovery.json";
import genres from "./genres.json";
import movie from "./movie.json";

export default (axios: FixMeLater, MockAdapter: FixMeLater): void => {
  const mock = new MockAdapter(axios);
  mock.onGet(/\/discover\//).reply(200, discovery);
  mock.onGet(/\/genre\//).reply(200, genres);
  mock.onGet(/\/movie\//).reply(200, movie);
};
