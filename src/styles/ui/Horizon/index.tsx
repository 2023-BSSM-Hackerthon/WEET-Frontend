import React from "react";
import styled from "styled-components";
import theme from "../../theme/theme";

const Horizon = () => {
  return <Container></Container>;
};

const Container = styled.div`
  width: 100%;
  height: 2px;
  background-color: ${theme.grey[200]};
`;

export default Horizon;
