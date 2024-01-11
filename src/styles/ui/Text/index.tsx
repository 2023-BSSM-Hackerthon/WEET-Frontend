import styled, { css } from "styled-components";
import { font } from "../../theme/font";
import { TextAttribute } from "../../../types/TextAttribute.type";

type Font = keyof typeof font;

const Text = ({
  width = "fit-content",
  fontType,
  color = "black",
  textAlign = "center",
  ellipsis = false,
  children,
}: TextAttribute) => {
  return (
    <Container
      fontType={fontType}
      ellipsis={ellipsis}
      style={{ color, textAlign, width }}
    >
      {children}
    </Container>
  );
};

export default Text;

const Container = styled.div<{ fontType: Font; ellipsis: boolean }>`
  text-align: left;

  ${({ fontType }) => font[fontType]};
  ${({ ellipsis }) =>
    ellipsis
      ? css`
          text-overflow: ellipsis;
        `
      : css`
          text-overflow: clip;
        `};
  white-space: nowrap;
  overflow: hidden;
`;
