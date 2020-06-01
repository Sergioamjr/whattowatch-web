import React from "react";
import * as S from "./style";

const Header: React.FC = () => {
  return (
    <S.Header>
      <S.Logo>WhatToWatch</S.Logo>
      <nav>
        <S.MenuLink to="/">Home</S.MenuLink>
        <S.MenuLink to="/movies">Filmes</S.MenuLink>
        <S.MenuLink to="/favorites">Favoritos</S.MenuLink>
      </nav>
    </S.Header>
  );
};

export default Header;
