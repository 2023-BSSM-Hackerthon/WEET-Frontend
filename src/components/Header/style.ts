import styled from "styled-components";
import theme from "../../styles/theme";
import { font } from "../../styles/font";

export const Container = styled.div`
  width: 100%;
  height: 55px;
  border-bottom: 1px solid ${theme.grey[300]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 200px;
  box-sizing: border-box;
`;

export const Sign = styled.h1`
  ${font.$p1};
  cursor: pointer;
`;
