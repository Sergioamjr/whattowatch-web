import React from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

const Header: React.FC = () => {
  return (
    <S.Header>
      <h1>WhatToWatch</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/movies">Filmes</Link>
        <Link to="/favorites">Favoritos</Link>
      </nav>
    </S.Header>
  );
};

export default Header;
