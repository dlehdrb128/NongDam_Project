import styled from "styled-components";
import { forwardRef } from "react";

// 상품 상세 요소가 담긴 박스
const ProductDetailBox = styled.div`
  padding-top: 200px;
  display: flex;
  justify-content: center;

  & > h1 {
    font-size: 3rem;
  }
`;

const ProductDetail = forwardRef(({ data }, ref) => {
  data = data[0];
  return (
    // 이미지가 없으면 h1태그를 반환한다
    <ProductDetailBox ref={ref}>
      {data.product_detail === undefined ? (
        <h1>상품 상세이미지가 없습니다</h1>
      ) : (
        <img
          src={`http://localhost:8080/productDetail/${data.product_detail}`}
          alt="이미지 없음"
        ></img>
      )}
    </ProductDetailBox>
  );
});

export default ProductDetail;
