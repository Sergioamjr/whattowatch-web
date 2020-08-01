import styled from "styled-components";

export default styled.span`
  background: #3f9fd3;
  border-radius: 3px;
  padding: 3px;
  font-size: 0.9rem;
  color: #fff;
  display: inline-block;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
