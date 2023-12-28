import { useState } from "react";
import * as S from "./style";

interface GenerateModalProps {
  closeModal: () => void;
}

const CounselContentModal = ({ closeModal }: GenerateModalProps) => {
  const [contents, setContents] = useState("");

  const handleContentsChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setContents(event.target.value);
  };

  const handleRequest = () => {
    if (contents === "") {
      alert("상담 내용을 작성해주세요.");
      return;
    }
    closeModal();
  };

  return (
    <S.Container>
      <S.Title>상담 내용</S.Title>
      <S.TextArea
        onChange={handleContentsChange}
        value={contents}
        placeholder="상담 내용을 작성해주세요."
      />
      <S.Wrapper>
        <S.Button onClick={handleRequest}>상담 완료</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default CounselContentModal;
