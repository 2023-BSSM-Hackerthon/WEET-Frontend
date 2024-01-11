import Logo from "../../assets/svgs/Logo";
import Horizon from "../../styles/ui/Horizon";
import Text from "../../styles/ui/Text";
import * as S from "./style";

interface ModalProps {
  closeModal(): void;
}

const AppointmentModal = ({ closeModal }: ModalProps) => {
  return (
    <S.Container>
      <S.Top>
        <Logo />
        <Text fontType="$Body2">상담 신청하기</Text>
      </S.Top>
      <Horizon />
    </S.Container>
  );
};

export default AppointmentModal;
