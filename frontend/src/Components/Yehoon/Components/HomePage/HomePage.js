import styled from "styled-components";
import MainLatestProduct from "./MainLatestProduct/MainLatestProduct";
import MainLogo from "./MainLogo/MainLogo";
import MainArticle from "./MainArticle/MainArticle";

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
      </MainBox>
    </>
  );
};

export default HomePage;
