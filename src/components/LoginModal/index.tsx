import Logo from "../../assets/svgs/Logo";
import theme from "../../styles/theme";
import * as S from "./style";

interface GenerateModalProps {
  closeModal: () => void;
}

const LoginModal = ({ closeModal }: GenerateModalProps) => {
  return (
    <S.Container>
      <Logo width={70} color={theme.primary} />
      <S.Button>BSM 계정으로 로그인하기</S.Button>
      <S.Wrapper>
        <h1 style={{ color: theme.grey[400] }}>선생님이신가요?</h1>
        <h1>선생님으로 로그인하기</h1>
      </S.Wrapper>
    </S.Container>
  );
};

export default LoginModal;
