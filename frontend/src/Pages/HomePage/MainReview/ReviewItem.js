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
    border-radius: 10px;
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
      border-radius: 10px;
    }

    /* 텍스트 박스 */
    & > div {
      width: 90%;
      height: 45%;
      display: flex;
      flex-direction: column;
      /* 유저 아이디, 텍스트 */
      & > div {
        font-family: "SCD-4";
        font-size: 1.6rem;
        color: ${({ theme }) => theme.lightblack};
      }

      /* 유저 아이디 */
      & > div:nth-child(1) {
        padding-bottom: 20px;
      }

      /* 유저 텍스트 */
      & > div:nth-child(2) {
        height: 115px;
        width: 315px;
        text-overflow: ellipsis;
        overflow: hidden;
      }

      /* 상품 이름 */
      & > div:nth-child(3) {
        position: relative;
        font-family: "SCD-7";
        font-size: 2rem;
        padding-top: 25px;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;

        color: ${({ theme }) => theme.orange};
      }
    }
  }
`;

const ReviewItem = ({ data }) => {
  return (
    <ReviewItemBox>
      <Link to={`/product/detail/${data.product_id}`}>
        <img src={data.review_image} alt="이미지 없음"></img>
        <div>
          <div>{data.review_user}</div>
          <div>{data.review_text}</div>
          <div>{data.product_name}</div>
        </div>
      </Link>
    </ReviewItemBox>
  );
};
export default ReviewItem;
