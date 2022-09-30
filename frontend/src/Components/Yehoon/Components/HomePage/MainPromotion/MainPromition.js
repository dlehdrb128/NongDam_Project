import styled from "styled-components";

const MainPromotionBox = styled.div`
  width: 1280px;
  height: 326px;
  margin-top: 200px;
  display: flex;
  justify-content: center;
  gap: 103px;
`;

const PromotionImg = styled.img`
  width: 547px;
  height: 326px;
  cursor: pointer;
`;

const PromotionTitle = styled.div`
  width: 626px;
  height: 326px;
  display: flex;
  flex-direction: column;
  gap: 50px;

  & > hr {
    width: 100%;
    border: 2px solid rgba(128, 195, 66, 1);
    background-color: rgba(128, 195, 66, 1);
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
  }

  & > div:nth-child(2) {
    font-size: 2rem;
    font-family: "NanumGothic-Regular";
    color: rgba(128, 195, 66, 1);
    padding-top: 45px;

    & > span {
      font-family: "NanumGothic-ExtraBold";
    }
  }

  & > div:nth-child(3) {
    font-size: 0.95rem;
    font-family: "NanumGothic-Regular";
    color: rgba(149, 149, 149, 1);
  }

  & > button {
    width: 149px;
    height: 37px;
    background-color: rgba(128, 195, 66, 1);
    border: 0px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.95rem;
    font-family: "NanumGothic-Bold";
    color: rgba(255, 255, 255, 1);

    &:hover {
      color: rgba(82, 82, 82, 1);
      background-color: rgba(243, 152, 0, 1);
      cursor: pointer;
    }
  }
`;

const MainPromotion = () => {
  return (
    <MainPromotionBox>
      <PromotionImg src="/img/promotionImg.svg"></PromotionImg>
      <PromotionTitle>
        <hr></hr>
        <div>
          아삭아삭 <span>달콤한 보은 사과 🍎</span>
        </div>
        <div>
          정상 외모를 가진 과일에 비해 가격도 훨씬 저렴하고 농가 상생과 환경에도
          도움이 됩니다
        </div>
        <button>구경하러 가기</button>
      </PromotionTitle>
    </MainPromotionBox>
  );
};

export default MainPromotion;
