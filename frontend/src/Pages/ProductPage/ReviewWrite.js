import styled from "styled-components";
import { useState } from "react";
import { StyledButton } from "../../Theme/theme";

// 새로운 리뷰를 작성하는 요소들을 담은 박스
const ReviewWriteBox = styled.div`
  width: 1250px;
  height: 125px;
  display: flex;
  flex-direction: column;
  gap: 10px;

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

const ReviewWrite = () => {
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
    <ReviewWriteBox>
      <ValueBox>{starRating}</ValueBox>
      <div>
        <TextInput placeholder="리뷰를 입력해주세요"></TextInput>
        <StyledButton wd="125px" ht="40px" fs="2rem" fontFamily="SCD-6">
          작성
        </StyledButton>
      </div>
    </ReviewWriteBox>
  );
};

export default ReviewWrite;
