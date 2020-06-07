import styled from "styled-components";

export const Title = styled.h3`
  color: #fff;
  margin-bottom: 15px;
  font-weight: bold;
  font-size: 1.3em;
`;

export const Text = styled.p`
  color: #fff;
  margin-bottom: 15px;
  font-weight: lighter;
  text-align: justify;
`;

export const Img = styled.img`
  border-radius: 3px;
  margin-bottom: 15px;
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
