import React, { useState } from "react";
import Header from "../../components/Header";
import * as S from "./style";

interface UserInput {
  title: string;
  category: string;
  time: string;
  description: string;
}

const Application = () => {
  const [userInput, setUserInput] = useState<UserInput>({
    title: "",
    category: "",
    time: "",
    description: "",
  });

  const handleTagClick = (category: string) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      category,
    }));
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      [name]: value,
    }));
  };

  const handleRequest = () => {
    if (
      userInput &&
      userInput.title.trim() !== "" &&
      userInput.time.trim() !== "" &&
      userInput.category.trim() !== "" &&
      userInput.description.trim() !== ""
    ) {
      console.log(userInput);
    } else {
      alert("모든 필드를 채워주세요.");
    }
  };

  return (
    <S.Container>
      <Header />
      <S.Contents>
        <S.Wrapper>
          <S.Title>고민 타이틀</S.Title>
          <S.Input
            type="text"
            name="title"
            value={userInput.title}
            onChange={handleInputChange}
          />
        </S.Wrapper>
        <S.Wrapper style={{ flexDirection: "row" }}>
          <S.Category>
            <S.Title>카테고리</S.Title>
            <S.Tags>
              <S.Tag
                onClick={() => handleTagClick("학업")}
                selected={userInput.category === "학업"}
              >
                학업
              </S.Tag>
              <S.Tag
                onClick={() => handleTagClick("진로")}
                selected={userInput.category === "진로"}
              >
                진로
              </S.Tag>
              <S.Tag
                onClick={() => handleTagClick("친구")}
                selected={userInput.category === "친구"}
              >
                친구
              </S.Tag>
              <S.Tag
                onClick={() => handleTagClick("가족")}
                selected={userInput.category === "가족"}
              >
                가족
              </S.Tag>
              <S.Tag
                onClick={() => handleTagClick("기타")}
                selected={userInput.category === "기타"}
              >
                기타
              </S.Tag>
            </S.Tags>
          </S.Category>
          <S.Time>
            <S.Title>상담 시간</S.Title>
            <S.Input
              type="datetime-local"
              name="time"
              value={userInput.time}
              onChange={handleInputChange}
            />
          </S.Time>
        </S.Wrapper>
        <S.Wrapper>
          <S.Title>고민 설명</S.Title>
          <S.TextArea
            name="description"
            value={userInput.description}
            onChange={handleInputChange}
          />
        </S.Wrapper>
        <S.Wrapper style={{ alignItems: "end" }}>
          <S.Button onClick={handleRequest}>신청하기</S.Button>
        </S.Wrapper>
      </S.Contents>
    </S.Container>
  );
};

export default Application;
