import React, { useEffect, useState, useRef, useCallback } from "react";
import { fetchMovies } from "services/movies";
import MovieCard from "components/MovieCard";
import Template from "components/Template";
import PageTitle from "components/PageTitle";
import { Movie } from "types/common";
import { GridWithScroll, Row } from "styles";
import useAppStore from "hooks/useAppStore";
import useIsVisible from "hooks/useIsVisible";
import * as S from "./style";
import Genres from "components/Genres";

const Movies = (): JSX.Element => {
  const { movies, setMovies } = useAppStore();
  const [selectedMovie, setSelectedMovie] = useState<Partial<Movie>>({});
  const lastRef = useRef<HTMLElement | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const isVisible = useIsVisible(lastRef.current);

  const getMoreMovies = useCallback(
    async (page: number) => {
      try {
        setIsLoading(true);
        const newMovies = await fetchMovies(page);
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
      getMoreMovies(movies.page + 1);
    }
  }, [movies.results, getMoreMovies, movies.page]);

  useEffect(() => {
    if (isVisible) {
      getMoreMovies(movies.page + 1);
    }
  }, [isVisible, getMoreMovies, movies.page]);

  console.log(selectedMovie);

  return (
    <Template>
      <PageTitle top={90} left={-190}>
        Filmes
      </PageTitle>
      <Genres actived={0} />
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

export default Movies;
