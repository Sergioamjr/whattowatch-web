import styled from "styled-components";
import Button from "components/Button";

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
  z-index: 1;
`;

export const Modal = styled.div`
  padding: 0 15px;
  position: fixed;
  width: 100%;
  height: 100%;
  background: #0f142bcf;
  z-index: 99999;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
`;

export const Content = styled.div`
  max-width: 500px;
  width: 100%;
  margin: auto;
  position: relative;
`;
