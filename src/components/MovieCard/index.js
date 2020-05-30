import PropTypes from "prop-types";
import React from "react";

const MovieCard = ({
  title,
  id: movieID,
  release_date: release,
  backdrop_path: backdropPath,
  poster_path: posterPath,
  genres,
  popularity,
  overview,
  loading,
  callback,
  userID,
  isInFavorites,
  favorite,
}) => {
  const addToFavorite = () => {
    callback({
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
  };

  const removeFromFavorite = () => {
    callback({
      variables: {
        _id: favorite._id,
      },
    });
  };

  return (
    <div key={movieID}>
      title: {title}
      <button
        disabled={loading}
        onClick={isInFavorites ? removeFromFavorite : addToFavorite}
      >
        {isInFavorites ? "Remover" : "Adicionar"}
      </button>
    </div>
  );
};

MovieCard.propTypes = {
  favorite: PropTypes.shape({
    _id: PropTypes.string,
  }),
  isInFavorites: PropTypes.bool,
  backdrop_path: PropTypes.string,
  callback: PropTypes.func,
  genres: PropTypes.string,
  id: PropTypes.number,
  loading: PropTypes.bool,
  overview: PropTypes.string,
  popularity: PropTypes.number,
  poster_path: PropTypes.string,
  release_date: PropTypes.string,
  title: PropTypes.string,
  userID: PropTypes.string,
};

export default MovieCard;
