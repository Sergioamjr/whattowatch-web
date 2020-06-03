import React from "react";
import MovieCard from "components/MovieCard";
import { Mutation } from "react-apollo";
import { DELETE_FAVORITE } from "fragments";
import useQueryUser from "hooks/useQueryUser";
import useQueryUserFavorites from "hooks/useQueryUserFavorites";
import Template from "components/Template";
import * as S from "./style";
import PageTitle from "components/PageTitle";

const Favorites: React.FC = () => {
  const { loading, getFavoritesByUserID, refetch } = useQueryUserFavorites();
  const { _id: userID } = useQueryUser();

  return (
    <Template>
      <PageTitle top={150} left={-250}>
        Favoritos
      </PageTitle>
      {loading ? (
        <p>Carregando...</p>
      ) : !getFavoritesByUserID.length ? (
        <p>Lista vazia</p>
      ) : (
        <S.Grid>
          {getFavoritesByUserID.map((movieProps, index) => (
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
                    id={movieProps.movieID}
                    {...movieProps}
                    poster_path={movieProps.posterPath}
                  />
                );
              }}
            </Mutation>
          ))}
        </S.Grid>
      )}
    </Template>
  );
};

export default Favorites;
