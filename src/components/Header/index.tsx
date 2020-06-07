import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";
import * as S from "./style";
import { clearLocalStorage } from "services/localstorage";
import useAppStore from "hooks/useAppStore";

const Header = ({ history }: RouteComponentProps) => {
  const { isLogged, setIsLogged } = useAppStore();
  const client = useApolloClient();
  const onLoggoutHandler = (event) => {
    event.preventDefault();
    clearLocalStorage();
    client.writeData({ data: {} });
    setIsLogged(false);
    history.push("/filmes");
  };

  return (
    <S.Header>
      <S.Logo>WhatToWatch</S.Logo>
      <nav>
        <S.MenuLink to="/filmes">Filmes</S.MenuLink>
        {isLogged ? (
          <>
            <S.MenuLink to="/favoritos">Favoritos</S.MenuLink>
            <S.MenuLink to="/listas">Listas</S.MenuLink>
            <S.MenuLink onClick={onLoggoutHandler} to="/login">
              Sair
            </S.MenuLink>
          </>
        ) : (
          <S.MenuLink to="/login">Login</S.MenuLink>
        )}
      </nav>
    </S.Header>
  );
};

export default withRouter(Header);
