import React from "react";
import SVGAttributeProps from "../../types/svg.stype";
import theme from "../../styles/theme/theme";

const Plus = ({
  width = 20,
  height = 20,
  color = theme.white,
}: SVGAttributeProps) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10 0C10.3183 0 10.6235 0.126428 10.8485 0.351472C11.0736 0.576516 11.2 0.88174 11.2 1.2V8.8H18.8C19.1183 8.8 19.4235 8.92643 19.6485 9.15147C19.8736 9.37652 20 9.68174 20 10C20 10.3183 19.8736 10.6235 19.6485 10.8485C19.4235 11.0736 19.1183 11.2 18.8 11.2H11.2V18.8C11.2 19.1183 11.0736 19.4235 10.8485 19.6485C10.6235 19.8736 10.3183 20 10 20C9.68174 20 9.37652 19.8736 9.15147 19.6485C8.92643 19.4235 8.8 19.1183 8.8 18.8V11.2H1.2C0.88174 11.2 0.576516 11.0736 0.351472 10.8485C0.126428 10.6235 0 10.3183 0 10C0 9.68174 0.126428 9.37652 0.351472 9.15147C0.576516 8.92643 0.88174 8.8 1.2 8.8H8.8V1.2C8.8 0.88174 8.92643 0.576516 9.15147 0.351472C9.37652 0.126428 9.68174 0 10 0Z"
        fill={color}
      />
    </svg>
  );
};

export default Plus;
