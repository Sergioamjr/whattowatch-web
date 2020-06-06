import React, { memo } from "react";
import { FixMeLater } from "types/common";
import * as S from "./style";
import { Link } from "react-router-dom";
import { Movie } from "types/common";

export const BASE_IMG = "https://image.tmdb.org/t/p/w500/";

interface Props extends Movie {
  _id: string;
  loading: boolean;
  callback: FixMeLater;
  userID: string;
  isInFavorites: boolean;
  selectMovieAndRedirect: (movie: Movie) => void;
}

const MovieCard = ({
  _id,
  title,
  movieID,
  posterPath,
  loading,
  callback,
  userID,
  isInFavorites,
  selectMovieAndRedirect,
  ...props
}: Props) => {
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
    <S.Card>
      <Link
        to={`/filmes/${movieID}`}
        onClick={() =>
          selectMovieAndRedirect({ title, movieID, posterPath, ...props })
        }
      >
        <S.Img src={`${BASE_IMG}${posterPath}`} alt="" />
      </Link>
      <S.Info>2019 / Drama</S.Info>
      <S.CustomLink
        to={`/filmes/${movieID}`}
        onClick={() =>
          selectMovieAndRedirect({ title, movieID, posterPath, ...props })
        }
      >
        <S.Title>{title}</S.Title>
      </S.CustomLink>
      {false && (
        <button
          disabled={loading}
          onClick={isInFavorites ? removeFromFavorite : addToFavorite}
        >
          {isInFavorites ? "Remover" : "Adicionar"}
        </button>
      )}
    </S.Card>
  );
};

MovieCard.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  selectMovieAndRedirect: () => {},
};

export default memo(MovieCard);
