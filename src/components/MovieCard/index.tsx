import React, { memo } from "react";
import { FixMeLater } from "types/common";
import * as S from "./style";
import { cachedMovie } from "hooks/useAppStore";

const BASE_IMG = "https://image.tmdb.org/t/p/w500/";

interface MovieCardTypes {
  _id: string;
  title: string;
  id: number;
  poster_path: string;
  loading: boolean;
  callback: FixMeLater;
  userID: string;
  isInFavorites: boolean;
  selectMovieAndRedirect: (movie: cachedMovie) => void;
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
  selectMovieAndRedirect,
  ...props
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
    <S.Card
      to={`/filmes/${movieID}`}
      onClick={() =>
        selectMovieAndRedirect({ title, movieID, posterPath, ...props })
      }
    >
      <S.Img src={`${BASE_IMG}${posterPath}`} alt="" />
      <S.Info>2019 / Drama</S.Info>
      <S.Title>{title}</S.Title>
      {false && (
        <button
          disabled={loading}
          onClick={isInFavorites ? removeFromFavorite : addToFavorite}
        >
          {isInFavorites ? "Remover" : "Adicionar"}
        </button>
      )}
      <S.Rating>7</S.Rating>
    </S.Card>
  );
};

MovieCard.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  selectMovieAndRedirect: () => {},
};

export default memo(MovieCard);
