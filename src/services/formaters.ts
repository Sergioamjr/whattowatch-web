import { FixMeLater, GenresType, Movie } from "types/common";

type MoviesResponse = {
  results: Movie[];
  page: number;
  total_pages: number;
};

export const formatMoviesResponse = ({ data }: FixMeLater): MoviesResponse => {
  return {
    results: data.results
      .map(({ id, poster_path, backdrop_path, ...movie }) => ({
        ...movie,
        movieID: id,
        posterPath: poster_path,
        backdropPath: backdrop_path,
      }))
      .filter(({ backdropPath, posterPath }) => backdropPath && posterPath),
    page: data.page,
    total_pages: data.total_pages,
  };
};

export const formatGenresResponse = (response: FixMeLater): GenresType[] => {
  return response.genres;
};

export const normalizeSingleMovie = ({ data }: FixMeLater): Movie => {
  return {
    title: data.title,
    movieID: data.id,
    adult: data.adult,
    backdropPath: data.backdrop_path,
    genre_ids: data.genres.map(({ id }) => id),
    original_language: data.original_language,
    posterPath: data.poster_path,
    original_title: data.original_title,
    overview: data.overview,
    popularity: data.popularity,
    release_date: data.release_date,
    video: data.video,
    vote_average: data.vote_average,
    vote_count: data.vote_count,
  };
};
