import styled from "styled-components";
import { Link } from "react-router-dom";
import theme from "styles/theme";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

export const MenuLink = styled(Link)`
  color: ${theme.color.white};
  font-size: 1em;
  text-decoration: none;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Logo = styled.h1`
  color: ${theme.color.white};
  font-size: 1.2em;
`;
