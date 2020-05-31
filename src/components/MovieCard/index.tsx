import React from "react";
import { FixMeLater } from "./../../types/common";

interface MovieCardTypes {
  _id: string;
  title: string;
  id: string;
  poster_path: string;
  loading: boolean;
  callback: FixMeLater;
  userID: string;
  isInFavorites: boolean;
}

const MovieCard: React.FC<MovieCardTypes> = ({
  _id,
  title,
  id: movieID,
  poster_path: posterPath,
  loading,
  callback,
  userID,
  isInFavorites,
}: MovieCardTypes) => {
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

export default MovieCard;
