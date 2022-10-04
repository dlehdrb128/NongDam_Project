import styled from "styled-components";
import { useState } from "react";
import Theme from "./../../../../theme/theme";
import { StyledButton } from "../../../../theme/theme";

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

const ValueBox = styled.div`
  width: 125px;
  display: flex;
  justify-content: space-between;
  &:hover {
    cursor: pointer;
  }
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
            ? "/img/ProductDetail/star-fill.png"
            : "/img/ProductDetail/star-outline.png"
        }
        key={el}
        onMouseEnter={() => setHovered(el)}
        onMouseLeave={() => setHovered(null)}
        onClick={() => setClicked(el)}
        alt="이미지 없음"
      />
    );
  });

  let TextInput = styled.input`
    width: 985px;
    height: 80px;
    border-radius: 10px;
    border: 1px solid ${Theme.gray};
    color: ${Theme.lightblack};
    font-size: 1.5rem;
    font-family: "SCD-3";
    padding-left: 10px;
  `;

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
