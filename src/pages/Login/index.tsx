import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";
import { useMachine } from "@xstate/react";
import CreateAccount from "./views/CreateAccount";
import SingIn from "./views/SignIn";
import stateMachine from "../stateMachine";
import { setLocalStorage } from "services/localstorage";
import { FixMeLater } from "types/common";
import * as S from "./style";
import Template from "components/Template";
import useAppStore from "hooks/useAppStore";

export interface CreateAccountTypes {
  toggleComponetView: (event: React.MouseEvent<HTMLElement>) => void;
  onSuccess: (data: FixMeLater) => void;
  onError: (err: FixMeLater) => void;
}

const Login = ({ history }: RouteComponentProps): JSX.Element => {
  const { setIsLogged } = useAppStore();
  const client = useApolloClient();
  const [error, setError] = useState<string>("");
  const [current, send] = useMachine(stateMachine);
  const toggleComponetView = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setError("");
    send("TOGGLE");
  };

  const onSuccess = (data) => {
    Object.entries(data).forEach(([name, value]) => {
      setLocalStorage(name, value);
    });
    client.writeData({ data });
    setIsLogged(true);
    history.push("/filmes");
  };

  const onError = (err) => {
    console.log("onerr", err);
    setError(err.message.replace("GraphQL error:", ""));
  };

  const sharedMethods = {
    onSuccess: onSuccess,
    onError: onError,
    toggleComponetView: toggleComponetView,
  };

  return (
    <Template>
      <S.Template>
        <div>
          {current.value === "createAccount" && (
            <CreateAccount {...sharedMethods} />
          )}
          {current.value === "signIn" && <SingIn {...sharedMethods} />}
          {error && <S.ErrorAlert>{error}</S.ErrorAlert>}
        </div>
      </S.Template>
    </Template>
  );
};

export default Login;
