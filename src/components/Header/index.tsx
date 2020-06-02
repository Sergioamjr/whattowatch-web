import React, { useState } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { useApolloClient } from "@apollo/react-hooks";
import * as S from "./style";
import { clearLocalStorage } from "services/localstorage";
import useQueryUser from "hooks/useQueryUser";

const Header: React.FC<RouteComponentProps> = ({
  history,
}: RouteComponentProps) => {
  const { token } = useQueryUser();
  const [isLogged, setIsLogged] = useState<boolean>(() => {
    return !!token;
  });
  const client = useApolloClient();
  const onLoggoutHandler = (event) => {
    event.preventDefault();
    clearLocalStorage();
    client.writeData({ data: {} });
    setIsLogged(false);
    history.push("/");
  };

  return (
    <S.Header>
      <S.Logo>WhatToWatch</S.Logo>
      <nav>
        <S.MenuLink to="/movies">Filmes</S.MenuLink>
        {isLogged ? (
          <>
            <S.MenuLink to="/favorites">Favoritos</S.MenuLink>
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
