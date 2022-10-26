import styled from "styled-components";

const MainLogoBox = styled.div`
  position: relative;
  z-index: 3;
  `;
const MainLogoItem = styled.img`
`;

// 메인 로고
const MainLogo = () => {
  return (
    <MainLogoBox>
      <MainLogoItem
        src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmTLl31MH-IdU_HMOvUV7hP6Z1JkbRMqEqWmN13-lxB2OYH1tA-8EnqdSnfdEX3PEl_Zon_cCM4=w1920-h969"
        alt="이미지 없음"
      ></MainLogoItem>
    </MainLogoBox>
  );
};

export default MainLogo;
