import styled from "styled-components";
import { Link } from "react-router-dom";

// 리뷰 아이템을 담은 박스
const ReviewItemBox = styled.div`
  width: 350px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  gap: 20px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  /* 마우스 오버시 글씨 강조 */
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }

  /* Link 속성 부여 */
  & a {
    width: inherit;
    height: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    &:link {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }
    &:visited {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }
    &:active {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }

    /* 이미지 규격 설정 */
    & > img {
      width: inherit;
      height: 250px;
    }

    /* 텍스트 박스 */
    & > div {
      width: 90%;
      height: 45%;
      display: flex;
      flex-direction: column;
      gap: 30px;

      /* 유저 아이디, 텍스트 */
      & > div {
        font-family: "SCD-4";
        font-size: 1.6rem;
        color: ${({ theme }) => theme.lightblack};
        word-break: keep-all;
      }

      /* 상품 이름 */
      & > div:nth-child(3) {
        position: relative;
        font-family: "SCD-7";
        font-size: 1.7rem;
        color: ${({ theme }) => theme.orange};
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
