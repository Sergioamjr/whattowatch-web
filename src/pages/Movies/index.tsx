import React, { useEffect, useState, useRef, useCallback } from "react";
import { fetchMovies } from "services/movies";
import { RouteComponentProps } from "react-router-dom";
import { Mutation } from "react-apollo";
import MovieCard from "components/MovieCard";
import { ADD_MOVIE_TO_FAVORITE, DELETE_FAVORITE } from "fragments";
import Template from "components/Template";
import PageTitle from "components/PageTitle";
import { Movie } from "types/common";
import { GridWithScroll, Row } from "styles";
import useAppStore from "hooks/useAppStore";
import useQueryUser from "hooks/useQueryUser";
import useIsVisible from "hooks/useIsVisible";
import useQueryUserFavorites from "hooks/useQueryUserFavorites";
import * as S from "./style";

const Movies = ({ history }: RouteComponentProps): JSX.Element => {
  const { movies, setMovies } = useAppStore();
  const lastRef = useRef<HTMLElement | null>(null);
  const { setCachedMovie } = useAppStore();
  const { _id: userID } = useQueryUser();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { getFavoritesByUserID = [], refetch } = useQueryUserFavorites();
  const isVisible = useIsVisible(lastRef.current);

  useEffect(() => {
    getAllMovies(movies.page);
  }, [movies.page]);

  useEffect(() => {
    if (isVisible) {
      setMovies({
        ...movies,
        page: movies.page + 1,
      });
    }
  }, [isVisible]);

  const getAllMovies = useCallback(
    async (page: number) => {
      try {
        setIsLoading(true);
        const newMovies = await fetchMovies(page);
        setMovies({
          ...newMovies,
          results: movies.results.concat(newMovies.results),
        });
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setMovies({ results: [], page: 1, total_pages: 1000 });
      }
    },
    [movies.results, setMovies]
  );

  const onErrorHandler = (error) => {
    console.log("error", error);
  };

  const selectMovieAndRedirect = (movie: Movie): void => {
    setCachedMovie(movie);
    history.push(`/filmes/${movie.movieID}`);
  };

  return (
    <Template>
      <PageTitle top={90} left={-190}>
        Filmes
      </PageTitle>
      <GridWithScroll>
        {movies.results.map((movieProps, index) => {
          const isInFavorites = getFavoritesByUserID.find(
            ({ movieID }) => movieID === movieProps.movieID
          );
          return (
            <Mutation
              key={index}
              onError={onErrorHandler}
              onCompleted={refetch}
              mutation={isInFavorites ? DELETE_FAVORITE : ADD_MOVIE_TO_FAVORITE}
            >
              {(callback, { loading }) => {
                return (
                  <Row
                    ref={index === movies.results.length - 1 ? lastRef : null}
                    xs={6}
                    sm={4}
                    md={3}
                    xl={2}
                  >
                    <MovieCard
                      _id={isInFavorites?.movieID}
                      isInFavorites={!!isInFavorites}
                      userID={userID}
                      callback={callback}
                      loading={loading}
                      selectMovieAndRedirect={selectMovieAndRedirect}
                      {...movieProps}
                    />
                  </Row>
                );
              }}
            </Mutation>
          );
        })}
        {isLoading && <S.Loading>CARREGANDO...</S.Loading>}
      </GridWithScroll>
    </Template>
  );
};

export default Movies;
