import React from "react";
import { HashRouter as Router } from "react-router-dom";
import MovieCard from "./";
import { normalizeSingleMovie } from "services/movies";

export default {
  title: "MovieCard",
  parameters: {
    backgrounds: [{ name: "twitter", value: "#0f142b", default: true }],
  },
};

const props = normalizeSingleMovie({
  data: {
    adult: false,
    backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    belongs_to_collection: null,
    budget: 55000000,
    genres: [
      { id: 80, name: "Crime" },
      { id: 53, name: "Thriller" },
      { id: 18, name: "Drama" },
    ],
    homepage: "http://www.jokermovie.net/",
    id: 475557,
    imdb_id: "tt7286456",
    original_language: "en",
    original_title: "Joker",
    overview:
      "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    popularity: 116.063,
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    production_countries: [
      { iso_3166_1: "CA", name: "Canada" },
      { iso_3166_1: "US", name: "United States of America" },
    ],
    release_date: "2019-10-02",
    revenue: 1074251311,
    runtime: 122,
    spoken_languages: [{ iso_639_1: "en", name: "English" }],
    status: "Released",
    tagline: "Put on a happy face.",
    title: "Joker",
    video: false,
    vote_average: 8.2,
    vote_count: 14051,
  },
});

export const Component = () => (
  <Router>
    <div style={{ width: 170, margin: "10px auto" }}>
      <MovieCard {...props} onSelectMovie={() => console.log("redirect")} />
    </div>
  </Router>
);
