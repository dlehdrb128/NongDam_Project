import styled from "styled-components";

const SortBox = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.lightblack};
  gap: 45px;

  & > div:hover {
    cursor: pointer;
    font-weight: bold;
  }

  & > div {
    font-family: "SCD-4";
    font-size: 1.5rem;
    padding-right: 20px;
  }
`;

/**
 * @function 상품을_속성별로_정렬해주는_함수
 * @arg prams_파라미터_props
 * @arg setParams_파라미터_설정_함수
 * @arg
 */

const RecipeSort = ({ params, setParams }) => {
  return (
    <SortBox>
      <div
        onClick={() => {
          setParams({ ...params, sort: "new" });
        }}
      >
        최신순
      </div>
      <div
        onClick={() => {
          setParams({ ...params, sort: "view" });
        }}
      >
        조회순
      </div>
    </SortBox>
  );
};

export default RecipeSort;
