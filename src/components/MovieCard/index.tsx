import React, { memo } from "react";
import { FixMeLater } from "types/common";
import * as S from "./style";
import { Link } from "react-router-dom";
import { Movie } from "types/common";

export const BASE_IMG = "https://image.tmdb.org/t/p/w500/";

interface Props extends Movie {
  _id?: string;
  loading?: boolean;
  callback?: FixMeLater;
  userID?: string;
  isInFavorites?: boolean;
  selectMovieAndRedirect: (movie: Movie) => void;
}

const MovieCard = ({
  title,
  movieID,
  posterPath,
  selectMovieAndRedirect,
  ...props
}: Props) => {
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
    </S.Card>
  );
};

MovieCard.defaultProps = {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  selectMovieAndRedirect: () => {},
};

export default memo(MovieCard);
