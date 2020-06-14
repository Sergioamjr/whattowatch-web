import React, { useEffect, useState } from "react";
import { fetchGenres } from "services/movies";
import * as S from "./style";
import { GenresType } from "types/common";
import { convertNameToSlug } from "utils";

const Genres = (): JSX.Element => {
  const [genreList, setGenreList] = useState<GenresType[]>([]);
  useEffect(() => {
    getGenres();
  }, []);

  const getGenres = async () => {
    try {
      const genres = await fetchGenres();
      setGenreList(genres);
    } catch (err) {
      setGenreList([]);
    }
  };

  return (
    <S.List>
      <S.ListItem>
        <S.ListItemBtn to="/filmes">Todos</S.ListItemBtn>
      </S.ListItem>
      {genreList.map(({ id, name }) => {
        return (
          <S.ListItem key={id}>
            <S.ListItemBtn to={`/genero/${convertNameToSlug(name)}`}>
              {name}
            </S.ListItemBtn>
          </S.ListItem>
        );
      })}
    </S.List>
  );
};

export default Genres;
