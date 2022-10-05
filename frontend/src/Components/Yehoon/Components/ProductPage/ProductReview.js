import styled from "styled-components";
import Theme from "./../../../../theme/theme";

const ReviewItemBox = styled.div`
  width: 1280px;
  height: 310px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 10px;

  & > div:nth-child(2) {
    width: 95%;
    height: 95%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    gap: 20px;

    & > div:nth-child(1) {
      font-family: "SCD-3";
      font-size: 1.8rem;
      color: ${Theme.lightblack};
    }

    & > div:nth-child(2) {
      display: flex;
      gap: 30px;

      & > img {
        width: 188px;
        height: 152px;
      }
    }
  }
`;

const InforMation = styled.div`
  width: 1280px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Theme.white};
  color: ${Theme.lightblack};
  border-radius: 10px;

  & > div:nth-child(1) {
    font-family: "SCD-6";
    font-size: 2rem;
    margin-left: 20px;
  }

  & > div:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    gap: 10px;

    & > div:nth-child(1) {
      font-family: "SCD-6";
      padding-top: 3px;
      display: flex;
      align-items: center;
      font-size: 1rem;
    }

    & > div:nth-child(2) {
      font-family: "SCD-6";
      font-size: 1.5rem;
    }
  }
`;

const ProductReview = ({ data }) => {
  const reviewImage = data.image.map((value, index) => {
    return <img src={value} key={index} alt="이미지 없음"></img>;
  });

  return (
    <ReviewItemBox>
      <InforMation>
        <div>{data.user}</div>
        <div>
          <div>
            <img src="/img/ProductDetail/star-fill.png" alt="이미지 없음"></img>
            {data.value} / 5
          </div>
          <div>{data.date}</div>
        </div>
      </InforMation>
      <div>
        <div>{data.text}</div>
        <div>{reviewImage}</div>
      </div>
    </ReviewItemBox>
  );
};

export default ProductReview;
