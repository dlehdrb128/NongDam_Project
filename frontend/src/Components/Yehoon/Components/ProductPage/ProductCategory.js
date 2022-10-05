import styled from "styled-components";
import Theme from "./../../../../theme/theme";

// 상품 상세, 상품 후기, 상품 문의를 담은 전체 박스
const CategoryBox = styled.div`
  width: 1280px;
  height: 28px;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  /* 텍스트 하나하나를 담은 박스 */
  & > div {
    display: flex;
    justify-content: center;
    gap: 50px;

    /* 텍스트 설정 */
    & > div {
      width: 218px;
      height: 28px;
      display: flex;
      flex-direction: column;
      text-align: center;
      font-family: "SCD-3";
      font-size: 1.5rem;
      color: ${Theme.gray};
    }

    /* 마우스를 올리면 글씨 강조, 가상 요소 생성 */
    & > div:hover {
      cursor: pointer;
      font-family: "SCD-6";
      color: ${Theme.green};
      &::after {
        content: "";
        width: 100%;
        height: 10px;
        margin-top: 8px;
        border: 3px solid ${Theme.green};
      }
    }
  }

  /* 구분선 속성 */
  & > hr {
    margin-top: 5px;
  }
`;

const ProductCategory = ({ categoryMove, productDetail, productReview }) => {
  // fowardRef를 사용하여 클릭시 해당하는 컨테이너에 scroll이 이동하도록 설정했다 (상품 상세, 상품 후기)
  const clickEvents = (target) => {
    categoryMove(target);
  };

  return (
    <CategoryBox>
      <div>
        <div
          onClick={() => {
            clickEvents(productDetail);
          }}
        >
          상품 상세
        </div>
        <div
          onClick={() => {
            clickEvents(productReview);
          }}
        >
          상품 후기
        </div>
        <div>상품 문의</div>
      </div>
      <hr></hr>
    </CategoryBox>
  );
};

export default ProductCategory;
