import { Link } from "react-router-dom";
import Logo from "../../assets/svgs/Logo";
import * as S from "./style";

const Header = () => {
  return (
    <S.Container>
      <Link to="/">
        <Logo />
      </Link>
      <S.Sign>로그인</S.Sign>
    </S.Container>
  );
};

export default Header;
