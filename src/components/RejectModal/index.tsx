import React, { useState } from "react";
import * as S from "./style";

interface GenerateModalProps {
  closeModal: () => void;
}

const RejectModal = ({ closeModal }: GenerateModalProps) => {
  const [reason, setReason] = useState("");

  const handleReasonChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setReason(event.target.value);
  };

  const handleRequest = () => {
    if (reason === "") {
      alert("거절 사유를 입력해주세요.");
    }
    closeModal();
  };

  return (
    <S.Container>
      <S.Title>거절 사유</S.Title>
      <S.Wrapper>
        <S.Input
          placeholder="거절 사유를 적어주세요."
          value={reason}
          onChange={handleReasonChange}
        />
        <S.Button onClick={handleRequest}>거절하기</S.Button>
      </S.Wrapper>
    </S.Container>
  );
};

export default RejectModal;
