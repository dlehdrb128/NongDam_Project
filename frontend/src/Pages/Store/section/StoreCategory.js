import styled from "styled-components";
// 상품 상세, 상품 후기, 상품 문의를 담은 전체 박스
const CategoryBox = styled.div`
  width: inherit;
  height: 28px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
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
      color: ${({ theme }) => theme.gray};
    }

    /* 마우스를 올리면 글씨 강조, 가상 요소 생성 */
    & > div:hover {
      cursor: pointer;
      font-family: "SCD-6";
      color: ${({ theme }) => theme.green};
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

const StoreCategory = ({ categoryMove, storeproduct, storeinfo }) => {
  // fowardRef를 사용하여 클릭시 해당하는 컨테이너에 scroll이 이동하도록 설정했다 (상품 상세, 상품 후기)
  const clickEvents = (target) => {
    categoryMove(target);
  };
  return (
    <CategoryBox>
      <div>
        <div
          onClick={() => {
            clickEvents(storeproduct);
          }}
        >
          상품
        </div>
        <div
          onClick={() => {
            clickEvents(storeinfo);
          }}
        >
          스토어정보
        </div>
      </div>
      <hr></hr>
    </CategoryBox>
  );
};

export default StoreCategory;
