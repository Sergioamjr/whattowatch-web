import genreList from "services/mock/genres.json";

type GetGenreLabel = (id: number) => string;
export const getGenreLabel: GetGenreLabel = (id) => {
  return genreList.genres.find(({ id: genreID }) => genreID === id).name;
};

type ConvertNameToSlug = (name: string) => string;
export const convertNameToSlug: ConvertNameToSlug = (name) => {
  return name.replace(" ", "-").toLowerCase();
};

type getGenreId = (slug: string) => number;
export const getGenreId: getGenreId = (slug) => {
  return genreList.genres.find(({ name }) => convertNameToSlug(name) === slug)
    ?.id;
};
