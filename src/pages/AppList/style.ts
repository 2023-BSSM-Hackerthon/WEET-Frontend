import styled from "styled-components";
import { font } from "../../styles/theme/font";
import theme from "../../styles/theme/theme";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Contents = styled.div`
  width: 100%;
  padding: 30px 200px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Title = styled.h1`
  ${font.$H4};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AppContainer = styled.div`
  width: 100%;
  height: 90px;
  background-color: ${theme.grey[200]};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
  box-sizing: border-box;
`;

export const AppTitle = styled.h1`
  ${font.$Body2};
`;

export const Name = styled.span`
  ${font.$p1};
`;

export const Button = styled.button`
  width: 120px;
  height: 48px;
  border: none;
  border-radius: 10px;
  ${font.$Button2};
  color: ${theme.white};
  cursor: pointer;
`;

export const Tag = styled.span`
  width: 80px;
  height: 30px;
  background-color: ${theme.primary};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${font.$Button2};
`;
