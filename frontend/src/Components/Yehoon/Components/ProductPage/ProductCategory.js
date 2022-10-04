import styled from "styled-components";
import Theme from "./../../../../theme/theme";

const CategoryBox = styled.div`
  width: 1280px;
  height: 28px;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  & > div {
    display: flex;
    justify-content: center;
    gap: 50px;
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
  & > hr {
    margin-top: 5px;
  }
`;

const ProductCategory = () => {
  return (
    <CategoryBox>
      <div>
        <div>상품 상세</div>
        <div>상품 후기</div>
        <div>상품 문의</div>
      </div>
      <hr></hr>
    </CategoryBox>
  );
};

export default ProductCategory;
