import gql from "graphql-tag";

export const ADD_MOVIE_TO_FAVORITE = gql`
  mutation addMovie(
    $userID: String
    $movieID: Int
    $title: String
    $posterPath: String
  ) {
    saveFavorite(
      userID: $userID
      movieID: $movieID
      title: $title
      posterPath: $posterPath
    ) {
      _id
      title
    }
  }
`;

export const GET_LOCAL_USER = gql`
  query IsUserLoggedIn {
    _id @client
    email @client
    name @client
    token @client
  }
`;

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
      _id
    }
  }
`;

export interface QUERY_USER_FAVORITES_DATA {
  title: string;
  _id: string;
  movieID: number;
  posterPath: string;
}

export interface QUERY_USER_FAVORITES_TYPES {
  getFavoritesByUserID: QUERY_USER_FAVORITES_DATA[];
}

export const QUERY_USER_FAVORITES = gql`
  query GetById($userID: String) {
    getFavoritesByUserID(userID: $userID) {
      title
      _id
      movieID
      posterPath
    }
  }
`;

export const DELETE_FAVORITE = gql`
  mutation removeFromFavorite($_id: ID) {
    removeFavoriteById(_id: $_id) {
      title
    }
  }
`;
