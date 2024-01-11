import styled from "styled-components";
import theme from "../../styles/theme/theme";
import { font } from "../../styles/theme/font";

export const Container = styled.div`
  width: 600px;
  height: 300px;
  border-radius: 20px;
  background-color: ${theme.white};
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 55px;
`;

export const Title = styled.h1`
  ${font.$Body2};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const Input = styled.input`
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: 1px solid ${theme.grey[200]};
  ${font.$p1};
  padding-left: 10px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  border-radius: 20px;
  background-color: ${theme.warn};
  color: ${theme.white};
  ${font.$Button2};
`;
