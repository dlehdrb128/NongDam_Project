import styled from "styled-components";
import ProductReview from "./ProductReview";
import ReviewWrite from "./ReviewWrite";
import { forwardRef } from "react";

// 상품 리뷰의 최상위 부모 컨테이너
const ProductReviewBox = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  padding-top: 100px;

  /* 상품 후기 */
  & > div:nth-child(1) {
    font-family: "SCD-7";
    font-size: 2rem;
    color: ${({ theme }) => theme.green};
  }

  /* 별점 */
  & > div:nth-child(2) {
    font-family: "SCD-6";
    font-size: 3rem;
    color: ${({ theme }) => theme.lightblack};

    /* (??개의 후기) */
    & > span {
      font-size: 1.5rem;
    }
  }
`;

// 리뷰들을 담은 박스
const ReviewBox = styled.div`
  width: 1280px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > h1 {
    font-family: "SCD-7";
    font-size: 4rem;
    margin: 50px auto;
  }
`;

const ProductReviewForm = forwardRef(({ data }, ref) => {
  const getAverage = () => {
    if (data !== undefined) {
      let totalValue = 0;

      data.forEach((value) => {
        totalValue += value.review_value;
      });

      totalValue = totalValue / data.length;

      return totalValue.toFixed(2);
    }
  };

  let average = getAverage();
  let reviewItem;

  if (data !== undefined) {
    reviewItem = data.map((value, index) => {
      return <ProductReview data={value} key={index}></ProductReview>;
    });
  }

  return (
    <ProductReviewBox ref={ref}>
      <div>상품 후기</div>
      <div>
        {average >= 0 ? average : 0} / 5
        <span>({data !== undefined ? data.length : 0}개의 후기)</span>
      </div>
      <ReviewBox>
        {reviewItem.length >= 1 ? reviewItem : <h1>리뷰가 없습니다</h1>}
      </ReviewBox>
      <ReviewWrite></ReviewWrite>
    </ProductReviewBox>
  );
});

export default ProductReviewForm;
