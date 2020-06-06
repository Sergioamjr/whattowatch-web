import React from "react";
import Header from "components/Header";
import { Container } from "styles";
import * as S from "./style";
import { ReactChildren } from "types/common";

interface Props extends ReactChildren {
  withGenres?: boolean;
}

const Template = ({ children, ...props }: Props): JSX.Element => {
  return (
    <S.Template>
      <Container>
        <Header />
        <S.Relative {...props}>{children}</S.Relative>
      </Container>
    </S.Template>
  );
};

export default Template;
