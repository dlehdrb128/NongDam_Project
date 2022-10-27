import styled from "styled-components";
import Theme from "../Theme/theme";

/**
 *@카테고리_컴포넌트
 *@props
 *@boxWidth_boxHeight
 *@itemGap
 *@textWidth_textHeight_textFontFamily_textFontSize_textColor
 *@hoverFontFamily_hoverColor
 */

// 카테고리 전체 박스
export const CategoryBox = styled.div`
  width: ${(props) => props.boxWidth || "1280px"};
  height: ${(props) => props.boxHeight || "28px"};
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  /* 텍스트 하나하나를 담은 박스 */
  & > div {
    display: flex;
    justify-content: center;
    gap: ${(props) => props.itemGap || "50px"};

    /* 텍스트 설정 */
    & > div {
      width: ${(props) => props.textWidth || "218px"};
      height: ${(props) => props.textHeight || "28px"};
      display: flex;
      flex-direction: column;
      text-align: center;
      font-family: ${(props) => props.textFontFamily || "SCD-4"};
      font-size: ${(props) => props.textFontSize || "1.5rem"};
      color: ${(props) => props.textColor || Theme.gray};
    }

    /* 마우스를 올리면 글씨 강조, 가상 요소 생성 */
    & > div:hover {
      cursor: pointer;
      font-family: ${(props) => props.hoverFontFamily || "SCD-6"};
      color: ${(props) => props.hoverColor || Theme.green};
      &::after {
        content: "";
        width: 100%;
        height: 10px;
        margin-top: 8px;
        border: 3px solid ${({ theme }) => theme.green};
      }
    }
  }

  /* 구분선 속성 */
  & > hr {
    margin-top: 5px;
  }
`;
