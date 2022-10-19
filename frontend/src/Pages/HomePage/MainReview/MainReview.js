import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import ReviewItem from "./ReviewItem";

// 메인 홈페이지 하단 리뷰의 최상위 부모 컨테이너
const MainReviewBox = styled.div`
  padding-top: 200px;
  width: 1280px;
  height: 800px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

// 많은분들이 농담과 함께해요, 후기가 증명하는 못난이 맛집을 담은 텍스트 박스
const MainReviewTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  /* 많은 분들이... */
  & > div:nth-child(1) {
    font-size: 4.4rem;
    font-family: "YANGJIN";
    color: ${({ theme }) => theme.green};
  }

  /* 후기가 증명... */
  & > div:nth-child(2) {
    font-size: 2rem;
    font-family: "SCD-4";
    color: ${({ theme }) => theme.gray};
  }
`;

// 리뷰 아이템들을 담은 박스
const MainReviewItemBox = styled.div`
  width: 1280px;
  height: 654px;
  display: flex;
  justify-content: space-between;
`;

// 슬라이더 고려해서 박스를 하나더 만든 뒤 감쌈
const ItemSliderBox = styled(MainReviewItemBox)``;

const MainReview = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(`http://localhost:8080/review`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (data === undefined) {
    return null;
  }

  console.log(data);

  return (
    <MainReviewBox>
      <MainReviewTextBox>
        <div>많은 분들이 농담과 함께해요</div>
        <div>후기가 증명하는 못난이 맛집</div>
      </MainReviewTextBox>
      <MainReviewItemBox>
        <ItemSliderBox>
          {data.map((value, index) => {
            return <ReviewItem key={index} data={value}></ReviewItem>;
          })}
        </ItemSliderBox>
      </MainReviewItemBox>
    </MainReviewBox>
  );
};

export default MainReview;
