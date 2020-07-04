import React, { useEffect, useState, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import Template from "components/Template";
import useAppStore from "hooks/useAppStore";
import { Movie } from "types/common";
import { fetchSingleMovie } from "services/movies";
import * as S from "./style";
import { BASE_IMG } from "components/MovieCard";
import { GridWithScroll, Row } from "styles";
import Button from "components/Button";
import useQueryUserFavorites from "hooks/useQueryUserFavorites";
import { Mutation } from "react-apollo";
import { ADD_MOVIE_TO_FAVORITE, DELETE_FAVORITE } from "fragments";
import useQueryUser from "hooks/useQueryUser";
import { getGenreLabel } from "utils";

const SingleMovie = (props: RouteComponentProps): JSX.Element => {
  const { id } = props.match.params;
  const { getFavoritesByUserID = [], refetch } = useQueryUserFavorites();
  const { _id: userID } = useQueryUser();
  const { setCachedMovie, cachedMovie, isLogged } = useAppStore();
  const [movie, setMovie] = useState<Partial<Movie>>(cachedMovie);

  const getMovieDetails = useCallback(async () => {
    try {
      const data = await fetchSingleMovie(id);
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    if (!movie.movieID) {
      getMovieDetails();
    }
    return () => setCachedMovie({});
  }, [movie.movieID, setCachedMovie, getMovieDetails]);

  const onErrorHandler = (error) => {
    console.log("error", error);
  };

  const isInFavorites = getFavoritesByUserID.find(
    ({ movieID }) => movieID === movie.movieID
  );

  return (
    <Mutation
      onError={onErrorHandler}
      onCompleted={refetch}
      mutation={isInFavorites ? DELETE_FAVORITE : ADD_MOVIE_TO_FAVORITE}
    >
      {(callback, { loading }) => {
        return (
          <Template>
            <S.Wrapper smaller>
              {movie.movieID ? (
                <GridWithScroll>
                  <Row sm={4}>
                    <S.Img
                      src={`${BASE_IMG}/${movie.posterPath}`}
                      alt="movie"
                    />
                  </Row>
                  <Row sm={8}>
                    <S.Title>{movie.title}</S.Title>
                    {movie.genre_ids &&
                      movie.genre_ids.map((id) => (
                        <S.Badge key={id}>{getGenreLabel(id)}</S.Badge>
                      ))}
                    <S.Text>{movie.vote_average}</S.Text>
                    <S.Text>{movie.overview}</S.Text>
                    {isLogged && (
                      <div>
                        {isInFavorites ? (
                          <Button
                            disabled={loading}
                            onClick={() => {
                              callback({
                                variables: {
                                  _id: isInFavorites._id,
                                },
                              });
                            }}
                          >
                            Remover dos favoritos
                          </Button>
                        ) : (
                          <Button
                            disabled={loading}
                            onClick={() => {
                              callback({
                                variables: {
                                  ...movie,
                                  userID,
                                },
                              });
                            }}
                          >
                            Adicionar aos favoritos
                          </Button>
                        )}
                      </div>
                    )}
                  </Row>
                </GridWithScroll>
              ) : (
                <p>Pesquisando...</p>
              )}
            </S.Wrapper>
          </Template>
        );
      }}
    </Mutation>
  );
};

export default SingleMovie;
