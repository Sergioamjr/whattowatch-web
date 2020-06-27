import { useFormik } from "formik";
import * as yup from "yup";
import React from "react";
import { Mutation } from "react-apollo";
import { CREATE_NEW_USER } from "fragments";
import { CreateAccountTypes } from "./../";
import * as S from "./../style";

const CreateAccount = ({
  toggleComponetView,
  onSuccess,
  onError,
}: CreateAccountTypes): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      name: "",
      password: "",
      email: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
    onSubmit: () => {
      console.log("submit");
    },
  });

  const isValidByFormik = !formik.isValid || !formik.values.email;

  return (
    <Mutation
      onCompleted={({ saveUserAndSignIn }) => onSuccess(saveUserAndSignIn)}
      variables={formik.values}
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
                onChange={formik.handleChange}
                type="text"
                name="name"
                value={formik.values.name}
              />
              <S.Input
                placeholder="Seu e-mail"
                onChange={formik.handleChange}
                type="text"
                name="email"
                value={formik.values.email}
              />
              <S.Input
                placeholder="Sua senha"
                onChange={formik.handleChange}
                type="password"
                name="password"
                value={formik.values.password}
              />
              <S.ButtonsWrapper>
                <S.Button
                  disabled={loading || isValidByFormik}
                  onClick={createUser}
                >
                  Criar conta
                </S.Button>
                <S.Link
                  href="/#"
                  disabled={loading}
                  onClick={toggleComponetView}
                >
                  Fazer login
                </S.Link>
              </S.ButtonsWrapper>
            </S.Form>
          </div>
        );
      }}
    </Mutation>
  );
};

// CreateAccount.propTypes = {
//   onError: PropTypes.func.isRequired,
//   onSuccess: PropTypes.func.isRequired,
//   toggleComponetView: PropTypes.func.isRequired,
// };

export default CreateAccount;
