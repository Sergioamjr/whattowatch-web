import React, { forwardRef, useState } from "react";
import { Row, GridWithScroll } from "styles";
import Modal from "components/Modal";
import MovieDetails from "components/MovieDetails";
import MovieCard from "components/MovieCard";
import { Movie, MoviePageState } from "types/common";

type Props = {
  movies: MoviePageState;
  isLoading: boolean;
};

const ListWithModal = ({ movies, isLoading }: Props, ref): JSX.Element => {
  const [selectedMovie, setSelectedMovie] = useState<Partial<Movie>>({});
  const onCloseModal = () => setSelectedMovie({});
  return (
    <>
      <Modal isOpen={!!selectedMovie.title} onCloseModal={onCloseModal}>
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
