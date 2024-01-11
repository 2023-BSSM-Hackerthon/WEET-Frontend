import styled from "styled-components";
import theme from "../../styles/theme/theme";

export const Container = styled.div`
  width: 600px;
  height: 720px;
  background-color: ${theme.white};
  border-radius: 20px;
  padding: 30px 40px;
  box-sizing: border-box;
`;

export const Top = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
