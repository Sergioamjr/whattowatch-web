import React from "react";
import * as S from "./style";
import { Close } from "icons";

type Props = {
  onCloseModal: () => void;
  isOpen: boolean;
  children: React.ReactNode;
};

const Modal = ({ children, isOpen, onCloseModal }: Props): JSX.Element => {
  if (!isOpen) {
    return null;
  }
  return (
    <S.Modal>
      <S.Content>
        <S.CloseBtn onClick={onCloseModal}>
          <Close />
        </S.CloseBtn>
        {children}
      </S.Content>
    </S.Modal>
  );
};

export default Modal;
