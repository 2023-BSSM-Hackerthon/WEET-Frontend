import Header from "../../components/Header";
import * as S from "./style";

const Application = () => {
  return (
    <S.Container>
      <Header />
      <S.Contents>
        <S.Wrapper>
          <S.Title>고민 타이틀</S.Title>
          <S.Input />
        </S.Wrapper>
        <S.Wrapper style={{ flexDirection: "row" }}>
          <S.Category>
            <S.Title>카테고리</S.Title>
            <S.Tags>
              <S.Tag>학업</S.Tag>
              <S.Tag>진로</S.Tag>
              <S.Tag>친구</S.Tag>
              <S.Tag>가족</S.Tag>
              <S.Tag>기타</S.Tag>
            </S.Tags>
          </S.Category>
          <S.Time>
            <S.Title>상담 시간</S.Title>
            <S.Input type="datetime-local" />
          </S.Time>
        </S.Wrapper>
        <S.Wrapper>
          <S.Title>고민 설명</S.Title>
          <S.TextArea />
        </S.Wrapper>
        <S.Wrapper style={{ alignItems: "end" }}>
          <S.Button>신청하기</S.Button>
        </S.Wrapper>
      </S.Contents>
    </S.Container>
  );
};

export default Application;
