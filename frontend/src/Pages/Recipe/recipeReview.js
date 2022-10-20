import styled from "styled-components";
import { useState } from "react";
import { StyledButton } from "../../Theme/theme";
const ReviewParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1265px;
  height: 1500px;
  & > div:nth-child(1) {
    width: inherit;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 50px;
    & > div:nth-child(1) {
      & > h2 {
        font-size: 3rem;
        font-family: YANGJIN;
        color: ${({ theme }) => theme.lightblack};
        margin-bottom: 50px;
      }
      & > p {
        font-size: 2rem;
        font-family: SCD-5;
        color: ${({ theme }) => theme.lightblack};
      }
    }
    & > img:nth-child(2) {
      width: 500px;
      height: 500px;
      border-radius: 20px;
    }
  }
  & > div:nth-child(2) {
    width: 1265px;
    margin-bottom: 50px;
    & > a {
      font-size: 2rem;
      font-family: SCD-5;
      color: ${({ theme }) => theme.lightblack};
    }
  }
  & > div:nth-child(3) {
    width: 1265px;
    font-size: 1.5rem;
    font-family: SCD-5;
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 50px;
  }
  & > div:nth-child(4) {
    width: 1265px;
    & > img {
      width: 200px;
      height: 200px;
      border-radius: 10px;
      margin-right: 20px;
    }
  }
`;

// 배낌--------------------------

// 새로운 리뷰를 작성하는 요소들을 담은 박스
const ReviewWriteBox = styled.div`
  width: 1280px;
  height: 125px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  margin-top: 100px;

  & > div:nth-child(2) {
    display: flex;
    gap: 100px;
    align-items: center;
  }
`;

// 별점 설정 박스
const ValueBox = styled.div`
  width: 125px;
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
`;

// 리뷰 작성 Input 속성
let TextInput = styled.input`
  width: 985px;
  height: 80px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.gray};
  color: ${({ theme }) => theme.lightblack};
  font-size: 1.5rem;
  font-family: "SCD-3";
  padding-left: 10px;
`;

const RecipeReview = () => {
  const [hovered, setHovered] = useState(null);
  const [clicked, setClicked] = useState(null);

  let value = [1, 2, 3, 4, 5];

  let starRating = value.map((el) => {
    return (
      <img
        src={
          hovered >= el || clicked >= el
            ? "http://localhost:8080/productDetail/star-fill.png"
            : "http://localhost:8080/productDetail/star-outline.png"
        }
        key={el}
        onMouseEnter={() => setHovered(el)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setClicked(el)}
        alt="이미지 없음"
      />
    );
  });
  return (
    <ReviewParent>
      <div>
        <div>
          <h2>근수의 달콤한 딸기 케이크</h2>
          <p>
            저번에 딸기케이크 먹어보고 케이크는 무조건
            <br /> 여기서 먹어야겠다 라고 생각했는데 역시나...
          </p>
        </div>
        <img
          src="http://localhost:8080/recipe/%ED%8F%AC%EB%A9%94%EB%9D%BC%EB%8B%88%EC%95%88.jpg"
          alt="감자전"
        ></img>
      </div>
      <div>
        <a href="#">#딸기</a>
        &nbsp;
        <a href="#">#케이크</a>
        &nbsp;
        <a href="#">#근수</a>
      </div>
      <div>근수를 으깨는 것보단 썰어서 부침가루에 섞는게 더 맛있어요.</div>
      <div>
        <img
          src="http://localhost:8080/recipe/%ED%8F%AC%EB%A9%94%EB%9D%BC%EB%8B%88%EC%95%88.jpg"
          alt="감자전"
        ></img>
        <img
          src="http://localhost:8080/recipe/%ED%8F%AC%EB%A9%94%EB%9D%BC%EB%8B%88%EC%95%88.jpg"
          alt="감자전"
        ></img>
        <img
          src="http://localhost:8080/recipe/%ED%8F%AC%EB%A9%94%EB%9D%BC%EB%8B%88%EC%95%88.jpg"
          alt="감자전"
        ></img>
        <img
          src="http://localhost:8080/recipe/%ED%8F%AC%EB%A9%94%EB%9D%BC%EB%8B%88%EC%95%88.jpg"
          alt="감자전"
        ></img>
      </div>
      <ReviewWriteBox>
        <ValueBox>{starRating}</ValueBox>
        <div>
          <TextInput placeholder="리뷰를 입력해주세요"></TextInput>
          <StyledButton wd="125px" ht="40px" fs="2rem" fontFamily="SCD-6">
            작성
          </StyledButton>
        </div>
      </ReviewWriteBox>
    </ReviewParent>
  );
};
export default RecipeReview;
