import styled from "styled-components";

const MainBox = styled.main`
  width: 100%;
  background-color: antiquewhite;
  display: flex;
  justify-content: center;
`;

const HomePage = () => {
  return (
    <>
      <MainBox>
        <h1>홈페이지</h1>
      </MainBox>
    </>
  );
};

export default HomePage;
