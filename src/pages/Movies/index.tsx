import React, { useEffect, useState, useRef, useCallback } from "react";
import { fetchMovies } from "services/movies";
import Template from "components/Template";
import PageTitle from "components/PageTitle";
import { MoviePageState } from "types/common";
import useIsVisible from "hooks/useIsVisible";
import Genres from "components/Genres";
import ListWithModal from "components/ListWithModal";

const Movies = (): JSX.Element => {
  const [movies, setMovies] = useState<MoviePageState>({
    results: [],
    page: 0,
    total_pages: 1000,
  });

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

  return (
    <Template>
      <PageTitle top={90} left={-190}>
        Filmes
      </PageTitle>
      <Genres actived={0} />
      <ListWithModal ref={lastRef} movies={movies} isLoading={isLoading} />
    </Template>
  );
};

export default Movies;
