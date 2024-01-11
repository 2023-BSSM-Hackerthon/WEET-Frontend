import styled from "styled-components";
import theme from "../../styles/theme/theme";
import { font } from "../../styles/theme/font";

export const Container = styled.div`
  width: 600px;
  height: 740px;
  background-color: ${theme.white};
  border-radius: 20px;
  padding: 10px 20px;
  box-sizing: border-box;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  margin-bottom: 18px;
`;

export const Contents = styled.div`
  width: 100%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  height: 45px;
  background-color: ${theme.grey[200]};
  border-radius: 10px;
  padding-left: 10px;
  box-sizing: border-box;
  ${font.$p1};
  cursor: pointer;
  &:hover {
    background-color: ${theme.grey[300]};
  }
  transition: 0.3s ease-in-out;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  border-radius: 10px;
  resize: none;
  padding: 10px;
  box-sizing: border-box;
  ${font.$p1};
  background-color: ${theme.grey[200]};
  &:hover {
    background-color: ${theme.grey[300]};
  }
  transition: 0.3s ease-in-out;
  cursor: pointer;
`;

export const TimeWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 8px;
`;

export const TimeInput = styled.input`
  width: 100px;
  height: 40px;
  background-color: ${theme.grey[200]};
  &:hover {
    background-color: ${theme.grey[300]};
  }
  transition: 0.3s ease-in-out;
  border-radius: 10px;
  display: flex;
  text-align: center;
  ${font.$Body3};
  &[type="number"]::-webkit-outer-spin-button,
  &[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  box-sizing: border-box;
`;

export const AddTime = styled.button`
  width: 45px;
  height: 45px;
  border-radius: 100px;
  background-color: ${theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    filter: brightness(95%);
  }
  transition: 0.2s ease-in-out;
`;

export const AddedTime = styled.button`
  width: 150px;
  height: 40px;
  background-color: ${theme.grey[200]};
  border-radius: 5px;
  ${font.$p2};
  &:hover {
    background-color: ${theme.warn};
    color: ${theme.white};
  }
  transition: 0.2s ease-in-out;
`;

export const Bottom = styled.div`
  width: 100%;
  margin-top: 80px;
`;

export const Cancle = styled.button`
  width: 70px;
  height: 45px;
  border-radius: 100px;
  background-color: white;
  border: 1px solid ${theme.grey[800]};
  ${font.$Button3};
  &:hover {
    background-color: ${theme.grey[300]};
    border: 1px solid ${theme.grey[500]};
  }
  transition: 0.2s ease-in-out;
`;

export const Button = styled.button`
  width: 100px;
  height: 45px;
  border-radius: 100px;
  background-color: ${theme.primary};
  ${font.$Button3};
  &:hover {
    filter: brightness(95%);
  }
  transition: 0.2s ease-in-out;
`;

export const BottomWrapper = styled.div`
  margin-top: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;
