import styled from "styled-components";
import Button from "components/Button";

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

export const Head = styled.div`
  position: relative;
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

export const CloseBtn = styled(Button)`
  position: absolute;
  right: 15px;
  top: 15px;
  border-radius: 50%;
  border: 0;
  width: 30px;
  height: 30px;
  background: #f44336;
  font-size: 0;
`;
