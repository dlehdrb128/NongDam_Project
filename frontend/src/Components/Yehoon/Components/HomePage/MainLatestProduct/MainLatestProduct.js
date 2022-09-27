import styled from "styled-components";

const MainLatestProductBox = styled.div`
  width: 1920px;
  height: 545px;
  margin-top: 200px;
  background: linear-gradient(to top, white 61%, rgba(242, 242, 242, 1) 52%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LatestProductBox = styled.div`
  position: relative;
  width: 1280px;
  height: 545px;
  display: flex;
  gap: 78px;

  & > div:nth-child(1) {
    & > div {
      position: relative;
      top: 30px;
      left: 10px;
      width: 298px;
      height: 339px;
      border: 3px solid rgba(128, 195, 66, 1);
      border-radius: 10px;
    }
    & > img {
      position: relative;
      bottom: 350px;
      left: 60px;
      width: 294px;
      height: 480px;
      padding-top: 65px;
    }
  }
`;

const MainLatestProduct = () => {
  return (
    <MainLatestProductBox>
      <LatestProductBox>
        <div>
          <div></div>
          <img src="./img/latest.svg" alt="이미지 없음" />
        </div>
        <div>
          <div></div>
          <div></div>
        </div>
      </LatestProductBox>
    </MainLatestProductBox>
  );
};

export default MainLatestProduct;
