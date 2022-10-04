import styled from "styled-components";
import { Theme } from "./../../../../../theme/theme";
import { Link } from "react-router-dom";

const ReviewItemBox = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 20px;
  background-color: ${Theme.white};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  &:hover {
    font-weight: bold;
    cursor: pointer;
  }

  & a {
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    &:link {
      text-decoration: none;
      color: ${Theme.lightblack};
    }
    &:visited {
      text-decoration: none;
      color: ${Theme.lightblack};
    }
    &:active {
      text-decoration: none;
      color: ${Theme.lightblack};
    }

    &:hover {
      cursor: pointer;
      color: ${Theme.green};
    }

    & > img {
      width: inherit;
      height: 250px;
    }

    & > div {
      width: 90%;
      height: 45%;
      display: flex;
      flex-direction: column;
      gap: 30px;

      & > div {
        font-family: "SCD-4";
        font-size: 1.6rem;
        color: ${Theme.lightblack};
        word-break: keep-all;
      }

      & > div:nth-child(3) {
        position: relative;
        font-family: "SCD-7";
        font-size: 1.7rem;
        color: ${Theme.orange};
      }
    }
  }
`;

const ReviewItem = ({ data }) => {
  return (
    <ReviewItemBox>
      <Link to={`/product/${data.product_id}`}>
        <img src={data.image} alt="이미지 없음"></img>
        <div>
          <div>{data.userId}</div>
          <div>{data.reviewText}</div>
          <div>{data.productName}</div>
        </div>
      </Link>
    </ReviewItemBox>
  );
};
export default ReviewItem;
