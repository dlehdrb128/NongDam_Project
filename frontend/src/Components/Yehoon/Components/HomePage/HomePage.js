import styled from "styled-components";
import MainSlider from "./MainSilder";

const MainBox = styled.main`
  width: 1920px;
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  return (
    <>
      <MainBox>
        <MainSlider></MainSlider>
        {/* <MainLocal></MainLocal>
        <MainPromotion></MainPromotion>
        <MainFavoriteProduct></MainFavoriteProduct>
        <MainLatestProduct></MainLatestProduct>
        <MainReviewProduct></MainReviewProduct>
        <MainBottomEvent></MainBottomEvent>
        <MainBottomQA></MainBottomQA> */}
      </MainBox>
    </>
  );
};

export default HomePage;
