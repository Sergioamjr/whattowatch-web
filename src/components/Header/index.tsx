import React from "react";
import { useApolloClient } from "@apollo/react-hooks";
import * as S from "./style";
import { clearLocalStorage } from "services/localstorage";

const Header: React.FC = () => {
  const client = useApolloClient();
  const onLoggoutHandler = () => {
    clearLocalStorage();
    client.writeData({ data: {} });
  };

  return (
    <S.Header>
      <S.Logo>WhatToWatch</S.Logo>
      <nav>
        <S.MenuLink to="/movies">Filmes</S.MenuLink>
        <S.MenuLink to="/favorites">Favoritos</S.MenuLink>
        <S.MenuLink to="/listas">Listas</S.MenuLink>
        <S.MenuLink onClick={onLoggoutHandler} to="/login">
          Sair
        </S.MenuLink>
      </nav>
    </S.Header>
  );
};

export default Header;
