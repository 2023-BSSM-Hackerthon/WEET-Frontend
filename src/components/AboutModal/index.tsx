import * as S from "./style";

interface GenerateModalProps {
  closeModal: () => void;
}

const AboutModal = ({ closeModal }: GenerateModalProps) => {
  return (
    <S.Container>
      <S.Title>제가 너무 잘생겨서 고민이에요.</S.Title>
      <S.Wrapper>2215 이희성 / 2023.12.28.13:30</S.Wrapper>
      <S.Content>
        뭐라뭐라뭐라뭐라아이고안녕하세요아이고안녕하세요아이고안녕하세요
        아이고안녕하세요카더가든아세요?카더가든아세요?카더가든아세요? 전
        좋아하거든요.전 좋아하거든요.전 좋아하거든요.
        뭐라뭐라뭐라뭐라아이고안녕하세요아이고안녕하세요아이고안녕하세요
        아이고안녕하세요카더가든아세요?카더가든아세요?카더가든아세요? 전
        좋아하거든요.전 좋아하거든요.전 좋아하거든요.
        뭐라뭐라뭐라뭐라아이고안녕하세요아이고안녕하세요아이고안녕하세요
        아이고안녕하세요카더가든아세요?카더가든아세요?카더가든아세요? 전
        좋아하거든요.전 좋아하거든요.전 좋아하거든요.
        뭐라뭐라뭐라뭐라아이고안녕하세요아이고안녕하세요아이고안녕하세요
        아이고안녕하세요카더가든아세요?카더가든아세요?카더가든아세요? 전
        좋아하거든요.전 좋아하거든요.전 좋아하거든요.
      </S.Content>
    </S.Container>
  );
};

export default AboutModal;
