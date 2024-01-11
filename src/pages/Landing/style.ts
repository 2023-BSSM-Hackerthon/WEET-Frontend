import styled from "styled-components";
import { font } from "../../styles/theme/font";
import theme from "../../styles/theme/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Contents = styled.div`
  width: 100%;
  padding-top: 140px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SubTitle = styled.h1`
  ${font.$H5};
  color: ${theme.primary};
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  ${font.$D3};
`;

export const Wraapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Button = styled.button`
  width: 180px;
  height: 54px;
  border: none;
  border-radius: 15px;
  margin-top: 30px;
  color: ${theme.white};
  ${font.$Button2};
  background-color: ${theme.primary};
`;
