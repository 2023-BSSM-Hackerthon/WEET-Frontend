import Logo from "../../assets/svgs/Logo";
import Header from "../../components/Header";
import theme from "../../styles/theme";
import * as S from "./style";

const Main = () => {
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
        <S.Button>상담 신청하기</S.Button>
      </S.Contents>
    </S.Container>
  );
};

export default Main;
