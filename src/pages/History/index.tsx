import Header from "../../components/common/Header";
import HistoryModal from "../../components/HistorylModal";
import useModal from "../../hooks/useModal";
import * as S from "./style";

const History = () => {
  const { openModal, closeModal } = useModal();

  const openHistoryModal = () => {
    openModal({
      component: <HistoryModal closeModal={closeModal} />,
    });
  };

  return (
    <S.Container onClick={openHistoryModal}>
      <Header />
      <S.Contents>
        <S.Title>나의 상담 기록</S.Title>
        <S.Wrapper>
          <S.History>
            <div>
              <S.HistoryTitle>
                제가 너무 집가고 싶어서 고민이에요.
              </S.HistoryTitle>
              <S.Date>2023. 07. 18</S.Date>
            </div>
          </S.History>
        </S.Wrapper>
      </S.Contents>
    </S.Container>
  );
};

export default History;
