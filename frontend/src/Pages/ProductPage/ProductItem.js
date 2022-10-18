import { memo, useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";

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
      padding-bottom: 30px;
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

const SaleBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  & > div:nth-child(2) {
    font-family: "SCD-7";
    font-size: 3rem;
    color: ${({ theme }) => theme.lightblack};
  }
  & > div:nth-child(1) {
    font-family: "SCD-7";
    font-size: 2rem;
    color: ${({ theme }) => theme.gray};
    text-decoration: line-through;
    position: absolute;
    bottom: 40px;
  }
`;

const ProductItem = ({ data }) => {
  const [datas, setDatas] = useState();

  useEffect(() => {
    const getData = async (id) => {
      try {
        let response = await axios.get(
          `http://localhost:8080/product/value/${id}`
        );
        setDatas(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData(data.product_key);
  }, []);

  if (datas === undefined) {
    return null;
  }

  return (
    <ProductItemBox>
      <Link to={`/product/detail/${data.product_key}`}>
        <img
          src={`http://localhost:8080/product/${data.product_image}`}
          alt="이미지 없음"
        ></img>
        <div>[{data.product_local}]</div>
        <div>{data.product_name}</div>
        <div>
          {data.product_discount_percent === 0 ? (
            <div>{data.product_price.toLocaleString()}원</div>
          ) : (
            <SaleBox>
              <div>{data.product_price.toLocaleString()}</div>
              <div>
                {(
                  data.product_price -
                  (data.product_price * data.product_discount_percent) / 100
                ).toLocaleString()}
                원
              </div>
            </SaleBox>
          )}

          <div>
            <div>
              <span>★</span>{" "}
              {datas[0].reviewValue === null ? 0 : datas[0].reviewValue} / 5
            </div>
            <div>리뷰 {datas[0].reviewCount}</div>
          </div>
        </div>
      </Link>
    </ProductItemBox>
  );
};

export default memo(ProductItem);
