import CounselContentModal from "../../components/CounselContentModal";
import Header from "../../components/Header";
import useModal from "../../hooks/useModal";
import theme from "../../styles/theme";
import * as A from "../AppList/style";

const CounselList = () => {
  const { openModal, closeModal } = useModal();

  const openCounselContentModal = () => {
    openModal({
      component: <CounselContentModal closeModal={closeModal} />,
    });
  };

  return (
    <A.Container>
      <Header />
      <A.Contents>
        <A.Title>상담 학생 리스트</A.Title>
        <A.Wrapper>
          <A.AppContainer>
            <A.AppTitle>2215 이희성 / 2023.12.29.14:30</A.AppTitle>
            <A.Button
              onClick={openCounselContentModal}
              style={{ width: "140px", background: theme.primary }}
            >
              상담내용 작성
            </A.Button>
          </A.AppContainer>
        </A.Wrapper>
      </A.Contents>
    </A.Container>
  );
};

export default CounselList;
