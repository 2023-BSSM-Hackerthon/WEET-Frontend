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
  gap: 8px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h1`
  ${font.$H4};
`;

export const Input = styled.input`
  width: 100%;
  height: 80px;
  border: 1px solid ${theme.grey[300]};
  border-radius: 15px;
  padding-left: 20px;
  box-sizing: border-box;
  ${font.$Button3}
`;

export const Category = styled.div`
  width: 60%;
  height: 150px;
  border-right: 3px solid ${theme.grey[300]};
`;

export const Tags = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

export const Tag = styled.button`
  width: 90px;
  height: 40px;
  border: none;
  border-radius: 50px;
  background-color: ${theme.grey[200]};
  ${font.$Body3}
`;

export const Time = styled.div`
  width: 40%;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border: 1px solid ${theme.grey[300]};
  border-radius: 20px;
  resize: none;
  padding: 18px;
  box-sizing: border-box;
  ${font.$Button3}
`;

export const Button = styled.button`
  width: 200px;
  height: 70px;
  border: none;
  border-radius: 16px;
  background-color: ${theme.primary};
  color: ${theme.white};
  ${font.$Button1};
`;
