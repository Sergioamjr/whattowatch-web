import React, { useEffect, useState, useCallback } from "react";
import { RouteComponentProps } from "react-router-dom";
import Template from "components/Template";
import useAppStore from "hooks/useAppStore";
import { Movie, OptionalMovie } from "types/common";
import { fetchSingleMovie } from "services/movies";
import * as S from "./style";
import { BASE_IMG } from "components/MovieCard";

const SingleMovie = (props: RouteComponentProps): JSX.Element => {
  const { id } = props.match.params;
  const { setCachedMovie, cachedMovie } = useAppStore();
  const [movie, setMovie] = useState<Movie | OptionalMovie>(cachedMovie);

  const getMovieDetails = useCallback(async () => {
    try {
      const data = await fetchSingleMovie(id);
      setMovie(data);
    } catch (err) {
      console.log(err);
    }
  }, [id]);

  useEffect(() => {
    if (!movie.movieID) {
      getMovieDetails();
    }
    return () => setCachedMovie({});
  }, [movie.movieID, setCachedMovie, getMovieDetails]);

  return (
    <Template>
      <S.Wrapper>
        <S.Img src={`${BASE_IMG}/${movie.posterPath}`} alt="movie" />
        <S.Text>{movie.title}</S.Text>
        {[1, 2, 3].map((i) => (
          <S.Badge key={i}>Genero</S.Badge>
        ))}
        <S.Text>{movie.vote_average}</S.Text>
        <S.Text>{movie.overview}</S.Text>
      </S.Wrapper>
    </Template>
  );
};

export default SingleMovie;
