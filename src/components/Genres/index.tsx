import React, { useEffect, useState } from "react";
import { fetchGenres, GenresTypes } from "services/movies";
import * as S from "./style";

const Genres: React.FC = () => {
  return null;
  const [genreList, setGenreList] = useState<GenresTypes[]>([]);
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
      {genreList.map(({ id, name }) => {
        return (
          <S.ListItem key={id}>
            <S.ListItemBtn>{name}</S.ListItemBtn>
          </S.ListItem>
        );
      })}
    </S.List>
  );
};

export default Genres;
