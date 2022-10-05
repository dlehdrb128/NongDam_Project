import styled from "styled-components";
import { StyledButton, Theme } from "./../../../../theme/theme";
import { useState } from "react";

const ProductPageTopBox = styled.div`
  width: 1280px;
  height: 500px;
  margin-top: 200px;
  display: flex;
  gap: 100px;
`;

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

const ProductPageTopRight = styled.div`
  width: 50%;
  height: 100%;

  & > div:nth-child(1) {
    font-family: "SCD-3";
    font-size: 2rem;
    color: ${Theme.lightblack};
  }
  & > div:nth-child(2) {
    margin-top: 25px;
    font-family: "SCD-6";
    font-size: 3rem;
    color: ${Theme.green};
  }
  & > div:nth-child(3) {
    font-family: "SCD-6";
    font-size: 3rem;
    color: ${Theme.lightblack};
  }

  & > hr {
    border: 1px solid ${Theme.lightgray};
    margin-top: 25px;
  }

  & > div:nth-child(5) {
    font-family: "SCD-7";
    font-size: 4rem;
    color: ${Theme.lightblack};
    padding-top: 30px;
  }
`;

const ProductPageCountBox = styled.div`
  width: 625px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${Theme.white};
  margin-top: 30px;

  & > div:nth-child(1) {
    margin-left: 30px;
    font-family: "SCD-6";
    font-size: 1.9rem;
  }

  & > div:nth-child(2) {
    width: 370px;
    height: 31px;
    display: flex;
    margin-right: 30px;
    justify-content: space-between;
    background-color: ${Theme.realWhite};

    & > button {
      width: 31px;
      height: 30px;
      background-color: ${Theme.realWhite};
      border: 1px solid ${Theme.lightgray};

      font-size: 2.4rem;
      display: flex;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
      }
    }

    & > div {
      display: flex;
      justify-content: center;
      align-items: center;
      font-family: "SCD-3";
      font-size: 1.7rem;
      color: ${Theme.gray};
    }
  }
`;

const ProductPageTotalPrice = styled.div`
  margin: 15px 30px 0px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div:nth-child(1) {
    font-family: "SCD-6";
    font-size: 1.7rem;
    color: ${Theme.lightblack};
  }
  & > div:nth-child(2) {
    display: flex;
    gap: 10px;

    & > div:nth-child(1) {
      font-family: "SCD-6";
      font-size: 3rem;
      color: ${Theme.lightblack};
    }

    & > div:nth-child(2) {
      font-size: 1.5rem;
      font-family: "SCD-3";
      color: ${Theme.gray};
      align-self: flex-end;
      padding-bottom: 5px;
    }
  }
`;
const ProductPageButtonBox = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 30px;
`;

const ProductPageTop = ({ ProductData }) => {
  const [count, setCount] = useState(0);
  const up = () => {
    if (count > 0) {
      setCount((count) => count - 1);
    }
  };

  const down = () => {
    setCount((count) => count + 1);
  };
  return (
    <ProductPageTopBox>
      <ProductPageTopLeft>
        <img src={ProductData.image} alt="데이터를 찾을 수 없습니다"></img>
      </ProductPageTopLeft>
      <ProductPageTopRight>
        <div>{ProductData.store_name}</div>
        <div>[{ProductData.local}]</div>
        <div>{ProductData.name}</div>
        <hr></hr>
        <div>{ProductData.price.toLocaleString()}원</div>
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
            <div>{(ProductData.price * count).toLocaleString()}원</div>
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
          >
            장바구니
          </StyledButton>
        </ProductPageButtonBox>
      </ProductPageTopRight>
    </ProductPageTopBox>
  );
};

export default ProductPageTop;
