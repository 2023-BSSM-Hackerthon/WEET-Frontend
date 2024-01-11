import { ReactNode } from "react";
import { CSSProperties } from "styled-components";
import { font } from "../styles/theme/font";

type font = keyof typeof font;

export interface TextAttribute {
  width?: CSSProperties["width"];
  height?: CSSProperties["height"];
  fontType: font;
  color?: CSSProperties["color"];
  textAlign?: CSSProperties["textAlign"];
  ellipsis?: boolean;
  children: ReactNode;
}
