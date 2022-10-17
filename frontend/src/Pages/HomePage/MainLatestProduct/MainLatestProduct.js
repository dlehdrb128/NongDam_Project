import { useEffect, useState } from "react";
import styled from "styled-components";
import LatestProductItem from "./LatestProductItem";
import axios from "axios";

// 방금 들어온 못난이들의 최상위 부모 컨테이너
const MainLatestProductBox = styled.div`
  width: 1920px;
  height: 545px;
  margin-top: 200px;
  background: linear-gradient(
    to top,
    white 61%,
    ${({ theme }) => theme.white} 52%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;

// 아이템들을 담은 박스
const LatestProductBox = styled.div`
  position: relative;
  width: 1280px;
  height: 545px;
  display: flex;
  gap: 70px;

  /* 뒤에 초록 네모 박스 */
  & > div:nth-child(1) {
    & > div {
      position: relative;
      top: 30px;
      left: 10px;
      width: 298px;
      height: 339px;
      border: 3px solid ${({ theme }) => theme.green};
      border-radius: 10px;
    }

    /* 박스 위의 사진 */
    & > img {
      position: relative;
      bottom: 350px;
      left: 60px;
      width: 294px;
      height: 480px;
      padding-top: 65px;
      padding-right: 30px;
    }
  }

  /* 이미지와 LatestProductItemBox를 담은 박스 */
  & > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 120px;
    /* 방금 들어온 못난이들 */
    & > img {
      padding-top: 10px;
      width: 477px;
      height: 121px;
    }
  }
`;

// 최근 들어온 상품들을 담은 박스
const LatestProductItemBox = styled.div`
  width: 900px;
  height: 296px;
  display: flex;
  gap: 50px;
`;

const MainLatestProduct = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(`http://localhost:8080/latest`);
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  if (data === undefined) {
    return null;
  }

  return (
    <MainLatestProductBox>
      <LatestProductBox>
        <div>
          <div></div>
          <img src="./img/latest.png" alt="이미지 없음" />
        </div>
        <div>
          <img src="./img/latest-title.png" alt="이미지 없음"></img>
          <LatestProductItemBox>
            {data.map((value, index) => {
              return (
                <LatestProductItem key={index} data={value}></LatestProductItem>
              );
            })}
          </LatestProductItemBox>
        </div>
      </LatestProductBox>
    </MainLatestProductBox>
  );
};

export default MainLatestProduct;
