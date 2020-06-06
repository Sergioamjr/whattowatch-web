import PropTypes from "prop-types";
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { LOGIN } from "fragments";
import { CreateAccountTypes } from "./../";
import * as S from "./../style";

const SingIn = ({
  toggleComponetView,
  onSuccess,
  onError,
}: CreateAccountTypes): JSX.Element => {
  const [state, setState] = useState({
    email: "cersei@gmail.com",
    password: "gatinhalinda",
  });

  const onChangeHandle = ({ target: { value, name } }) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Mutation
      onError={onError}
      onCompleted={({ login }) => onSuccess(login)}
      mutation={LOGIN}
      variables={state}
    >
      {(login, { loading }) => {
        return (
          <div>
            <S.FormTitle>Faça login</S.FormTitle>
            <S.Form>
              <S.Input
                placeholder="Seu e-mail"
                onChange={onChangeHandle}
                type="text"
                name="email"
                value={state.email}
              />
              <S.Input
                placeholder="Sua senha"
                onChange={onChangeHandle}
                type="password"
                name="password"
                value={state.password}
              />
              <S.ButtonsWrapper>
                <S.Button disabled={loading} onClick={login}>
                  Login
                </S.Button>
                <S.Button disabled={loading} onClick={toggleComponetView}>
                  Criar Conta
                </S.Button>
              </S.ButtonsWrapper>
            </S.Form>
          </div>
        );
      }}
    </Mutation>
  );
};

SingIn.propTypes = {
  onError: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  toggleComponetView: PropTypes.func.isRequired,
};

export default SingIn;
