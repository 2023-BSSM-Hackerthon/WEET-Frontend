import { Link } from "react-router-dom";
import Logo from "../../assets/svgs/Logo";
import * as S from "./style";
import useModal from "../../hooks/useModal";
import LoginModal from "../LoginModal";
import { useState } from "react";
import AppointmentModal from "../AppointmentModal";

const Header = () => {
  const { openModal, closeModal } = useModal();
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const isLogin = localStorage.getItem("accessToken");

  const openLoginModal = () => {
    openModal({
      component: <LoginModal closeModal={closeModal} />,
    });
  };

  const openAppointmentModal = () => {
    openModal({
      component: <AppointmentModal closeModal={closeModal} />,
    });
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <S.Container>
      <Link to="/">
        <Logo />
      </Link>
      {!isLogin ? (
        <div>
          <S.Sign
            onClick={() => {
              setIsOpened(!isOpened);
            }}
          >
            내 정보
          </S.Sign>
          <button onClick={openAppointmentModal}>신청</button>
          {isOpened && (
            <S.DropdownContainer>
              <S.Options>
                <Link to="/history">
                  <S.Option>나의 상담</S.Option>
                </Link>
                <S.Option onClick={handleLogout}>로그아웃</S.Option>
              </S.Options>
            </S.DropdownContainer>
          )}
        </div>
      ) : (
        <S.Sign onClick={openLoginModal}>로그인</S.Sign>
      )}
    </S.Container>
  );
};

export default Header;
