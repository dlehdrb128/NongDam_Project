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

const Sort = ({ params, setParams }) => {
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
          setParams({ ...params, sort: "highPrice" });
        }}
      >
        가격높은순
      </div>
      <div
        onClick={() => {
          setParams({ ...params, sort: "lowPrice" });
        }}
      >
        가격낮은순
      </div>
    </SortBox>
  );
};

export default Sort;
