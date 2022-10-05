import styled from "styled-components";
import ProductReview from "./ProductReview";
import Theme from "./../../../../theme/theme";
import ReviewWrite from "./ReviewWrite";

const ProductReviewBox = styled.div`
  width: 1280px;
  display: flex;
  flex-direction: column;
  padding-top: 100px;

  & > div:nth-child(1) {
    font-family: "SCD-7";
    font-size: 2rem;
    color: ${Theme.green};
  }
  & > div:nth-child(2) {
    font-family: "SCD-6";
    font-size: 3rem;
    color: ${Theme.lightblack};

    & > span {
      font-size: 1.5rem;
    }
  }
`;

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

const ProductReviewForm = ({ data }) => {
  const getAverage = () => {
    if (data.review !== undefined) {
      let totalValue = 0;

      data.review.forEach((value) => {
        totalValue += value.value;
      });

      totalValue = totalValue / data.review.length;

      return totalValue.toFixed(2);
    }
  };

  let average = getAverage();
  let reviewItem;

  if (data.review !== undefined) {
    reviewItem = data.review.map((value, index) => {
      return <ProductReview data={value} key={index}></ProductReview>;
    });
  }

  return (
    <ProductReviewBox>
      <div>상품 후기</div>
      <div>
        {average >= 0 ? average : 0} / 5
        <span>
          ({data.review !== undefined ? data.review.length : 0}개의 후기)
        </span>
      </div>
      <ReviewBox>
        {reviewItem.length >= 1 ? reviewItem : <h1>리뷰가 없습니다</h1>}
      </ReviewBox>
      <ReviewWrite></ReviewWrite>
    </ProductReviewBox>
  );
};

export default ProductReviewForm;
