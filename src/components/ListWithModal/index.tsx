import React, { forwardRef } from "react";
import { Row, GridWithScroll } from "styles";
import Modal from "components/Modal";
import MovieDetails from "components/MovieDetails";
import MovieCard from "components/MovieCard";
import { Movie, MoviePageState } from "types/common";

type Props = {
  isOpen: boolean;
  onCloseModal: () => void;
  selectedMovie: Partial<Movie>;
  movies: MoviePageState;
  setSelectedMovie: (e: Movie) => void;
  isLoading: boolean;
};

const ListWithModal = (
  {
    isOpen,
    onCloseModal,
    selectedMovie,
    movies,
    setSelectedMovie,
    isLoading,
  }: Props,
  ref
): JSX.Element => {
  return (
    <>
      <Modal isOpen={isOpen} onCloseModal={onCloseModal}>
        <MovieDetails {...selectedMovie} />
      </Modal>
      <GridWithScroll>
        {movies.results.map((movieProps, index) => {
          return (
            <Row
              key={index}
              ref={index === movies.results.length - 1 ? ref : null}
              xs={6}
              sm={4}
              md={3}
              xl={2}
            >
              <MovieCard {...movieProps} onSelectMovie={setSelectedMovie} />
            </Row>
          );
        })}
        {isLoading && <p>CARREGANDO...</p>}
      </GridWithScroll>
    </>
  );
};

export default forwardRef(ListWithModal);
