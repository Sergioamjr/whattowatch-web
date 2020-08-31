import React, { useState } from "react";
import Template from "components/Template";
import PageTitle from "components/PageTitle";
import * as S from "./style";
import { searchMovieByTitle } from "services/movies";
import { useDebounce } from "hooks/useDebounce";
import ListWithModal from "components/ListWithModal";

const Search = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState({
    isFetching: false,
    results: [],
  });

  const updateState = (obj = {}) => {
    setQuery((v) => ({
      ...v,
      ...obj,
    }));
  };

  const fetch = async () => {
    try {
      updateState({ isFetching: true, results: [] });
      const results = await searchMovieByTitle(search);
      updateState({ isFetching: false, results });
    } catch (err) {
      updateState({ isFetching: false, results: [] });
    }
  };

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearch(value);
    updateState({ results: [] });
  };

  useDebounce({ toWatch: [search], fn: fetch });

  return (
    <Template>
      <PageTitle top={150} left={-150}>
        Busca
      </PageTitle>
      <S.Form>
        <S.Text>Busca</S.Text>
        <S.Input onChange={onChangeSearch} type="text" value={search} />
      </S.Form>

      <ListWithModal isLoading={query.isFetching && !!search} movies={query} />
    </Template>
  );
};

export default Search;
