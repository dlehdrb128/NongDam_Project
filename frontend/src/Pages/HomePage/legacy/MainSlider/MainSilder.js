import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import EventNavItem from "./EventNavItem";
import SliderImg from "./SliderImg";

// 메인 슬라이더 (useInterval CustomHooks 사용)

const SliderBox = styled.div`
  width: 1920px;
  height: 570px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const SliderImgBox = styled.div``;

// const SliderLoadingBar = styled.progress`
//   width: 1920px;
//   height: 10px;
//   margin-bottom: 11px;
//   appearance: none;
//   border-top: 1px solid #c0c0c0;
//   border-bottom: 1px solid #c0c0c0;

//   &::-webkit-progress-bar {
//     background-color: white;
//   }

//   &::-webkit-progress-value {
//     background-color: #80c342;
//   }
// `;

// const SliderLoading = styled.div`
//   width: ${(props) => props.width};
//   height: 5px;
//   background-color: #80c342;
//   transition: 0.1s;
// `;

const EventNavBox = styled.div`
  display: flex;
  justify-content: center;
`;

const EventNavItemBox = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 120px;
  color: #c0c0c0;
  font-family: "NanumGothic-Bold";
  font-size: 1.8rem;

  & > div:hover {
    cursor: pointer;
    color: #80c342;
  }
`;

const ImgItemBox = styled.div`
  display: flex;
  width: 100vw;
  flex-shrink: 0;
  transition: ease 1s;
`;

const MainSlider = () => {
  const Slider = useRef();
  const [index, setIndex] = useState(1);
  const [delay, setDelay] = useState(5000);
  // const [slider, setSlider] = useState(1);
  // const [delay2, setDelay2] = useState(50);

  const data = [
    { image: "/img/MainSliderImg.svg", text: "농담 오픈 이벤트" },
    {
      image: "/img/picture(1).jpg",
      text: "지역 특산품 이벤트",
    },
    {
      image: "/img/picture(2).jpg",
      text: "소비자 리뷰 이벤트",
    },
    {
      image: "/img/picture(3).jpg",
      text: "니가 가라 하와이",
    },
    {
      image: "/img/picture(4).jpeg",
      text: "배달의민족 주문",
    },
  ];

  const useInterval = (callback, delay) => {
    const savedCallback = useRef(); // 최근에 들어온 callback을 저장할 ref를 하나 만든다.
    useEffect(() => {
      savedCallback.current = callback; // callback이 바뀔 때마다 ref를 업데이트 해준다.
    }, [callback]);

    useEffect(() => {
      const tick = () => {
        savedCallback.current(); // tick이 실행되면 callback 함수를 실행시킨다.
      };
      if (delay !== null) {
        // 만약 delay가 null이 아니라면
        let id = setInterval(tick, delay); // delay에 맞추어 interval을 새로 실행시킨다.
        return () => clearInterval(id); // unmount될 때 clearInterval을 해준다.
      }
    }, [delay]); // delay가 바뀔 때마다 새로 실행된다.
  };

  const moveSlider = (currentIndex) => {
    if (currentIndex >= data.length - 1) {
      setIndex(-1);
    }
    setIndex((index) => index + 1);
    Slider.current.style.transform = `translateX(${currentIndex * -1920}px)`;
  };

  // const sliderLoading = () => {
  //   setSlider(slider + 1);
  //   if (slider >= 100) {
  //     setSlider(1);
  //   }
  // };

  useInterval(() => {
    moveSlider(index);
  }, delay);

  const resetInterval = (number, index) => {
    // setSlider(index);

    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    Slider.current.style.transform = `translateX(${index * -1920}px)`;
    setDelay(number + 1);
  };

  return (
    <>
      <SliderBox>
        <SliderImgBox>
          <ImgItemBox ref={Slider}>
            {data.map((value, index) => (
              <SliderImg key={index} data={value}></SliderImg>
            ))}
          </ImgItemBox>
          {/* 프로그래스바 보류 */}
          {/* <SliderLoadingBar value={slider} max={"100"}></SliderLoadingBar> */}
        </SliderImgBox>
        <EventNavBox>
          <EventNavItemBox>
            {data.map((value, index) => (
              <EventNavItem
                key={index}
                number={index}
                data={value}
                resetInterval={resetInterval}
              ></EventNavItem>
            ))}
          </EventNavItemBox>
        </EventNavBox>
      </SliderBox>
    </>
  );
};

export default MainSlider;
