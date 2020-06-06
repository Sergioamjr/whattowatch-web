// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type FixMeLater = any;

export type ReactChildren = {
  children: React.ReactNode;
};

export type Movie = {
  title?: string;
  movieID?: number;
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: number[];
  original_language?: string;
  posterPath?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  release_date?: "2020-01-15";
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export type Genres = {
  id: number;
  name: string;
};
