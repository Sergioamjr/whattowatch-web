import React, { memo } from "react";
import { FixMeLater } from "types/common";
import * as S from "./style";
import { Link } from "react-router-dom";
import { Movie } from "types/common";
import { getGenreLabel } from "utils";

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
  const { title, posterPath, genre_ids, release_date, vote_average } = props;
  const genres = genre_ids.map((id) => getGenreLabel(id)).join(", ");
  const releasedYear = new Date(release_date).getUTCFullYear();
  return (
    <S.Card>
      <S.ImgWrapper>
        <Link
          to="/#"
          onClick={(event: FixMeLater) => {
            event.preventDefault();
            onSelectMovie(props);
          }}
        >
          <S.Img src={`${BASE_IMG}${posterPath}`} alt="" />
          {!!vote_average && <S.Note>{vote_average}</S.Note>}
        </Link>
      </S.ImgWrapper>
      <S.Info>
        {releasedYear} / {genres}
      </S.Info>
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
