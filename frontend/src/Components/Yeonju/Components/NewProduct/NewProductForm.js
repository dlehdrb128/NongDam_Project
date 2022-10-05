import styled from "styled-components";
import Theme from "../../../../theme/theme";

const MainBox = styled.div`
  width: 843px;
  padding: 240px 0 7rem 0;
  display: flex;
  flex-direction: column;

  // form 제목
  & > h1 {
    font-family: "SCD-6";
    color: ${Theme.lightblack};
    font-size: 2.5rem;
    padding-bottom: 15px;
    border-bottom: 2px solid ${Theme.lightblack};
  }
  // form 으로 묶어서 아래에 한 줄씩 추가
  & > form {
    padding-bottom: 36px;
  }
`;

// 각각 기입내용 한 줄로 박스화시켰음
const ContentBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${Theme.white};
    border-bottom: 1px solid ${Theme.lightgray};
    & > span {
      color: red;
      font-family: "SCD-6";
      font-size: 1.5rem;
    }
  }
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${Theme.liglightgray};
    & > input {
      font-family: "SCD-4";
      width: 300px;
      height: 40px;
      border: 1px solid ${Theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
  }
`;

const NewProductForm = () => {
  return (
    <MainBox>
      <h1>상품 등록</h1>
      <form>
        <ContentBox>
          <h2>
            상품명<span> *</span>
          </h2>
          <div>
            <input type="text" required></input>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>상품요약설명</h2>
          <div>
            <input type="text"></input>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>
            판매가<span> *</span>
          </h2>
          <div>
            <input type="number" required></input>
          </div>
        </ContentBox>
      </form>
      <h1>할인 적용</h1>
      <form></form>
    </MainBox>
  );
};

export default NewProductForm;
