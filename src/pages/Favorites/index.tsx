import React from "react";
import MovieCard from "components/MovieCard";
import { Mutation } from "react-apollo";
import { DELETE_FAVORITE } from "fragments";
import useQueryUser from "hooks/useQueryUser";
import useQueryUserFavorites from "hooks/useQueryUserFavorites";
import Template from "components/Template";

const Favorites: React.FC = () => {
  const { loading, getFavoritesByUserID, refetch } = useQueryUserFavorites();
  const { _id: userID } = useQueryUser();
  return (
    <Template>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          {!getFavoritesByUserID.length ? (
            <p>Lista vazia</p>
          ) : (
            getFavoritesByUserID.map((movieProps, index) => (
              <Mutation
                key={index}
                onError={(err) => {
                  console.log(err);
                }}
                onCompleted={refetch}
                mutation={DELETE_FAVORITE}
              >
                {(callback, { loading }) => {
                  return (
                    <MovieCard
                      isInFavorites
                      userID={userID}
                      callback={callback}
                      loading={loading}
                      favorite={movieProps}
                      {...movieProps}
                    />
                  );
                }}
              </Mutation>
            ))
          )}
        </div>
      )}
    </Template>
  );
};

export default Favorites;
