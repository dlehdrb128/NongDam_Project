import styled from "styled-components";

// 상품 검색페이지의 상단
export const ProductTop = styled.div`
  width: 1280px;
  display: flex;
  justify-content: space-between;
  margin-top: 100px;
`;

// 상단 왼쪽 (전체 상품...)
export const ProductItemLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  /* 전체 상품 */
  & > h1 {
    font-family: "YANGJIN";
    font-size: 4.5rem;
    color: ${({ theme }) => theme.green};
  }

  /* 농담의 모든... */
  & > div:nth-child(2) {
    font-family: "SCD-4";
    font-size: 2.1rem;
    color: ${({ theme }) => theme.lightblack};
  }

  /* 정렬 속성들을 담은 박스 */
  & > div:nth-child(3) {
    display: flex;
    flex-direction: row;
    gap: 50px;

    /* select 속성 */
    & > select {
      width: 150px;
      height: 40px;
      border-radius: 15px;
      color: ${({ theme }) => theme.lightblack};
      font-size: 1.9rem;

      /* select의 option 속성 */
      & > option {
        font-size: 1.6rem;
      }

      font-family: "SCD-4";
      text-align: center;
      font-weight: bold;
      opacity: 60%;
      &:hover {
        cursor: pointer;
        opacity: 100%;
      }
    }
  }
`;

export const ProductItemRight = styled.img`
  width: 650px;
  height: 200px;
  margin-right: 100px;
`;

// 상품 아이템들을 담는 컨테이너
export const ProductBox = styled.div`
  margin-top: 150px;
  width: 1280px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 110px;
`;

export const UndefinedBox = styled.div`
  width: 1280px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > h1 {
    font-size: 4rem;
    font-family: "YANGJIN";
  }
`;

export const ProductSortBox = styled.div`
  width: 1280px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  padding-top: 50px;

  & > div:nth-child(1) {
    font-family: "SCD-6";
    font-size: 2rem;
  }
`;
