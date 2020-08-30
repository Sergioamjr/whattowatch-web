import styled from "styled-components";

export const Text = styled.p`
  color: #333;
  font-size: 1rem;
`;

export const Wrapper = styled.div`
  max-width: 500px;
  overflow: hidden;
  border-radius: 4px;
  background: #fff;
`;

export const Content = styled.div`
  padding: 15px;
`;

export const Head = styled.div<{ withoutImg: boolean }>`
  position: relative;
  ${({ withoutImg }) =>
    !withoutImg &&
    `min-height: 200px;
    max-height: 260px;
    overflow: hidden;
    background: #333333c2;
  `}
`;

export const Title = styled.h2`
  position: absolute;
  bottom: 15px;
  left: 15px;
  right: 15px;
  background: #333333c2;
  display: inline-table;
  color: #fff;
  padding: 5px;
`;

export const Box = styled.div`
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const Subtitle = styled.p`
  color: #949494;
  font-size: 0.8rem;
  margin-bottom: 5px;
`;
