import genreList from "services/mock/genres.json";

type GetGenreLabel = (id: number) => string;

export const getGenreLabel: GetGenreLabel = (id) => {
  return genreList.genres.find(({ id: genreID }) => genreID === id).name;
};
