import styled from "styled-components";
import theme from "../../styles/theme";
import { font } from "../../styles/font";

export const Container = styled.div`
  width: 900px;
  height: 600px;
  background-color: ${theme.white};
  border-radius: 20px;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.div`
  ${font.$Body1};
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Content = styled.div`
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid ${theme.grey[200]};
  border-radius: 10px;
  ${font.$Body3};
`;
