import { memo } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Theme } from "./../../../../theme/theme";

const ProductItemBox = styled.div`
  & > *:hover {
    cursor: pointer;
    font-weight: bold;
  }

  & > a:link {
    text-decoration: none;
    color: black;
  }
  & > a:visited {
    text-decoration: none;
    color: black;
  }
  & > a:active {
    text-decoration: none;
    color: black;
  }

  & > a:nth-child(1) {
    width: 350px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    & > img {
      width: 350px;
      height: 300px;
      border-radius: 10px;
    }

    & > div:nth-child(2) {
      margin-top: 15px;
      font-family: "SCD-4";
      font-size: 1.5rem;
      color: ${Theme.green};
    }

    & > div:nth-child(3) {
      font-family: "SCD-4";
      font-size: 2.1rem;
      color: ${Theme.lightblack};
    }

    & > div:nth-child(4) {
      display: flex;
      align-items: center;

      & > div:nth-child(1) {
        font-family: "SCD-6";
        font-size: 3rem;
        color: ${Theme.lightblack};
      }
      & > div:nth-child(2) {
        margin-left: 15px;
        & > div:nth-child(1) {
          font-family: "SCD-4";
          font-size: 0.8rem;
          color: ${Theme.black};
          & > span {
            color: rgba(255, 210, 51, 1);
          }
        }

        & > div:nth-child(2) {
          font-family: "SCD-4";
          font-size: 1rem;
          color: ${Theme.black};
        }
      }
    }
  }
`;

const ProductItem = ({ data }) => {
  return (
    <ProductItemBox>
      <Link to={`/product/${data.product_id}`}>
        <img src={data.image} alt="이미지 없음"></img>
        <div>[{data.local}]</div>
        <div>{data.name}</div>
        <div>
          <div>{data.price.toLocaleString()}원</div>
          <div>
            <div>
              <span>★</span> {data.value} / 5
            </div>
            <div>리뷰 {data.reviewCount}</div>
          </div>
        </div>
      </Link>
    </ProductItemBox>
  );
};

export default memo(ProductItem);
