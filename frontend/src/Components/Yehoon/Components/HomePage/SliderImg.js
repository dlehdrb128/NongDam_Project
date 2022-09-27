import styled from "styled-components";

const SliderImgs = styled.img``;

const ImgBox = styled.div``;

const SliderImg = ({ data }) => {
  return (
    <ImgBox>
      <SliderImgs src={data.image} alt="이미지 없음"></SliderImgs>
    </ImgBox>
  );
};

export default SliderImg;
