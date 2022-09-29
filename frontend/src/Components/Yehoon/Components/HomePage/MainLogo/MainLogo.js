import styled from "styled-components";

const MainLogoBox = styled.div``;
const MainLogoItem = styled.img``;

const MainLogo = () => {
  return (
    <MainLogoBox>
      <MainLogoItem src="/img/main-banner.png" alt="이미지 없음"></MainLogoItem>
    </MainLogoBox>
  );
};

export default MainLogo;
