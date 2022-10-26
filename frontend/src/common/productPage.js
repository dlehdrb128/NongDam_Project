import styled from "styled-components";
import Theme from "../Theme/theme";

// 상품 상세 페이지 상단 요소 박스
export const ProductPageTopBox = styled.div`
  width: 1280px;
  height: 500px;
  margin-top: 200px;
  display: flex;
  gap: 100px;
`;

// 상단 요소의 왼쪽 (이미지) 박스
export const ProductPageTopLeft = styled.div`
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
export const ProductPageTopRight = styled.div`
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
    padding-top: 50px;
  }
`;

/**
 *@수량_컴포넌트
 *@props
 *@boxWidth_boxHeight_boxBg_boxMargin
 *@textMargin_textFontFamily_textFontSize
 */

// 수량 컴포넌트
export const CountBox = styled.div`
  width: ${(props) => props.boxWidth || "625px"};
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.Bg || Theme.white};
  margin: ${(props) => props.boxMargin || "30px 0 0 0px"};

  /* 수량 */
  & > div:nth-child(1) {
    margin-left: ${(props) => props.textMargin || "30px 0 0 0px"};
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
export const ProductPageTotalPrice = styled.div`
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
export const ProductPageButtonBox = styled.div`
  padding-top: 20px;
  display: flex;
  gap: 30px;
`;
