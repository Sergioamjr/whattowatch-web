import React from "react";
import { useApolloClient } from "@apollo/react-hooks";
import { useMachine } from "@xstate/react";
import CreateAccount from "./views/CreateAccount";
import SingIn from "./views/SignIn";
import stateMachine from "../stateMachine";
import { setLocalStorage } from "services/localstorage";
import { FixMeLater } from "types/common";
import * as S from "./style";

export interface CreateAccountTypes {
  toggleComponetView: () => void;
  onSuccess: (data: FixMeLater) => void;
  onError: (err: FixMeLater) => void;
}

const Login: React.FC = () => {
  const client = useApolloClient();
  const [current, send] = useMachine(stateMachine);
  const toggleComponetView = () => {
    send("TOGGLE");
  };

  const onSuccess = (data) => {
    Object.entries(data).forEach(([name, value]) => {
      setLocalStorage(name, value);
    });
    client.writeData({ data });
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
    <S.Template>
      {current.value === "createAccount" && (
        <CreateAccount {...sharedMethods} />
      )}
      {current.value === "signIn" && <SingIn {...sharedMethods} />}
    </S.Template>
  );
};

export default Login;
