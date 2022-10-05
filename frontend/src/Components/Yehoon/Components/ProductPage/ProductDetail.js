import styled from "styled-components";

const ProductDetailBox = styled.div`
  padding-top: 200px;
  display: flex;
  justify-content: center;

  & > h1 {
    font-size: 3rem;
  }
`;

const ProductDetail = ({ data }) => {
  return (
    <ProductDetailBox>
      {data.detailImage === undefined ? (
        <h1>상품 상세이미지가 없습니다</h1>
      ) : (
        <img src={data.detailImage} alt="이미지 없음"></img>
      )}
    </ProductDetailBox>
  );
};

export default ProductDetail;
