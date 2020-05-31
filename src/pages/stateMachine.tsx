import { Machine } from "xstate";

export default Machine({
  id: "login",
  initial: "signIn",
  states: {
    signIn: {
      on: { TOGGLE: "createAccount" },
    },
    createAccount: {
      on: { TOGGLE: "signIn" },
    },
  },
});
