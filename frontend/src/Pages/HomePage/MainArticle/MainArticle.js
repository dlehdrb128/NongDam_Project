import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledButton } from "../../../Theme/theme";

// 메인 홈페이지 Article

// 요소 전체를 담은 박스
const MainArticleBox = styled.div`
  width: 1280px;
  height: 807px;
  padding-top: 200px;
  display: flex;
  justify-content: flex-end;
`;

// 요소의 아이템을 담은 박스
const MainArticleItemBox = styled.div`
  display: flex;
  gap: 110px;
`;

// 왼쪽 타이틀 박스
const MainArticleTitle = styled.div`
  width: 436px;
  height: 522px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: flex-end;

  /* 멀쩡한거 왜버려유? */
  & > div:nth-child(1) {
    font-family: "YANGJIN";
    font-size: 4.5rem;
    color: ${({ theme }) => theme.green};
  }

  /* 아까워 죽겠슈 */
  & > div:nth-child(2) {
    font-family: "YANGJIN";
    font-size: 4.5rem;
    color: ${({ theme }) => theme.lightblack};
  }

  /* 구분선 */
  & > hr {
    width: 436px;
    border: 1px solid ${({ theme }) => theme.lightgray};
  }

  /* 못난이 농산물이 버려지는... */
  & > div:nth-child(4) {
    display: flex;
    text-align: end;
    font-family: "SCD-4";
    font-size: 1.92rem;
    color: ${({ theme }) => theme.lightblack};
  }

  /* 농담은 20% 비싸게... */
  & > div:nth-child(5) {
    font-family: "SCD-5";
    font-size: 1.92rem;
    color: ${({ theme }) => theme.green};
  }
`;

// 오른쪽 이미지
const MainArticleImg = styled.img``;

const MainArticle = () => {
  return (
    <MainArticleBox>
      <MainArticleItemBox>
        <MainArticleTitle>
          <div>멀쩡한거 왜버려유?</div>
          <div>아까워 죽겠슈</div>
          <hr></hr>
          <div>
            못난이 농산물이 버려지는 근본적인 원인은 <br></br>
            농가의 소득문제 입니다.<br></br>
            <br></br>
            가공공장으로 판로가 존재하지만 낮은 수매단가로<br></br>
            인해 충분한 수익을 기대하기 힘들며 갚아엎는게<br></br>
            속편한 구조이니 자연히 폐기가 늘어나지요.<br></br>
          </div>
          <div>농담은 20% 비싸게 사서 20% 싸게팔아요.</div>
          {/* 링크를 사용해 intro 페이지로 이동하게 설정, 버튼은 공통 컴포넌트인 StyledButton을 사용했다 */}
          <Link to={"/intro"}>
            <StyledButton fs={"1.8rem"} wd={"250px"} ht={"50px"}>
              농담은 함께하길 원해요
            </StyledButton>
          </Link>
        </MainArticleTitle>
        <MainArticleImg
          src="http://localhost:8080/main/MainArticle.png"
          alt="이미지 없음"
        ></MainArticleImg>
      </MainArticleItemBox>
    </MainArticleBox>
  );
};
export default MainArticle;
