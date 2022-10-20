import styled from "styled-components";

//color,font Asset

//Intro 섹션3컨테이너 (너비,위치조정)
const Section3 = styled.section`
  width: inherit;
  margin-bottom: 180px;
  //섹션3 중간 상단 타이틀(폰트,폰트사이즈,위치,컬러조정)
  & > h1 {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize_50};
    color: ${({ theme }) => theme.lightblack};
    font-family: YANGJIN;
    margin-bottom: 30px;
    //섹션3 중간 상단 타이틀 포인트 텍스트(폰트,컬러조정)
    & > span {
      color: ${({ theme }) => theme.green};
      font-size: ${({ theme }) => theme.fontSize_50};
    }
  }
  //섹션3 상단 텍스트(컬러,폰트,글정렬조정)
  p {
    color: ${({ theme }) => theme.lightblack};
    font-family: SCD-4;
    text-align: center;
  }
  //섹션3 하단 텍스트(컬러,폰트,글정렬조정)
  & > p:nth-child(2) {
    font-size: ${({ theme }) => theme.fontSize_25};
    margin-bottom: 45px;
  }
  //섹션3 이미지 콘텐츠(크기,위치조정)
  & > img {
    width: 100%;
    height: 509px;
    margin-bottom: 45px;
  }
  //섹션3 하단 텍스트(컬러,폰트조정)
  & > p:nth-child(4) {
    font-family: YANGJIN;
    font-size: ${({ theme }) => theme.fontSize_30};
    //섹션3 포인트 텍스트(컬러,폰트조정)
    & > span {
      font-size: ${({ theme }) => theme.fontSize_30};
      color: ${({ theme }) => theme.green};
    }
  }
`;

const Introsec3 = () => {
  return (
    <Section3>
      {/*상단 타이틀 */}
      <h1>
        배부르게 <span>지키는 환경</span>
      </h1>
      {/* 상단 텍스트 */}
      <p>
        상품 가치가 낮다는 이유로 판매되지 않고 버려지는 음식물 쓰레기의 양이
        <br />
        전 세계 음식물 소비량의 3분의 1인 13억 톤에 달한다니,
        <br />그 심각성이 짐작이 가나요?
      </p>
      {/* 이미지 */}
      <img src="http://localhost:8080/intro/Intro_sec3_img.png" alt="sec3_img"></img>
      {/*하단 텍스트*/}
      <p>
        {/* 하단 포인트 텍스트 */}
        <span>못난이 농산물</span>을 이용한다면
        <br />
        음식물 쓰레기와 농산물 폐기가 줄어들어 환경을 보호할 수 있어요 !
      </p>
    </Section3>
  );
};
//end

export default Introsec3;
