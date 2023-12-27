import { Link } from "react-router-dom";
import Logo from "../../assets/svgs/Logo";
import * as S from "./style";
import useModal from "../../hooks/useModal";
import LoginModal from "../LoginModal";

const Header = () => {
  const { openModal, closeModal } = useModal();

  const openLoginModal = () => {
    openModal({
      component: <LoginModal closeModal={closeModal} />,
    });
  };

  return (
    <S.Container>
      <Link to="/">
        <Logo />
      </Link>
      <S.Sign onClick={openLoginModal}>로그인</S.Sign>
    </S.Container>
  );
};

export default Header;
