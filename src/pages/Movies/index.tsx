import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchMovies } from "services/movies";
import { Mutation } from "react-apollo";
import MovieCard from "components/MovieCard";
import useQueryUser from "hooks/useQueryUser";
import useQueryUserFavorites from "hooks/useQueryUserFavorites";
import { ADD_MOVIE_TO_FAVORITE, DELETE_FAVORITE } from "fragments";

const Movies: React.FC = () => {
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

  return (
    <div>
      <header>
        <nav>
          <Link to="/movies">Filmes</Link>
          <Link to="/favorites">Favoritos</Link>
        </nav>
      </header>
      Movies
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
                <MovieCard
                  _id={isInFavorites?._id}
                  isInFavorites={!!isInFavorites}
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
