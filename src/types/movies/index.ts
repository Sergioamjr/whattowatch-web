export interface Movie {
  title: string;
  movieID: number;
  adult: boolean;
  backdropPath: string;
  genre_ids: number[];
  original_language: string;
  posterPath: string;
  original_title: string;
  overview: string;
  popularity: number;
  release_date: "2020-01-15";
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export type MoviePageState = {
  results: Movie[];
  page: number;
  total_pages: number;
};
