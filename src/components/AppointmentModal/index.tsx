import Logo from "../../assets/svgs/Logo";
import Plus from "../../assets/svgs/Plus";
import theme from "../../styles/theme/theme";
import Horizon from "../../styles/ui/Horizon";
import Text from "../../styles/ui/Text";
import * as S from "./style";

interface ModalProps {
  closeModal(): void;
}

const AppointmentModal = ({ closeModal }: ModalProps) => {
  return (
    <S.Container>
      <S.Top>
        <Logo />
        <Text fontType="$Body2">상담 신청하기</Text>
      </S.Top>
      <Horizon />
      <S.Contents>
        {/*title*/}
        <S.Wrapper>
          <Text fontType="$Body3">상담 타이틀</Text>
          <S.Input placeholder="상담 타이틀을 입력해주세요." maxLength={35} />
        </S.Wrapper>

        {/*contents*/}
        <S.Wrapper>
          <Text fontType="$Body3">상담 요청 내용</Text>
          <S.TextArea placeholder="상담하시려는 내용을 적어주세요." />
        </S.Wrapper>

        {/*time*/}
        <S.Wrapper>
          <Text fontType="$Body3">상담시간</Text>
          <S.TimeWrapper>
            {/*year*/}
            <S.TimeInput
              placeholder="YYYY"
              type="number"
              min={2024}
              max={2099}
            />
            <Text fontType="$H5" color={theme.grey[600]}>
              .
            </Text>

            {/*month*/}
            <S.TimeInput placeholder="MM" type="number" min={1} max={12} />
            <Text fontType="$H5" color={theme.grey[600]}>
              .
            </Text>

            {/*day*/}
            <S.TimeInput placeholder="DD" type="number" min={1} max={31} />
            <Text fontType="$H5" color={theme.grey[600]}>
              .
            </Text>

            {/*time*/}
            <S.TimeInput type="number" placeholder="HH:MM" />
            <S.AddTime>
              <Plus />
            </S.AddTime>
          </S.TimeWrapper>
          <S.TimeWrapper>
            <S.AddedTime>2024년11월17일14:30</S.AddedTime>
            <S.AddedTime>2024년11월17일14:30</S.AddedTime>
            <S.AddedTime>2024년11월17일14:30</S.AddedTime>
          </S.TimeWrapper>
        </S.Wrapper>
      </S.Contents>
      <S.Bottom>
        <Horizon />
        <S.BottomWrapper>
          <S.Cancle>취소</S.Cancle>
          <S.Button>신청하기</S.Button>
        </S.BottomWrapper>
      </S.Bottom>
    </S.Container>
  );
};

export default AppointmentModal;
