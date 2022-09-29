import styled from "styled-components";
import Theme from "./../../../../../theme/theme";

const MainEventMarketBox = styled.div`
  margin-top: 180px;
  width: 1920px;
  height: 948px;
  background: url("/img/mainEventMarketBg.png");
  display: flex;
  justify-content: center;
  align-items: center;
`;

const EventTextBox = styled.div`
  width: 735px;
  height: 521px;
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 20px;

  & > div:nth-child(2) {
    text-align: center;
    line-height: 35px;
    font-family: "SCD-4";
    font-size: 1.5rem;
    color: ${Theme.lightblack};
  }

  & > div:nth-child(3) {
    width: 248px;
    height: 50px;
    background-color: ${Theme.green};
    border-radius: 10px;
    font-family: "YANGJIN";
    font-size: 1.2rem;
    color: ${Theme.white};
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    margin-top: 20px;
    margin-bottom: 30px;

    &:hover {
      cursor: pointer;
      background-color: ${Theme.orange};
    }
  }

  & > div:nth-child(4) {
    position: relative;
    color: rgba(82, 82, 82, 1);
    font-family: "SCD-4";
    font-size: 1.5rem;

    & > span {
      position: relative;
      color: ${Theme.orange};
      font-family: "SCD-6";
      font-size: 3rem;

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
  return (
    <MainEventMarketBox>
      <EventTextBox>
        <img src="/img/mainEventTitle.png" alt="이미지 없음"></img>
        <div>
          기존의 못난이 상품보다 더 저렴한 먹거리!
          <br></br>
          실시간으로 만나는 농담만의
          <br></br>
          5일장으로 재래시장의 따뜻한 인심과 신선한 상품을 만나보세요!
        </div>

        <div>장보러 가기</div>
        <div>
          오늘은 <span>전라, </span>
          <span>충청</span>장날이유 ~
        </div>
      </EventTextBox>
    </MainEventMarketBox>
  );
};

export default MainEventMarket;
