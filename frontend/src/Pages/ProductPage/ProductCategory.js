import { CategoryBox } from "../../common/category";

const ProductCategory = ({
  categoryMove,
  productDetail,
  productReview,
  sellerInformation,
}) => {
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
        <div
          onClick={() => {
            clickEvents(sellerInformation);
          }}
        >
          상품 문의
        </div>
      </div>
      <hr></hr>
    </CategoryBox>
  );
};

export default ProductCategory;
