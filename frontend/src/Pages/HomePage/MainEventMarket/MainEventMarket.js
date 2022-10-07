import styled from "styled-components";
import { StyledButton } from "../../../Theme/theme";

// 요소 전체를 담은 박스
const MainEventMarketBox = styled.div`
  margin-top: 180px;
  width: 1920px;
  height: 948px;
  background: url("/img/mainEventMarketBg.png");
  background-repeat: no-repeat;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 문구와 버튼 등 아이템들을 담은 박스
const EventTextBox = styled.div`
  width: 735px;
  height: 650px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  /* 기존의 못난이 상품 보다... */
  & > div:nth-child(2) {
    text-align: center;
    line-height: 35px;
    font-family: "SCD-4";
    font-size: 2.4rem;
    color: ${({ theme }) => theme.lightblack};
  }

  /* 오늘은, 장날이유~ */
  & > div:nth-child(4) {
    position: relative;
    color: rgba(82, 82, 82, 1);
    font-family: "SCD-4";
    font-size: 2.4rem;
    margin-top: 40px;

    /* 전라, 충청 */
    & > span {
      position: relative;
      color: ${({ theme }) => theme.orange};
      font-family: "SCD-6";
      font-size: 4.8rem;

      /* 체크 표시 */
      &::before {
        position: absolute;
        left: 35px;
        bottom: 50px;

        content: url("/img/check.svg");
      }
    }
  }
`;

const MainEventMarket = () => {
  let localData = ["전라", "충청", "경기", "강원", "경상"];

  return (
    <MainEventMarketBox>
      <EventTextBox>
        {/* 양손이 편한 시장 구경해볼텨? */}
        <img src="/img/mainEventTitle.png" alt="이미지 없음"></img>
        <div>
          기존의 못난이 상품보다 더 저렴한 먹거리!
          <br></br>
          실시간으로 만나는 농담만의
          <br></br>
          5일장으로 재래시장의 따뜻한 인심과 신선한 상품을 만나보세요!
        </div>

        <StyledButton fs={"2rem"} wd={"248px"} ht={"50px"}>
          장보러 가기
        </StyledButton>
        <div>
          오늘은 <span>{localData[0]}, </span>
          <span>{localData[1]}</span>장날이유 ~
        </div>
      </EventTextBox>
    </MainEventMarketBox>
  );
};

export default MainEventMarket;
