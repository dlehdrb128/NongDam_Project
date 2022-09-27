import styled from "styled-components";
import MainFavoriteItem from "./MainFavoriteItem";

const MainFavoriteProductBox = styled.div`
  width: 1280px;
  height: 531px;
  margin-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 11px;

  & > div:nth-child(1) {
    font-size: 2rem;
    font-family: "lotteHappyBold";
    color: rgba(128, 195, 66, 1);
  }

  & > div:nth-child(2) {
    font-family: "lotteHappyLight";
    font-size: 1.15rem;
    color: rgba(149, 149, 149, 1);
  }
`;

const MainFavoriteItemBox = styled.div`
  width: 1280px;
  height: 399px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainFavoriteProduct = () => {
  return (
    <MainFavoriteProductBox>
      <div>제일 많이 찾아요</div>
      <div>특히 요번주 제일 많이 구매한 상품이에요🥳</div>
      <MainFavoriteItemBox>
        <MainFavoriteItem></MainFavoriteItem>
      </MainFavoriteItemBox>
    </MainFavoriteProductBox>
  );
};

export default MainFavoriteProduct;
