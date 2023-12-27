import Header from "../../components/Header";
import theme from "../../styles/theme";
import * as S from "./style";

const AppList = () => {
  return (
    <S.Container>
      <Header />
      <S.Contents>
        <S.Title>상담 신청 목록</S.Title>
        <S.Wrapper>
          <S.AppContainer>
            <div>
              <S.AppTitle>너무 잘생겨서 고민이에요.</S.AppTitle>
              <S.Name>2215 이희성 / 2023.12.29.14:30</S.Name>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <S.Button style={{ background: theme.primary }}>
                상담 수락
              </S.Button>
              <S.Button style={{ background: theme.grey[500] }}>거절</S.Button>
            </div>
          </S.AppContainer>
        </S.Wrapper>
      </S.Contents>
    </S.Container>
  );
};

export default AppList;
