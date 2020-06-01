import React from "react";
import Header from "components/Header";
import { Container } from "styles";
import * as S from "./style";

const Template: React.FC = ({ children }) => {
  return (
    <S.Template>
      <Container>
        <Header />
        {children}
      </Container>
    </S.Template>
  );
};

export default Template;
