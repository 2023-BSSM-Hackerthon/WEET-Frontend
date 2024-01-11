import Logo from "../../assets/svgs/Logo";
import theme from "../../styles/theme/theme";
import * as S from "./style";

interface GenerateModalProps {
  closeModal: () => void;
}

const LoginModal = ({ closeModal }: GenerateModalProps) => {
  return (
    <S.Container>
      <Logo width={70} color={theme.primary} />
      <a
        style={{ width: "100%", textAlign: "center" }}
        href="https://auth.bssm.kro.kr/oauth?clientId=9ec7149c&redirectURI=http://localhost:3000/auth/bsm"
      >
        <S.Button>BSM 계정으로 로그인하기</S.Button>
      </a>
      <S.Wrapper>
        <h1 style={{ color: theme.grey[400] }}>선생님이신가요?</h1>
        <a
          style={{ color: "black" }}
          href="https://auth.bssm.kro.kr/oauth?clientId=9ec7149c&redirectURI=http://localhost:3000/auth/bsm"
        >
          <h1>선생님으로 로그인하기</h1>
        </a>
      </S.Wrapper>
    </S.Container>
  );
};

export default LoginModal;
