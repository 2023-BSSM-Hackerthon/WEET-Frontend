import styled from "styled-components";
import theme from "../../styles/theme";
import { font } from "../../styles/font";

export const Container = styled.div`
  width: 400px;
  height: 500px;
  background-color: ${theme.white};
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  padding: 22px 0;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  width: 90%;
  height: 70px;
  border: none;
  border-radius: 15px;
  background-color: ${theme.primary};
  ${font.$Button1};
  color: ${theme.white};
  cursor: pointer;
`;

export const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  ${font.$p1}
  cursor: pointer;
`;
