import { FixMeLater } from "types/common";
import discovery from "./discovery.json";

export default (axios: FixMeLater, MockAdapter: FixMeLater): void => {
  const mock = new MockAdapter(axios);
  mock.onGet(/\/discover\//).reply(200, discovery);
};
