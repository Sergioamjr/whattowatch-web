import React from "react";
import { Movie } from "types/common";
import * as S from "./style";
import Badge from "components/Badge";
import { BASE_IMG } from "components/MovieCard";
import { Grid, Row } from "styles";
import { getGenreLabel } from "utils";

type Props = Partial<Movie>;

const MovieDetails = ({
  backdropPath,
  title,
  overview,
  popularity,
  release_date,
  vote_average,
  genre_ids,
}: Props): JSX.Element => {
  return (
    <S.Wrapper>
      <S.Head>
        <img src={`${BASE_IMG}${backdropPath}`} alt="" />
        <S.Title>{title}</S.Title>
      </S.Head>
      <S.Content>
        <S.Box>
          <S.Subtitle>Sinopse:</S.Subtitle>
          <S.Text>{overview}</S.Text>
        </S.Box>
        <S.Box>
          <S.Subtitle>Gêneros:</S.Subtitle>
          <div>
            {genre_ids.map((id) => (
              <Badge key={id}>{getGenreLabel(id)}</Badge>
            ))}
          </div>
        </S.Box>
        <Grid>
          <Row xs={4}>
            <S.Box>
              <S.Subtitle>Nota:</S.Subtitle>
              <S.Text>{vote_average}</S.Text>
            </S.Box>
          </Row>
          <Row xs={4}>
            <S.Box>
              <S.Subtitle>Popularidade:</S.Subtitle>
              <S.Text>{popularity}</S.Text>
            </S.Box>
          </Row>
          <Row xs={4}>
            <S.Box>
              <S.Subtitle>Lançamento:</S.Subtitle>
              <S.Text>{release_date.replace(/-/g, "/")}</S.Text>
            </S.Box>
          </Row>
        </Grid>
      </S.Content>
    </S.Wrapper>
  );
};

export default MovieDetails;
