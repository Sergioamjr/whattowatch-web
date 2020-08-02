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
  onSelectMovie: (movie: Movie) => void;
}

const MovieCard = ({ onSelectMovie, ...props }: Props) => {
  const { title, posterPath } = props;
  return (
    <S.Card>
      <Link
        to="/#"
        onClick={(event: FixMeLater) => {
          event.preventDefault();
          onSelectMovie(props);
        }}
      >
        <S.Img src={`${BASE_IMG}${posterPath}`} alt="" />
      </Link>
      <S.Info>2019 / Drama</S.Info>
      <S.CustomLink
        to="/#"
        onClick={(event: FixMeLater) => {
          event.preventDefault();
          onSelectMovie(props);
        }}
      >
        <S.Title>{title}</S.Title>
      </S.CustomLink>
    </S.Card>
  );
};

export default memo(MovieCard);
