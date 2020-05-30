import React, { useEffect, useState } from "react";
import { fetchMovies } from "../../services/movies";
import { ADD_MOVIE_TO_FAVORITE } from "./types";
import { Mutation } from "react-apollo";
import useQueryUser from "../../hooks/useQueryUser";

const Movies = () => {
  const {
    data: { _id: userID },
  } = useQueryUser();

  const [moviesList, setMovieList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const movies = await fetchMovies();
        setMovieList(movies);
      } catch (err) {
        fetchMovies([]);
      }
    })();
  }, []);

  return (
    <Mutation
      onError={(err) => console.log("err", err)}
      onCompleted={(done) => console.log("d", done)}
      mutation={ADD_MOVIE_TO_FAVORITE}
    >
      {(fn, { loading }) => {
        return (
          <div>
            Movies
            {moviesList.map(
              ({
                title,
                id: movieID,
                release_date: release,
                backdrop_path: backdropPath,
                poster_path: posterPath,
                genres,
                popularity,
                overview,
              }) => {
                return (
                  <div key={movieID}>
                    title: {title}
                    <button
                      disabled={loading}
                      onClick={() => {
                        fn({
                          variables: {
                            userID,
                            movieID,
                            title,
                            release,
                            backdropPath,
                            posterPath,
                            genres,
                            popularity,
                            overview,
                          },
                        });
                      }}
                    >
                      Adicionar
                    </button>
                  </div>
                );
              }
            )}
          </div>
        );
      }}
    </Mutation>
  );
};

export default Movies;
