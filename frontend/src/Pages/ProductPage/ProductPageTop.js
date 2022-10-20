import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { StyledButton, Theme } from "../../Theme/theme";
import axios from "axios";

// 상품 상세 페이지 상단 요소 박스
const ProductPageTopBox = styled.div`
  width: 1280px;
  height: 500px;
  margin-top: 200px;
  display: flex;
  gap: 100px;
`;

// 상단 요소의 왼쪽 (이미지) 박스
const ProductPageTopLeft = styled.div`
  width: 45%;
  height: 100%;

  & > img {
    width: 546px;
    height: 567px;
    height: inherit;
    border-radius: 10px;
  }
`;

// 상단 요소의 오른쪽 박스 (스토어 이름부터 구매하기, 장바구니까지)
const ProductPageTopRight = styled.div`
  width: 50%;
  height: 100%;

  /* 스토어 이름 */
  & > a {
    & > div:nth-child(1) {
      width: 200px;
      font-family: "SCD-3";
      font-size: 2rem;
      color: ${({ theme }) => theme.lightblack};

      &:hover {
        font-weight: bold;
        cursor: pointer;
      }
    }

    &:hover {
      cursor: unset;
    }
  }

  /* 지역 */
  & > div:nth-child(2) {
    margin-top: 25px;
    font-family: "SCD-6";
    font-size: 3rem;
    color: ${({ theme }) => theme.green};
  }
  /* 상품 이름 */
  & > div:nth-child(3) {
    font-family: "SCD-6";
    font-size: 3rem;
    color: ${({ theme }) => theme.lightblack};
  }

  /* 구분선 */
  & > hr {
    border: 1px solid ${({ theme }) => theme.lightgray};
    margin-top: 25px;
  }

  /* 가격 */
  & > div:nth-child(5) {
    font-family: "SCD-7";
    font-size: 4rem;
    color: ${({ theme }) => theme.lightblack};
    padding-top: 30px;
  }
`;

// 수량 박스
const ProductPageCountBox = styled.div`
  width: 625px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.white};
  margin-top: 30px;

  /* 수량 */
  & > div:nth-child(1) {
    margin-left: 30px;
    font-family: "SCD-6";
    font-size: 1.9rem;
  }

  /* - 0 + 박스 */
  & > div:nth-child(2) {
    width: 370px;
    height: 31px;
    display: flex;
    margin-right: 30px;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.realWhite};

    /* 버튼 - + */
    & > button {
      width: 31px;
      height: 30px;
      background-color: ${({ theme }) => theme.realWhite};
      border: 1px solid ${({ theme }) => theme.lightgray};
      font-size: 2.4rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
      }
    }

    /* 수량 텍스트 */
    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "SCD-3";
      font-size: 1.7rem;
      color: ${({ theme }) => theme.gray};
    }
  }
`;

// 총 합계금액을 담은 박스
const ProductPageTotalPrice = styled.div`
  margin: 15px 30px 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* 총 합계금액 텍스트 */
  & > div:nth-child(1) {
    font-family: "SCD-6";
    font-size: 1.7rem;
    color: ${({ theme }) => theme.lightblack};
  }
  & > div:nth-child(2) {
    display: flex;
    gap: 10px;

    /* 총 가격 */
    & > div:nth-child(1) {
      font-family: "SCD-6";
      font-size: 3rem;
      color: ${({ theme }) => theme.lightblack};
    }

    /* 개수 */
    & > div:nth-child(2) {
      font-size: 1.5rem;
      font-family: "SCD-3";
      color: ${({ theme }) => theme.gray};
      align-self: flex-end;
      padding-bottom: 5px;
    }
  }
`;

// 구매하기, 장바구니 버튼 박스
const ProductPageButtonBox = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 30px;
`;

const SaleBox = styled.div`
  display: flex;
  gap: 10px;
  & > div:nth-child(1) {
    font-family: "SCD-7";
    font-size: 3rem;
    color: ${({ theme }) => theme.lightblack};
  }
  & > div:nth-child(2) {
    font-family: "SCD-7";
    font-size: 2rem;
    color: ${({ theme }) => theme.gray};
    text-decoration: line-through;
    align-self: flex-end;
  }
`;

const ProductPageTop = ({ ProductData }) => {
  const [count, setCount] = useState(0);
  const data = [ProductData[0], count];
  let salePrice = null;

  const up = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const down = () => {
    setCount((count) => count + 1);
  };

  ProductData = ProductData[0];

  if (ProductData.product_discount_set === 1) {
    salePrice =
      ProductData.product_price -
      (ProductData.product_price * ProductData.product_discount_percent) /
        (100).toLocaleString();
  }

  const sendCart = () => {
    axios.post("http://localhost:8080/product/cart/insert", data);
  };

  return (
    <ProductPageTopBox>
      <ProductPageTopLeft>
        <img
          src={`http://localhost:8080/product/${ProductData.product_image}`}
          alt="데이터를 찾을 수 없습니다"
        ></img>
      </ProductPageTopLeft>
      <ProductPageTopRight>
        <Link to={`/store/${ProductData.store_key}`}>
          <div>{ProductData.store_name}</div>
        </Link>
        <div>[{ProductData.product_local}]</div>
        <div>{ProductData.product_name}</div>
        <hr></hr>
        {salePrice === null ? (
          <div>
            {(Math.round(ProductData.product_price / 10) * 10).toLocaleString()}
            원
          </div>
        ) : (
          <SaleBox>
            <div>{Math.round(salePrice / 10) * 10}원</div>
            <div>
              {(
                Math.round(ProductData.product_price / 10) * 10
              ).toLocaleString()}
              원
            </div>
          </SaleBox>
        )}
        <ProductPageCountBox>
          <div>수량</div>
          <div>
            <button onClick={up}>-</button>
            <div>{count}</div>
            <button onClick={down}>+</button>
          </div>
        </ProductPageCountBox>
        <ProductPageTotalPrice>
          <div>총 합계금액 (수량) :</div>

          <div>
            {salePrice === null ? (
              <div>
                {(
                  Math.round(ProductData.product_price / 10) *
                  10 *
                  count
                ).toLocaleString()}
                원
              </div>
            ) : (
              <div>
                {(Math.round(salePrice / 10) * 10 * count).toLocaleString()}원
              </div>
            )}
            <div>({count}개)</div>
          </div>
        </ProductPageTotalPrice>
        <ProductPageButtonBox>
          <StyledButton fs="3rem" wd="298px" ht="60px" fontFamily="SCD-6">
            구매하기
          </StyledButton>
          <StyledButton
            fs="3rem"
            wd="298px"
            ht="60px"
            bg="none"
            fontFamily="SCD-3"
            border="1.5px solid rgba(0, 0, 0, 1)"
            color={Theme.lightblack}
            onClick={sendCart}
          >
            장바구니
          </StyledButton>
        </ProductPageButtonBox>
      </ProductPageTopRight>
    </ProductPageTopBox>
  );
};

export default ProductPageTop;
