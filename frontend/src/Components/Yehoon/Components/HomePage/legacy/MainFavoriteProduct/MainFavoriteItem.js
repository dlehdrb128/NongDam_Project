import styled from "styled-components";

const MainFavoriteItemBox = styled.div`
  width: 298px;
  height: 401px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  &:hover {
    & > div:nth-child(3) {
      font-weight: bold;
    }
  }

  & > * {
    cursor: pointer;
  }

  & > img {
    width: 298px;
    height: 299px;
  }
  & > div:nth-child(2) {
    font-family: "NanumGothic-Bold";
    font-size: 0.8rem;
    color: rgba(128, 195, 66, 1);
  }
  & > div:nth-child(3) {
    font-family: "NanumGothic-Regular";
    font-size: 0.8rem;
    color: rgba(82, 82, 82, 1);
  }
  & > div:nth-child(4) {
    font-family: "NanumGothic-Bold";
    font-size: 1.2rem;
    color: rgba(82, 82, 82, 1);
  }
`;

const MainFavoriteItem = ({ data }) => {
  return (
    <MainFavoriteItemBox>
      <img src={data.image} alt="이미지 없음"></img>
      <div>[{data.local}]</div>
      <div>{data.name}</div>
      <div>{data.price}</div>
    </MainFavoriteItemBox>
  );
};
export default MainFavoriteItem;
