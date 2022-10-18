import styled from "styled-components";
import { Link } from "react-router-dom";

// 최근에 들어온 상품 아이템 박스
const LatestProductItemBox = styled.div`
  width: 180px;
  height: 296px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  /* 마우스 오버시 폰트 강조 */
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }

  /* Link 속성 초기화 */
  & a {
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
      width: 163px;
      height: 168px;
      border-radius: 10px;
    }

    /* 지역 글꼴 */
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        font-family: "SCD-6";
        font-size: 1.7rem;
        color: ${({ theme }) => theme.green};
      }

      /* 제품명 글꼴 */
      & > div:nth-child(2) {
        font-family: "SCD-3";
        font-size: 1.6rem;
        color: ${({ theme }) => theme.lightblack};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    /* 가격 글꼴 */
    & > div:nth-child(3) {
      font-family: "SCD-7";
      font-size: 1.9rem;
      color: ${({ theme }) => theme.lightblack};
    }
  }
`;

const LatestProductItem = ({ data }) => {
  return (
    <LatestProductItemBox>
      <Link to={`/product/detail/${data.product_key}`}>
        <img
          src={`http://localhost:8080/product/${data.product_image}`}
          alt="이미지 없음"
        ></img>
        <div>
          <div>[{data.product_local}]</div>
          <div>{data.product_name}</div>
        </div>
        <div>{data.product_price.toLocaleString()}원</div>
      </Link>
    </LatestProductItemBox>
  );
};

export default LatestProductItem;
