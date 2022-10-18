import styled from "styled-components";
const ReviewParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 1265px;
  height: 1265px;
  & > div:nth-child(1) {
    width: inherit;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 50px;
    & > div:nth-child(1) {
      & > h2 {
        font-size: 3rem;
        font-family: YANGJIN;
        color: ${({ theme }) => theme.lightblack};
        margin-bottom: 50px;
      }
      & > p {
        font-size: 2rem;
        font-family: SCD-5;
        color: ${({ theme }) => theme.lightblack};
      }
    }
    & > img:nth-child(2) {
      width: 500px;
      height: 500px;
      border-radius: 20px;
    }
  }
  & > div:nth-child(2) {
    width: 1265px;
    margin-bottom: 50px;
    & > a {
      font-size: 2rem;
      font-family: SCD-5;
      color: ${({ theme }) => theme.lightblack};
    }
  }
  & > div:nth-child(3) {
    width: 1265px;
    font-size: 1.5rem;
    font-family: SCD-5;
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 50px;
  }
  & > div:nth-child(4) {
    width: 1265px;
    & > img {
      width: 200px;
      height: 200px;
      border-radius: 10px;
      margin-right: 20px;
    }
  }
`;

const RecipeReview = () => {
  return (
    <ReviewParent>
      <div>
        <div>
          <h2>근수의 달콤한 딸기 케이크</h2>
          <p>
            저번에 딸기케이크 먹어보고 케이크는 무조건
            <br /> 여기서 먹어야겠다 라고 생각했는데 역시나...
          </p>
        </div>
        <img src="./img/감자전.jpg" alt="감자전"></img>
      </div>
      <div>
        <a href="#">#딸기</a>
        &nbsp;
        <a href="#">#케이크</a>
        &nbsp;
        <a href="#">#근수</a>
      </div>
      <div>근수를 으깨는 것보단 썰어서 부침가루에 섞는게 더 맛있어요.</div>
      <div>
        <img src="./img/감자전.jpg" alt="감자전"></img>
        <img src="./img/감자전.jpg" alt="감자전"></img>
        <img src="./img/감자전.jpg" alt="감자전"></img>
        <img src="./img/감자전.jpg" alt="감자전"></img>
      </div>
    </ReviewParent>
  );
};
export default RecipeReview;
