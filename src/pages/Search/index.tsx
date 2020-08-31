import React from "react";
import Template from "components/Template";
import PageTitle from "components/PageTitle";
import * as S from "./style";
import { searchMovieByTitle } from "services/movies";
import { useFetchWPAPI } from "hooks/useDebounceMethod";
import MovieCard from "components/MovieCard";
import { GridWithScroll, Row } from "styles";

const Search = (): JSX.Element => {
  const [query, onChangeSearch] = useFetchWPAPI(searchMovieByTitle);

  return (
    <Template>
      <PageTitle top={150} left={-150}>
        Busca
      </PageTitle>
      <S.Form>
        <S.Text>Busca</S.Text>
        <S.Input onChange={onChangeSearch} type="text" value={query.search} />
      </S.Form>
      {query.isQuerying && <S.Text>Carregando...</S.Text>}
      <GridWithScroll>
        {!!query.results.length &&
          query.results.map((movieProps, index) => (
            <Row key={index} xs={6} sm={4} md={3} xl={2}>
              <MovieCard {...movieProps} />
            </Row>
          ))}
      </GridWithScroll>
    </Template>
  );
};

export default Search;
