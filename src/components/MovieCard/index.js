import PropTypes from "prop-types";
import React from "react";

const MovieCard = ({
  _id,
  title,
  id: movieID,
  poster_path: posterPath,
  loading,
  callback,
  userID,
  isInFavorites,
}) => {
  const addToFavorite = () => {
    callback({
      variables: {
        userID,
        movieID,
        title,
        posterPath,
      },
    });
  };

  const removeFromFavorite = () => {
    callback({
      variables: {
        _id,
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
  _id: PropTypes.string,
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
