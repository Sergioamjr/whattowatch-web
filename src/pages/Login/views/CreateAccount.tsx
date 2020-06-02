import PropTypes from "prop-types";
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { CREATE_NEW_USER } from "fragments";
import { CreateAccountTypes } from "./../";
import * as S from "./../style";

const CreateAccount: React.FC<CreateAccountTypes> = ({
  toggleComponetView,
  onSuccess,
  onError,
}) => {
  const [state, setState] = useState({
    name: "Batman",
    password: "gatinhalinda",
    email: "cersei@gmail.com",
  });

  const onChangeHandle = ({ target: { value, name } }) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Mutation
      onCompleted={({ saveUserAndSignIn }) => onSuccess(saveUserAndSignIn)}
      variables={state}
      onError={onError}
      mutation={CREATE_NEW_USER}
    >
      {(createUser, { loading }) => {
        return (
          <div>
            <S.FormTitle>Criar conta</S.FormTitle>
            <S.Form>
              <S.Input
                placeholder="Seu nome"
                onChange={onChangeHandle}
                type="text"
                name="name"
                value={state.name}
              />
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
                <S.Button
                  disabled={
                    loading || !state.email || !state.name || !state.password
                  }
                  onClick={createUser}
                >
                  Criar conta
                </S.Button>
                <S.Button disabled={loading} onClick={toggleComponetView}>
                  Fazer login
                </S.Button>
              </S.ButtonsWrapper>
            </S.Form>
          </div>
        );
      }}
    </Mutation>
  );
};

CreateAccount.propTypes = {
  onError: PropTypes.func.isRequired,
  onSuccess: PropTypes.func.isRequired,
  toggleComponetView: PropTypes.func.isRequired,
};

export default CreateAccount;
