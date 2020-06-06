import styled from "styled-components";

export const Text = styled.p`
  color: #fff;
  margin-bottom: 15px;
`;

export const Img = styled.img`
  width: 200px;
  border-radius: 3px;
`;

export const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow: auto;
  height: 100%;
`;

export const Wrapper = styled.div`
  overflow: auto;
  height: 100%;
`;

export const Badge = styled.span`
  background: #3f9fd3;
  border-radius: 3px;
  padding: 0 3px;
  font-size: 14px;
  color: #fff;
  margin-bottom: 15px;
  display: inline-block;
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
