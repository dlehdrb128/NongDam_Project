import styled from "styled-components";

const MainArticleBox = styled.div`
  width: 1280px;
  height: 807px;
  padding-top: 200px;
  display: flex;
  justify-content: flex-end;
`;

const MainArticleItemBox = styled.div`
  display: flex;
  gap: 110px;
`;

const MainArticleTitle = styled.div`
  width: 436px;
  height: 522px;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: flex-end;

  & > div:nth-child(1) {
    font-family: "YANGJIN";
    font-size: 2.8rem;
    color: rgba(128, 195, 66, 1);
  }

  & > div:nth-child(2) {
    font-family: "YANGJIN";
    font-size: 2.8rem;
    color: rgba(82, 82, 82, 1);
  }

  & > hr {
    width: 436px;
    border: 1px solid rgba(192, 192, 192, 1);
  }

  & > div:nth-child(4) {
    display: flex;
    text-align: end;
    font-family: "SCD-4";
    font-size: 1.2rem;
    color: rgba(82, 82, 82, 1);
  }

  & > div:nth-child(5) {
    font-family: "SCD-5";
    font-size: 1.2rem;
    color: rgba(128, 195, 66, 1);
  }
  & > div:nth-child(6) {
    width: 248px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "YANGJIN";
    font-size: 1.1rem;
    color: rgba(255, 255, 255, 1);
    background-color: rgba(243, 152, 0, 1);
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

    &:hover {
      cursor: pointer;
      background-color: rgba(128, 195, 66, 1);
    }
  }
`;

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
          <div>농담은 함께하길 원해요</div>
        </MainArticleTitle>
        <MainArticleImg
          src="/img/MainArticle.png"
          alt="이미지 없음"
        ></MainArticleImg>
      </MainArticleItemBox>
    </MainArticleBox>
  );
};
export default MainArticle;