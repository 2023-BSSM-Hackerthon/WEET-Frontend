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

export const DropdownContainer = styled.div`
  left: 77%;
  position: absolute;
  cursor: pointer;
`;

export const Options = styled.div`
  width: 140px;
  z-index: 3;
  background-color: ${theme.white};
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  text-decoration: none;
`;

export const Option = styled.div`
  color: ${theme.black};
  padding: 8px 16px;
  cursor: pointer;
  ${font.$p2};
  transition: 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.grey[200]};
  }
`;
