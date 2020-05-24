import gql from "graphql-tag";

export const LOGIN = gql`
  mutation signin($email: String!, $password: String!) {
    login(password: $password, email: $email) {
      name
      token
      _id
      email
    }
  }
`;

export const CREATE_NEW_USER = gql`
  mutation SaveUserAndSignIn(
    $name: String!
    $email: String!
    $password: String!
  ) {
    saveUserAndSignIn(name: $name, password: $password, email: $email) {
      name
      email
      token
    }
  }
`;
