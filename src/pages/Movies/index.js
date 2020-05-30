import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/movies";
import { Mutation } from "react-apollo";
import MovieCard from "../../components/MovieCard";
import useQueryUser from "../../hooks/useQueryUser";
import useQueryUserFavorites from "../../hooks/useQueryUserFavorites";
import { ADD_MOVIE_TO_FAVORITE } from "../../fragments";

const Movies = () => {
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
      fetchMovies([]);
    }
  };

  const onErrorHandler = (error) => {
    console.log("error", error);
  };

  return (
    <div>
      Movies
      {moviesList.map((movieProps, index) => {
        const isInFavorites = getFavoritesByUserID.some(
          ({ movieID }) => movieID === movieProps.id
        );
        return (
          <Mutation
            key={index}
            onError={onErrorHandler}
            onCompleted={refetch}
            mutation={ADD_MOVIE_TO_FAVORITE}
          >
            {(callback, { loading }) => {
              return (
                <MovieCard
                  isInFavorites={isInFavorites}
                  userID={userID}
                  callback={callback}
                  loading={loading}
                  {...movieProps}
                />
              );
            }}
          </Mutation>
        );
      })}
    </div>
  );
};

export default Movies;
