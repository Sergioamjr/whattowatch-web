import React from "react";
import Header from "components/Header";
import { Container } from "styles";
import * as S from "./style";

interface Props {
  withGenres?: boolean;
}

const Template: React.FC<Props> = ({ children, ...props }) => {
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
