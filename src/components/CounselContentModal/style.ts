import styled from "styled-components";
import theme from "../../styles/theme";
import { font } from "../../styles/font";

export const Container = styled.div`
  width: 1000px;
  height: 700px;
  background-color: ${theme.white};
  border-radius: 30px;
  padding: 30px 30px 0 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const Title = styled.div`
  ${font.$H3};
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 60%;
  border: 1px solid ${theme.grey[300]};
  border-radius: 20px;
  resize: none;
  ${font.$Body3};
  padding: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const Button = styled.button`
  width: 200px;
  height: 60px;
  background-color: ${theme.primary};
  border-radius: 18px;
  ${font.$Button1};
  color: ${theme.white};
  cursor: pointer;
`;
