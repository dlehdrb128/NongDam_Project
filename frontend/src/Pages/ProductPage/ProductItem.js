import { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

// 상품 검색 페이지의 상품을 담은 박스
const ProductItemBox = styled.div`
  & > *:hover {
    cursor: pointer;
    font-weight: bold;
  }

  /* Link 속성 설정 */
  & > a:link {
    text-decoration: none;
    color: ${({ theme }) => theme.lightblack};
  }
  & > a:visited {
    text-decoration: none;
    color: ${({ theme }) => theme.lightblack};
  }
  & > a:active {
    text-decoration: none;
    color: ${({ theme }) => theme.lightblack};
  }

  & > a:nth-child(1) {
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    /* 이미지 규격 설정 */
    & > img {
      width: 350px;
      height: 300px;
      border-radius: 10px;
    }

    /* 지역 텍스트 */
    & > div:nth-child(2) {
      margin-top: 15px;
      font-family: "SCD-4";
      font-size: 1.5rem;
      color: ${({ theme }) => theme.green};
    }

    /* 상품 이름 */
    & > div:nth-child(3) {
      font-family: "SCD-4";
      font-size: 2.1rem;
      color: ${({ theme }) => theme.lightblack};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }

    /* 가격, 별점, 리뷰를 담은 박스 */
    & > div:nth-child(4) {
      display: flex;
      align-items: center;

      /* 가격*/
      & > div:nth-child(1) {
        font-family: "SCD-6";
        font-size: 3rem;
        color: ${({ theme }) => theme.lightblack};
      }

      /* 별점, 리뷰를 담은 박스 */
      & > div:nth-child(2) {
        margin-left: 15px;

        /* 별점 */
        & > div:nth-child(1) {
          font-family: "SCD-4";
          font-size: 0.8rem;
          color: ${({ theme }) => theme.black};
          & > span {
            color: rgba(255, 210, 51, 1);
          }
        }

        /* 리뷰 */
        & > div:nth-child(2) {
          font-family: "SCD-4";
          font-size: 1.3rem;
          color: ${({ theme }) => theme.black};
        }
      }
    }
  }
`;

const ProductItem = ({ data }) => {
  return (
    <ProductItemBox>
      <Link to={`/product/detail/${data.product_id}`}>
        <img src={"/" + data.product_image} alt="이미지 없음"></img>
        <div>[{data.product_local}]</div>
        <div>{data.product_name}</div>
        <div>
          <div>{data.product_price.toLocaleString()}원</div>
          <div>
            <div>
              <span>★</span> {data.product_value} / 5
            </div>
            <div>리뷰 {data.product_reviewCount}</div>
          </div>
        </div>
      </Link>
    </ProductItemBox>
  );
};

export default memo(ProductItem);
