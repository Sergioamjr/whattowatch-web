import styled from "styled-components";
import theme from "styles/theme";

export const Template = styled.div`
  background-color: ${theme.color.theme};
  height: 100%;
`;

interface RelativeType {
  withGenres: boolean;
}

export const Relative = styled.div`
  position: relative;
  height: ${({ withGenres }: RelativeType): string =>
    `calc(100% - ${withGenres ? "130px" : "80px"});`};
`;
