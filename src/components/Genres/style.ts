import styled from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  overflow: auto;
  padding-bottom: 20px;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const ListItemBtn = styled<{ actived: boolean }>(Link)`
  border: 0;
  padding: 8px 8px;
  border-radius: 40px;
  color: #fff;
  background-color: ${({ actived }) => (actived ? "#333" : "#40816d")};
  font-size: 0.8em;
  white-space: pre;
  display: block;
  text-decoration: none;
`;
