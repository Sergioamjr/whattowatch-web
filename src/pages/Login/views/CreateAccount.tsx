import PropTypes from "prop-types";
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { CREATE_NEW_USER } from "../../../fragments";
import { CreateAccountTypes } from "./../";

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
            <p>Criar conta</p>
            <input
              onChange={onChangeHandle}
              type="text"
              name="name"
              value={state.name}
            />
            <input
              onChange={onChangeHandle}
              type="text"
              name="email"
              value={state.email}
            />
            <input
              onChange={onChangeHandle}
              type="password"
              name="password"
              value={state.password}
            />
            <button
              disabled={
                loading || !state.email || !state.name || !state.password
              }
              onClick={createUser}
            >
              Criar conta
            </button>
            <button disabled={loading} onClick={toggleComponetView}>
              Login
            </button>
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
