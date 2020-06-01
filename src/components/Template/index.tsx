import React from "react";
import Header from "components/Header";
import { Container } from "styles";
import * as S from "./style";

const Template: React.FC = ({ children }) => {
  return (
    <S.Template>
      <Container>
        <Header />
        <S.Relative>{children}</S.Relative>
      </Container>
    </S.Template>
  );
};

export default Template;
