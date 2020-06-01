import styled from "styled-components";

export const Title = styled.h2`
  font-weight: bold;
  font-size: 5em;
  position: absolute;
  top: 100px;
  color: #38416b;
  left: -200px;
  transform: rotate(-90deg);
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: auto;
`;
