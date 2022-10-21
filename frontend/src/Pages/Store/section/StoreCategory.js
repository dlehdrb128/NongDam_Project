import styled from "styled-components";
import { Link } from "react-router-dom";

// 상품 상세, 상품 후기, 상품 문의를 담은 전체 박스
const CategoryBox = styled.div`
  width: inherit;
  height: 28px;
  padding-top: 100px;
  display: flex;
  flex-direction: column;
  margin-bottom: 80px;
  & > div {
    display: flex;
    justify-content: center;
    gap: 50px;
    & > a {
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
  }

  /* 구분선 속성 */
  & > hr {
    margin-top: 5px;
  }
`;

const StoreCategory = () => {
  return (
    <CategoryBox>
      <div>
        <Link to="product" spy={true} smooth={true}>
          <div>상품</div>
        </Link>
        <Link to="info" spy={true} smooth={true}>
          <div>스토어정보</div>
        </Link>
      </div>
      <hr></hr>
    </CategoryBox>
  );
};

export default StoreCategory;
