import React from "react";
import { useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import useQueryUser from "../../hooks/useQueryUser";
import Favorites from "../../pages/Favorites";

const QUERY_USER_FAVORITES = gql`
  query GetById($userID: String) {
    getFavoritesByUserID(userID: $userID) {
      title
      _id
      userID
    }
  }
`;

const FavoritesContainer = () => {
  const {
    data: { _id: userID },
  } = useQueryUser();

  const { loading, data } = useQuery(QUERY_USER_FAVORITES, {
    variables: { userID },
  });

  return <Favorites loading={loading} {...data} />;
};

export default FavoritesContainer;
