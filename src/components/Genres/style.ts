import styled from "styled-components";

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

export const ListItemBtn = styled.button`
  border: 0;
  padding: 8px 8px;
  border-radius: 40px;
  color: #fff;
  background-image: linear-gradient(to left top, #40816d, #4c4081);
  font-size: 0.8em;
  white-space: pre;
`;
