import styled from "styled-components";
import theme from "styles/theme";

export const Template = styled.div`
  background-color: ${theme.color.theme};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  background: #fff;
  padding: 20px;
  max-width: 400px;
  min-width: 400px;
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  padding: 5px 5px;
  border-bottom: 2px solid #ececec;
  margin-bottom: 15px;
  color: #333;
  font-size: 1em;
`;

export const FormTitle = styled.h2`
  font-weight: bold;
  font-size: 1.5em;
  color: #38416b;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border: 0;
  color: #fff;
  background: #38416b;
  padding: 10px;
  border-radius: 3px;
  box-shadow: 2px 2px 5px #a0a0a0;
  &:disabled {
    opacity: 0.3;
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ErrorAlert = styled.p`
  background: red;
  margin-top: 10px;
  color: #fff;
  border-radius: 3px;
  padding: 5px;
  max-width: 400px;
  min-width: 400px;
  width: 100%;
`;

export const Link = styled.a`
  color: #38416b;
  font-size: 0.8em;
`;
