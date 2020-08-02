import React, { useEffect, useState, useRef, useCallback } from "react";
import { fetchMoviesByGenrer } from "services/movies";
import { RouteComponentProps } from "react-router-dom";
import MovieCard from "components/MovieCard";
import Template from "components/Template";
import PageTitle from "components/PageTitle";
import { Movie, MoviePageState } from "types/common";
import { GridWithScroll, Row } from "styles";
import useIsVisible from "hooks/useIsVisible";
import * as S from "./style";
import Genres from "components/Genres";
import { getGenreId } from "utils";
import Modal from "components/Modal";
import MovieDetails from "components/MovieDetails";

const defaultMovies = {
  results: [],
  page: 0,
  total_pages: 1000,
};

const Genrer = (props: RouteComponentProps): JSX.Element => {
  const id = getGenreId(props.match.params.slug);
  const [movies, setMovies] = useState<MoviePageState>(defaultMovies);
  const [selectedMovie, setSelectedMovie] = useState<Partial<Movie>>({});
  const lastRef = useRef<HTMLElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isVisible = useIsVisible(lastRef.current);

  const getMoreMovies = useCallback(
    async (page: number, id: number | null) => {
      try {
        setIsLoading(true);
        const newMovies = await fetchMoviesByGenrer(page, id);
        setMovies({
          ...newMovies,
          results: movies.results.concat(newMovies.results),
        });
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setMovies({ results: [], page: 1, total_pages: 1000 });
      }
    },
    [movies.results, setMovies]
  );

  useEffect(() => {
    if (!movies.results.length) {
      getMoreMovies(movies.page + 1, id);
    }
  }, [movies.results, getMoreMovies, movies.page, id]);

  useEffect(() => {
    if (isVisible) {
      getMoreMovies(movies.page + 1, id);
    }
  }, [isVisible, getMoreMovies, id, movies.page]);

  useEffect(() => {
    setMovies(defaultMovies);
  }, [id]);

  const onCloseModal = () => {
    setSelectedMovie({});
  };

  return (
    <Template>
      <Modal isOpen={!!selectedMovie.title} onCloseModal={onCloseModal}>
        <MovieDetails {...selectedMovie} />
      </Modal>
      <PageTitle top={105} left={-205}>
        Genero
      </PageTitle>
      <Genres actived={id} />
      <GridWithScroll>
        {movies.results.map((movieProps, index) => {
          return (
            <Row
              key={index}
              ref={index === movies.results.length - 1 ? lastRef : null}
              xs={6}
              sm={4}
              md={3}
              xl={2}
            >
              <MovieCard {...movieProps} onSelectMovie={setSelectedMovie} />
            </Row>
          );
        })}
        {isLoading && <S.Loading>CARREGANDO...</S.Loading>}
      </GridWithScroll>
    </Template>
  );
};

export default Genrer;
