import styled from "styled-components";
import { font } from "../../styles/font";
import theme from "../../styles/theme";

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
  gap: 20px;
`;

export const Title = styled.h1`
  ${font.$H4};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const History = styled.div`
  width: 100%;
  height: 100px;
  background-color: ${theme.grey[200]};
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const HistoryTitle = styled.h1`
  ${font.$H5};
  color: ${theme.grey[700]};
`;

export const Date = styled.span`
  ${font.$p1};
  color: ${theme.grey[700]};
`;
