import React, { useEffect, useState } from "react";
import { fetchMovies } from "services/movies";
import { RouteComponentProps } from "react-router-dom";
import { Mutation } from "react-apollo";
import MovieCard from "components/MovieCard";
import useQueryUser from "hooks/useQueryUser";
import useQueryUserFavorites from "hooks/useQueryUserFavorites";
import { ADD_MOVIE_TO_FAVORITE, DELETE_FAVORITE } from "fragments";
import Template from "components/Template";
import PageTitle from "components/PageTitle";
import useAppStore from "hooks/useAppStore";
import { Movie } from "types/common";
import { Grid, Row } from "styles";

const Movies = ({ history }: RouteComponentProps): JSX.Element => {
  const { setCachedMovie } = useAppStore();
  const { _id: userID } = useQueryUser();
  const [moviesList, setMovieList] = useState([]);
  const { getFavoritesByUserID = [], refetch } = useQueryUserFavorites();

  useEffect(() => {
    getAllMovies();
  }, []);

  const getAllMovies = async () => {
    try {
      const movies = await fetchMovies();
      setMovieList(movies);
    } catch (err) {
      setMovieList([]);
    }
  };

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
      <Grid>
        {moviesList.map((movieProps, index) => {
          const isInFavorites = getFavoritesByUserID.find(
            ({ movieID }) => movieID === movieProps.id
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
                  <Row xs={6} sm={4} md={3} xl={2}>
                    <MovieCard
                      _id={isInFavorites?._id}
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
      </Grid>
    </Template>
  );
};

export default Movies;
