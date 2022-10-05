import styled from "styled-components";
import MainFavoriteItem from "./MainFavoriteItem";

// 즐겨찾는 상품

const MainFavoriteProductBox = styled.div`
  width: 1280px;
  height: 531px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 29px;

  & > div:nth-child(1) {
    font-size: 3.2rem;
    font-family: "lotteHappyBold";
    color: rgba(128, 195, 66, 1);
  }

  & > div:nth-child(2) {
    font-family: "lotteHappyLight";
    font-size: 1.8rem;
    color: rgba(149, 149, 149, 1);
  }
`;

const MainFavoriteItemBox = styled.div`
  width: 1280px;
  height: 399px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 31px;
`;

const data = [
  {
    image: "/img/favorite-1.svg",
    local: "경북",
    name: "(9/19순차발송)[경북능금농협]안동 홍로사과 3kg...",
    price: "8,450원",
  },
  {
    image: "/img/favorite-2.svg",
    local: "강원",
    name: "향이 좋은 국내산 표고 흑화고 버섯 선물세트 250g내외...",
    price: "8,450원",
  },
  {
    image: "/img/favorite-3.svg",
    local: "전북",
    name: "서영암농협 학이 머문 유기농 쌀(일미) 4kg, 2021년산...",
    price: "8,450원",
  },
  {
    image: "/img/favorite-4.svg",
    local: "전남",
    name: "중전마마 나주 배 1호 7.5㎏(9-10과)...",
    price: "8,450원",
  },
];

const MainFavoriteProduct = () => {
  return (
    <MainFavoriteProductBox>
      <div>제일 많이 찾아요</div>
      <div>특히 요번주 제일 많이 구매한 상품이에요🥳</div>
      <MainFavoriteItemBox>
        {data.map((value, index) => {
          return <MainFavoriteItem key={index} data={value}></MainFavoriteItem>;
        })}
      </MainFavoriteItemBox>
    </MainFavoriteProductBox>
  );
};

export default MainFavoriteProduct;
