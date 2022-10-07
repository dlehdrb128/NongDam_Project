import styled from "styled-components";
import LatestProductItem from "./LatestProductItem";
import { Theme } from "./../../../../../theme/theme";

// 방금 들어온 못난이들의 최상위 부모 컨테이너
const MainLatestProductBox = styled.div`
  width: 1920px;
  height: 545px;
  margin-top: 200px;
  background: linear-gradient(to top, white 61%, ${Theme.white} 52%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 아이템들을 담은 박스
const LatestProductBox = styled.div`
  position: relative;
  width: 1280px;
  height: 545px;
  display: flex;
  gap: 70px;

  /* 뒤에 초록 네모 박스 */
  & > div:nth-child(1) {
    & > div {
      position: relative;
      top: 30px;
      left: 10px;
      width: 298px;
      height: 339px;
      border: 3px solid ${Theme.green};
      border-radius: 10px;
    }

    /* 박스 위의 사진 */
    & > img {
      position: relative;
      bottom: 350px;
      left: 60px;
      width: 294px;
      height: 480px;
      padding-top: 65px;
      padding-right: 30px;
    }
  }

  /* 이미지와 LatestProductItemBox를 담은 박스 */
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 120px;
    /* 방금 들어온 못난이들 */
    & > img {
      padding-top: 10px;
      width: 477px;
      height: 121px;
    }
  }
`;

// 최근 들어온 상품들을 담은 박스
const LatestProductItemBox = styled.div`
  width: 900px;
  height: 296px;
  display: flex;
  gap: 50px;
`;

const MainLatestProduct = () => {
  let dummyData = [
    {
      product_id: "1",
      image: "/img/exam-1.png",
      local: "경남",
      name: "22년 수확 햇 사과 3kg...",
      price: 10400,
    },
    {
      product_id: "2",
      image: "/img/exam-2.png",
      local: "전북",
      name: "국내산 깐마늘 2kg...",
      price: 4500,
    },
    {
      product_id: "3",
      image: "/img/exam-3.png",
      local: "전남",
      name: "마늘팟 양파  3kg...",
      price: 6600,
    },
    {
      product_id: "4",
      image: "/img/exam-4.png",
      local: "충북",
      name: "청결 22년 햇 건고추 6kg",
      price: 80000,
    },
  ];

  return (
    <MainLatestProductBox>
      <LatestProductBox>
        <div>
          <div></div>
          <img src="./img/latest.png" alt="이미지 없음" />
        </div>
        <div>
          <img src="./img/latest-title.png" alt="이미지 없음"></img>
          <LatestProductItemBox>
            {dummyData.map((value, index) => {
              return (
                <LatestProductItem key={index} data={value}></LatestProductItem>
              );
            })}
          </LatestProductItemBox>
        </div>
      </LatestProductBox>
    </MainLatestProductBox>
  );
};

export default MainLatestProduct;
