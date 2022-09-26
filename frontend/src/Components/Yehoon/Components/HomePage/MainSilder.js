import styled from "styled-components";

const SliderBox = styled.div`
  width: 1920px;
  height: 570px;
  display: flex;
  flex-direction: column;
`;

const SliderImgBox = styled.div``;

const SliderImg = styled.img`
  width: 1920px;
`;

const SliderLoading = styled.div``;

const EventNavBox = styled.div`
  display: flex;
  justify-content: center;
`;

const EventNavItemBox = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 100px;
  color: #c0c0c0;
  font-family: "NanumGothic-Bold";
  font-size: 1.1rem;

  & > div:hover {
    cursor: pointer;
    color: #80c342;
  }
`;

const EventNavItem = styled.div``;

const MainSlider = () => {
  return (
    <>
      <SliderBox>
        <SliderImgBox>
          <SliderImg src="/img/MainSliderImg.svg" alt="이미지 없음"></SliderImg>
          <SliderLoading></SliderLoading>
        </SliderImgBox>
        <EventNavBox>
          <EventNavItemBox>
            <EventNavItem>농담 오픈 이벤트</EventNavItem>
            <EventNavItem>농담 클로즈 이벤트</EventNavItem>
            <EventNavItem>소비자 리뷰 이벤트</EventNavItem>
            <EventNavItem>소비자 추첨 이벤트</EventNavItem>
            <EventNavItem>인터넷 오일장</EventNavItem>
          </EventNavItemBox>
        </EventNavBox>
      </SliderBox>
    </>
  );
};

export default MainSlider;
