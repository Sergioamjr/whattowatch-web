import gql from "graphql-tag";

export const ADD_MOVIE_TO_FAVORITE = gql`
  mutation addMovie(
    $userID: String
    $movieID: Int
    $overview: String
    $popularity: Float
    $title: String
    $posterPath: String
    $backdropPath: String
    $release: String
    $genres: [Int]
  ) {
    saveFavorite(
      userID: $userID
      movieID: $movieID
      overview: $overview
      popularity: $popularity
      title: $title
      posterPath: $posterPath
      backdropPath: $backdropPath
      release: $release
      genres: $genres
    ) {
      _id
      title
      genres
    }
  }
`;
