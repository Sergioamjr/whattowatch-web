import React from "react";
import MovieCard from "components/MovieCard";
import { Mutation } from "react-apollo";
import { DELETE_FAVORITE } from "fragments";
import Template from "components/Template";
import PageTitle from "components/PageTitle";
import { GridWithScroll, Row } from "styles";
import useQueryUser from "hooks/useQueryUser";
import useQueryUserFavorites from "hooks/useQueryUserFavorites";
import * as S from "./style";

const Favorites = (): JSX.Element => {
  const { loading, getFavoritesByUserID, refetch } = useQueryUserFavorites();
  const { _id: userID } = useQueryUser();

  return (
    <Template>
      <PageTitle top={150} left={-250}>
        Favoritos
      </PageTitle>
      {loading ? (
        <S.Text>Carregando...</S.Text>
      ) : !getFavoritesByUserID.length ? (
        <S.Text>Lista vazia</S.Text>
      ) : (
        <GridWithScroll>
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
                  <Row xs={6} sm={4} md={3} xl={2}>
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
                  </Row>
                );
              }}
            </Mutation>
          ))}
        </GridWithScroll>
      )}
    </Template>
  );
};

export default Favorites;
