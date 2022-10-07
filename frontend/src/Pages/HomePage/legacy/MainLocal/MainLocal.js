import styled from "styled-components";

// 지역별 상품 알아보기 (지도)

const MainLocalBox = styled.div`
  width: 1920px;
  height: 990px;
  margin-top: 160px;
  display: flex;
  justify-content: center;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 1) 74%,
      rgba(255, 255, 255, 0) 120%
    ),
    url("img/localBottom.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
`;

const LocalItemBox = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LocalItemTop = styled.div`
  height: 95px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  & > div:nth-child(1) {
    font-family: "lotteHappyBold";
    color: rgba(128, 195, 66, 1);
    font-size: 3rem;
  }

  & > div:nth-child(2) {
    font-family: "NanumGothic-Regular";
    color: rgba(149, 149, 149, 1);
    font-size: 1.8rem;
  }
`;

const LocalItemMiddle = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  gap: 186px;
`;

const LocalMapBox = styled.div`
  width: 468px;
  height: 770px;
  background: url("/img/localMap.svg");
`;

const LocalMap = styled.div`
  position: relative;
  width: 468px;
  height: 770px;

  & > div {
    cursor: pointer;
    position: absolute;
    font-size: 1.7rem;
    font-family: "NanumGothic-ExtraBold";
    color: rgba(255, 255, 255, 1);

    &:hover {
      &::before {
        content: url("/img/localSymbol.svg");
        position: absolute;
        bottom: 20px;
        left: 5px;
      }
    }
  }

  & > div:nth-child(1) {
    right: 130px;
    top: 140px;
  }

  & > div:nth-child(2) {
    right: 285px;
    top: 180px;
  }

  & > div:nth-child(3) {
    right: 90px;
    top: 370px;
  }

  & > div:nth-child(4) {
    right: 210px;
    top: 280px;
  }

  & > div:nth-child(5) {
    right: 325px;
    top: 340px;
  }

  & > div:nth-child(6) {
    right: 130px;
    top: 530px;
  }
  & > div:nth-child(7) {
    right: 310px;
    top: 470px;
  }

  & > div:nth-child(8) {
    right: 340px;
    top: 590px;
  }

  & > div:nth-child(9) {
    right: 340px;
    top: 730px;
  }
`;

const LocalTitleBox = styled.div`
  width: 413px;
  height: 401px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  align-self: center;

  & > div:nth-child(1) {
    font-family: "lotteHappyBold";
    color: rgba(82, 82, 82, 1);
    font-size: 6.4rem;
    margin-bottom: 96px;
  }

  & > div:nth-child(2) {
    width: 100%;
    height: 80%;
    text-align: end;
    font-family: "NanumGothic-Regular";
    color: rgba(149, 149, 149, 1);
    font-size: 1.8rem;
    margin-bottom: 42px;
    line-height: 30px;
  }

  & > div:nth-child(3) {
    font-family: "NanumGothic-Bold";
    margin-right: 70px;
    color: rgba(243, 152, 0, 1);
    font-size: 1.6rem;
    cursor: pointer;
  }
`;

const MainLocal = () => {
  return (
    <MainLocalBox>
      <LocalItemBox>
        <LocalItemTop>
          <div>지역별 둘러보기</div>
          <div>
            지역 고유의 환경과 특성에 따라 탄생한 지역 특산물을 만나보세요!🌿
          </div>
        </LocalItemTop>
        <LocalItemMiddle>
          <LocalMapBox>
            <LocalMap>
              <div>강원도</div>
              <div>경기도</div>
              <div>경상북도</div>
              <div>충청북도</div>
              <div>충청남도</div>
              <div>경상남도</div>
              <div>전라북도</div>
              <div>전라남도</div>
              <div>제주도</div>
            </LocalMap>
          </LocalMapBox>
          <LocalTitleBox>
            <div>충청북도</div>
            <div>
              내륙에 위치한 충청북도는 <br></br>쌀, 보리 등과 같은 곡류, 고구마,
              옥수수와 같은 채소, 그리고 목화와 모시가 많이 생산되는 지역입니다.
              <br></br>질 좋은 산채와 버섯들도 반겨주는 충북의<br></br> 유명한
              특산물로는 영동 복숭아, 학산 포도, 음성 수박, 괴산 옥수수, 보은
              대추 등이 있습니다.
            </div>
            <div>더 둘러보러 가기</div>
            <img src="/img/localArrow.svg" alt="이미지 없음"></img>
          </LocalTitleBox>
        </LocalItemMiddle>
      </LocalItemBox>
    </MainLocalBox>
  );
};

export default MainLocal;
