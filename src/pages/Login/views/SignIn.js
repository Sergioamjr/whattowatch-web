import PropTypes from "prop-types";
import React, { useState } from "react";
import { Mutation } from "react-apollo";
import { LOGIN } from "../fragments";

const SingIn = ({ toggleComponetView, onSuccess, onError }) => {
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
      onCompleted={onSuccess}
      mutation={LOGIN}
      variables={state}
    >
      {(login, { loading }) => {
        return (
          <div>
            <p>SingIn</p>
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
            <button disabled={loading} onClick={login}>
              Login
            </button>
            <button disabled={loading} onClick={toggleComponetView}>
              Criar Conta
            </button>
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
