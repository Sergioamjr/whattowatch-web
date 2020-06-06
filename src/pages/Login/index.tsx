import React from "react";
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
  toggleComponetView: () => void;
  onSuccess: (data: FixMeLater) => void;
  onError: (err: FixMeLater) => void;
}

const Login: React.FC<RouteComponentProps> = ({
  history,
}: RouteComponentProps) => {
  const { setIsLogged } = useAppStore();
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
    setIsLogged(true);
    history.push("/movies");
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
    <Template>
      <S.Template>
        {current.value === "createAccount" && (
          <CreateAccount {...sharedMethods} />
        )}
        {current.value === "signIn" && <SingIn {...sharedMethods} />}
      </S.Template>
    </Template>
  );
};

export default Login;
