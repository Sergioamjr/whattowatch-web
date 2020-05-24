import React from "react";
import { useMachine } from "@xstate/react";
import CreateAccount from "./views/CreateAccount";
import SingIn from "./views/SignIn";
import stateMachine from "../stateMachine";

const Login = () => {
  const [current, send] = useMachine(stateMachine);
  const toggleComponetView = () => {
    send("TOGGLE");
  };

  const onSuccess = (data) => {
    console.log(data);
  };

  const onError = (err) => {
    console.log("onerr", err);
  };

  const sharedMethods = {
    onSuccess: onSuccess,
    onError: onError,
    toggleComponetView: toggleComponetView,
  };

  return (
    <div>
      {current.value === "createAccount" && (
        <CreateAccount {...sharedMethods} />
      )}
      {current.value === "signIn" && <SingIn {...sharedMethods} />}
    </div>
  );
};

export default Login;
