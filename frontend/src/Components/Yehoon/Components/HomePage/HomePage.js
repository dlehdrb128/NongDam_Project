import styled from "styled-components";
import MainLatestProduct from "./MainLatestProduct/MainLatestProduct";
import MainLogo from "./MainLogo/MainLogo";
import MainArticle from "./MainArticle/MainArticle";
import MainEventMarket from "./MainEventMarket/MainEventMarket";
import MainReview from "./MainReview/MainReview";
import Remocon from "../../../SangHee/Components/Remocon";

// 홈페이지
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
        <MainLogo></MainLogo>
        <MainArticle></MainArticle>
        <MainLatestProduct></MainLatestProduct>
        <MainEventMarket></MainEventMarket>
        <MainReview></MainReview>
        <Remocon></Remocon>
      </MainBox>
    </>
  );
};

export default HomePage;
