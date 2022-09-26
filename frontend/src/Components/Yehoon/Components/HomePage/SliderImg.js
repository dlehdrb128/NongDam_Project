import styled from "styled-components";

const SliderImgs = styled.img`
  width: 1920px;
  height: 494px;
`;

const ImgBox = styled.div`
  width: 1920px;
  height: 494px;
`;

const SliderImg = ({ data }) => {
  return (
    <ImgBox>
      <SliderImgs src={data.image} alt="이미지 없음"></SliderImgs>
    </ImgBox>
  );
};

export default SliderImg;
