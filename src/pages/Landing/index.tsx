import { useNavigate } from "react-router-dom";
import Logo from "../../assets/svgs/Logo";
import Header from "../../components/common/Header";
import theme from "../../styles/theme/theme";
import * as S from "./style";
import useModal from "../../hooks/useModal";
import LoginModal from "../../components/LoginModal";

const Main = () => {
  const navigate = useNavigate();
  const isUser = localStorage.getItem("accessToken");
  const { openModal, closeModal } = useModal();

  const openLoginModal = () => {
    openModal({
      component: <LoginModal closeModal={closeModal} />,
    });
  };

  return (
    <S.Container>
      <Header />
      <S.Contents>
        <S.SubTitle>고민이 있으신가요?</S.SubTitle>
        <S.Title>여러분의 고민을</S.Title>
        <S.Wraapper>
          <Logo width={100} color={theme.primary} />
          <S.Title>에서 풀어보세요.</S.Title>
        </S.Wraapper>
        {isUser ? (
          <S.Button onClick={() => navigate("/application")}>
            상담 신청하기
          </S.Button>
        ) : (
          <S.Button onClick={openLoginModal}>로그인하기</S.Button>
        )}
      </S.Contents>
    </S.Container>
  );
};

export default Main;
