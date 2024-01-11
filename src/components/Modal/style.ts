import { css, keyframes, styled } from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ShowModalAnimation = keyframes`
  0% {
    transform: scale(0.95);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const CloseModalAnimation = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.95);
    opacity: 0
  }
  `;

export const ModalBackground = styled.div<{ hidden: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(0.2rem);
  z-index: 10;
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

export const ModalBox = styled.div<{ visible: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  width: fit-content;
  height: fit-content;
  z-index: 20;
  margin-top: 50px;
  transform: translate(-50%, -50%);
  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
  border-radius: 15px;
  animation: ${({ visible }) =>
      visible ? ShowModalAnimation : CloseModalAnimation}
    0.5s cubic-bezier(0.23, 1, 0.12, 1) forwards;
`;
