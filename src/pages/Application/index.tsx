import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import * as S from "./style";
import { instance } from "../../api";
import { userStore } from "../../store/user.store";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

interface UserInput {
  title: string;
  theme: string;
  possibleTime: string;
  content: string;
  author: number;
  state: boolean;
}

const Application = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userStore);
  console.log(user);
  const [userInput, setUserInput] = useState<UserInput>({
    title: "",
    theme: "",
    possibleTime: "",
    content: "",
    author: 0,
    state: false,
  });

  const setUser = useSetRecoilState(userStore);

  const handleTagClick = (theme: string) => {
    setUserInput((prevUserInput) => ({
      ...prevUserInput,
      theme,
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

  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/auth", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken") || ""}`,
        },
      });
      if (data) {
        setUser(data);
        userInput.author = data.id;
      }
    })();
  }, []);

  const handleRequest = async () => {
    if (
      userInput &&
      userInput.title.trim() !== "" &&
      userInput.possibleTime.trim() !== "" &&
      userInput.theme.trim() !== "" &&
      userInput.content.trim() !== ""
    ) {
      await instance.post("/form", userInput, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken") || ""}`,
        },
      });
      alert("신청이 완료되었습니다.");
      navigate("/");
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
                onClick={() => handleTagClick("STUDY")}
                selected={userInput.theme === "STUDY"}
              >
                학업
              </S.Tag>
              <S.Tag
                onClick={() => handleTagClick("DREAM")}
                selected={userInput.theme === "DREAM"}
              >
                진로
              </S.Tag>
              <S.Tag
                onClick={() => handleTagClick("FRIEND")}
                selected={userInput.theme === "FRIEND"}
              >
                친구
              </S.Tag>
              <S.Tag
                onClick={() => handleTagClick("FMAILLY")}
                selected={userInput.theme === "FMAILLY"}
              >
                가족
              </S.Tag>
              <S.Tag
                onClick={() => handleTagClick("ETC")}
                selected={userInput.theme === "ETC"}
              >
                기타
              </S.Tag>
            </S.Tags>
          </S.Category>
          <S.Time>
            <S.Title>상담 시간</S.Title>
            <S.Input
              type="datetime-local"
              name="possibleTime"
              value={userInput.possibleTime}
              onChange={handleInputChange}
            />
          </S.Time>
        </S.Wrapper>
        <S.Wrapper>
          <S.Title>고민 설명</S.Title>
          <S.TextArea
            name="content"
            value={userInput.content}
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
