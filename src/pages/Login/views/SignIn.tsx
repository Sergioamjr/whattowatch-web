import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { Mutation } from "react-apollo";
import { LOGIN } from "fragments";
import { CreateAccountTypes } from "./../";
import * as S from "./../style";

const SingIn = ({
  toggleComponetView,
  onSuccess,
  onError,
}: CreateAccountTypes): JSX.Element => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().email().required(),
      password: yup.string().required(),
    }),
    onSubmit: () => {
      console.log("submit");
    },
  });

  console.log(formik);

  const isValidByFormik = !formik.isValid || !formik.values.email;

  return (
    <Mutation
      onError={onError}
      onCompleted={({ login }) => onSuccess(login)}
      mutation={LOGIN}
      variables={formik.values}
    >
      {(login, { loading }) => {
        return (
          <div>
            <S.FormTitle>Faça login</S.FormTitle>
            <S.Form>
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
                <S.Button disabled={isValidByFormik || loading} onClick={login}>
                  Login
                </S.Button>
                <S.Link
                  href="/#"
                  disabled={loading}
                  onClick={toggleComponetView}
                >
                  Criar Conta
                </S.Link>
              </S.ButtonsWrapper>
            </S.Form>
          </div>
        );
      }}
    </Mutation>
  );
};

export default SingIn;
