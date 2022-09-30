import styled from "styled-components";
import MainSlider from "./MainSlider/MainSilder";
import MainLocal from "./MainLocal/MainLocal";
import MainPromotion from "./MainPromotion/MainPromition";
import MainFavoriteProduct from "./MainFavoriteProduct/MainFavoriteProduct";
import MainLatestProduct from "./MainLatestProduct/MainLatestProduct";

const MainBox = styled.main`
  width: 1920px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomePage = () => {
  return (
    <>
      <MainBox>
        <MainSlider></MainSlider>
        <MainLocal></MainLocal>
        <MainPromotion></MainPromotion>
        <MainFavoriteProduct></MainFavoriteProduct>
        <MainLatestProduct></MainLatestProduct>
        {/* 
        
        
        
        <MainReviewProduct></MainReviewProduct>
        <MainBottomEvent></MainBottomEvent>
        <MainBottomQA></MainBottomQA> */}
      </MainBox>
    </>
  );
};

export default HomePage;
