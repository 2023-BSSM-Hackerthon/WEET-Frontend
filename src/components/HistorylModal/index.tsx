import styled from "styled-components";
import theme from "../../styles/theme/theme";
import { font } from "../../styles/theme/font";
interface GenerateModalProps {
  closeModal: () => void;
}

const HistoryModal = ({ closeModal }: GenerateModalProps) => {
  return (
    <Container>
      <Title>상담 내용</Title>
      <Content>
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
      </Content>
      <Button onClick={closeModal}>나가기</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 900px;
  height: 600px;
  background-color: ${theme.white};
  padding: 30px;
  box-sizing: border-box;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const Title = styled.h1`
  ${font.$Body1};
`;

export const Content = styled.h1`
  ${font.$Body3};
`;

export const Button = styled.button`
  width: 100px;
  height: 40px;
  background-color: ${theme.primary};
  border: none;
  border-radius: 20px;
  ${font.$Button2};
  color: ${theme.white};
`;

export default HistoryModal;
