import styled from "styled-components";
import Theme from "../Theme/theme";

/**
 *@별점과_리뷰의_정보가_포함되지_않은_상품_컴포넌트
 *@props
 *@boxwidth_boxheight_boxgap
 *@imgWidth_imgHeight_imgRadius
 *@localFontFamily_localFontSize
 *@productFontFamily_productFontSize
 *@priceFontFamily_priceFontSize
 **/

export const ProductBox = styled.div`
  width: ${(props) => props.boxwidth || "180px"};
  height: ${(props) => props.boxheight || "296px"};
  display: flex;
  flex-direction: column;
  gap: ${(props) => props.boxgap || "10px"};

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
      width: ${(props) => props.imgWidth || "163px"};
      height: ${(props) => props.imgHeight || "168px"};
      border-radius: ${(props) => props.imgRadius || "10px"};
    }

    /* 지역 글꼴 */
    & > div:nth-child(2) {
      & > div:nth-child(1) {
        font-family: ${(props) => props.localFontFamily || "SCD-6"};
        font-size: ${(props) => props.localFontSize || "1.7rem"};
        color: ${({ theme }) => theme.green};
      }

      /* 제품명 글꼴 */
      & > div:nth-child(2) {
        font-family: ${(props) => props.productFontFamily || "SCD-3"};
        font-size: ${(props) => props.productFontSize || "1.6rem"};
        color: ${({ theme }) => theme.lightblack};
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
      }
    }
    /* 가격 글꼴 */
    & > div:nth-child(3) {
      font-family: ${(props) => props.priceFontFamily || "SCD-7"};
      font-size: ${(props) => props.priceFontSize || "1.9rem"};
      color: ${({ theme }) => theme.lightblack};
    }
  }
`;

/**
 *@별점과_리뷰의_정보가_포함된_상품_컴포넌트
 *@props
 *@boxWidth
 *@imgWidth_imgHeight_imgRadius
 *@localTopMargin_localFontFamily_localFontSize
 *@productFontFamily_productFontSize_productPaddingBottom
 *@priceFontFamily_priceFontSize
 *@valueFontFamily_valueFontSize
 *@reviewFontFamily_reviewFontSize
 **/

export const ProductItemBox = styled.div`
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
    width: ${(props) => props.boxWidth || "350px"};
    display: flex;
    flex-direction: column;

    /* 이미지 규격 설정 */
    & > img {
      width: ${(props) => props.imgWidth || "350px"};
      height: ${(props) => props.imgHeight || "350px"};
      border-radius: ${(props) => props.imgRadius || "10px"};
    }

    /* 지역 텍스트 */
    & > div:nth-child(2) {
      margin-top: ${(props) => props.localTopMargin || "15px"};
      font-family: ${(props) => props.localFontFamily || "SCD-4"};
      font-size: ${(props) => props.localFontSize || "1.5rem"};
      color: ${({ theme }) => theme.green};
    }

    /* 상품 이름 */
    & > div:nth-child(3) {
      font-family: ${(props) => props.productFontFamily || "SCD-4"};
      font-size: ${(props) => props.productFontSize || "2.1rem"};
      color: ${({ theme }) => theme.lightblack};
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      padding-bottom: ${(props) => props.productPaddingBottom || "30px"};
    }

    /* 가격, 별점, 리뷰를 담은 박스 */
    & > div:nth-child(4) {
      display: flex;
      align-items: center;

      /* 가격*/
      & > div:nth-child(1) {
        font-family: ${(props) => props.priceFontFamily || "SCD-6"};
        font-size: ${(props) => props.priceFontSize || "3rem"};
        color: ${({ theme }) => theme.lightblack};
      }

      /* 별점, 리뷰를 담은 박스 */
      & > div:nth-child(2) {
        margin-left: 15px;
        margin-bottom: 5px;
        align-self: flex-end;

        /* 별점 */
        & > div:nth-child(1) {
          font-family: ${(props) => props.valueFontFamily || "SCD-4"};
          font-size: ${(props) => props.valueFontSize || "0.8rem"};
          color: ${({ theme }) => theme.black};
          & > span {
            color: rgba(255, 210, 51, 1);
          }
        }

        /* 리뷰 */
        & > div:nth-child(2) {
          font-family: ${(props) => props.reviewFontFamily || "SCD-4"};
          font-size: ${(props) => props.reviewFontSize || "1.3rem"};
          color: ${({ theme }) => theme.black};
        }
      }
    }
  }
`;

/**
 *@세일_가격_컴포넌트
 *@props
 *@boxDirection_boxGap
 *@firstFontFamily_firstFontSize_firstColor_firstTextDecoration_firstPosition_firstBottom_firstTop_firstLeft_firstRight
 *@secondFontFamily_secondFontSize_secondColor_secondTextDecoration_secondPosition_secondBottom_secondTop_secondLeft_secondRight
 */

export const SaleBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.boxDirection || "column"};
  gap: ${(props) => props.boxGap || "0px"};

  & > div:nth-child(1) {
    font-family: ${(props) => props.firstFontFamily || "SCD-7"};
    font-size: ${(props) => props.firstFontSize || "2rem"};
    color: ${(props) => props.firstColor || Theme.gray};
    text-decoration: ${(props) => props.firstTextDecoration || "unset"};
    position: ${(props) => props.firstPosition || "unset"};
    bottom: ${(props) => props.firstBottom || "unset"};
    top: ${(props) => props.firstTop || "unset"};
    left: ${(props) => props.firstLeft || "unset"};
    right: ${(props) => props.firstRight || "unset"};
  }

  & > div:nth-child(2) {
    font-family: ${(props) => props.secondFontFamily || "SCD-7"};
    font-size: ${(props) => props.secondFontSize || "3rem"};
    color: ${(props) => props.secondColor || Theme.lightblack};
    text-decoration: ${(props) => props.secondTextDecoration || "unset"};
    position: ${(props) => props.secondPosition || "unset"};
    bottom: ${(props) => props.secondBottom || "unset"};
    top: ${(props) => props.secondTop || "unset"};
    left: ${(props) => props.secondLeft || "unset"};
    right: ${(props) => props.secondRight || "unset"};
  }
`;
