import IModalState from "../../../types/ImodalState.type";
import * as S from "./style";

interface ModalViewProps extends IModalState {
  onClose?: () => void;
}

const ModalView = ({ component, visible, onClose }: ModalViewProps) => {
  return (
    <S.ModalContainer>
      <S.ModalBackground hidden={!visible} onClick={onClose} />
      <S.ModalBox visible={visible || false}>{component}</S.ModalBox>
    </S.ModalContainer>
  );
};

export default ModalView;
