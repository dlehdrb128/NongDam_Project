import styled from "styled-components";

//color,font Asset

//Intro 섹션1 컨테이너 (너비,위치조정)
const Section1 = styled.section`
  width: inherit;
  margin-bottom: 180px;

  //섹션1 왼쪽상단 타이틀(폰트,폰트사이즈,위치,컬러조정)
  & > h1 {
    font-family: YANGJIN;
    font-size: ${({ theme }) => theme.fontSize_50};
    margin-bottom: 40px;
    color: ${({ theme }) => theme.lightblack};
  }

  //섹션1 콘텐츠 컨테이너(위치조정)
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    //섹션1 콘텐츠 왼쪽 이미지(크기조정)
    & > img {
      width: 700px;
      height: 720px;
    }
    //섹션1 콘텐츠 텍스트 콘텐츠 컨테이너
    & > div:nth-child(2) {
      //섹션1 텍스트 컨테이너(글씨컬러,위치)
      & > div {
        margin-bottom: 60px;
        color: ${({ theme }) => theme.lightblack};
        //섹션1 텍스트(내용,글정렬,폰트,너비조정)
        & > p {
          word-break: keep-all;
          font-size: ${({ theme }) => theme.fontSize_20};
          width: 504px;
          text-align: right;
          font-family: SCD-4;
        }
        //섹션1 텍스트 위치조정
        & > p:nth-child(1) {
          margin-bottom: 3rem;
        }
      }
      //섹션1 포인트텍스트(폰트,컬러,텍스트정렬)
      & > h1 {
        font-family: YANGJIN;
        font-size: ${({ theme }) => theme.fontSize_30};
        text-align: right;
        color: ${({ theme }) => theme.green};
        //섹션1 포인트텍스트2(,텍스트정렬)
        & > p {
          font-size: ${({ theme }) => theme.fontSize_30};
        }
      }
    }
  }
  //Common
  p {
    color: ${({ theme }) => theme.lightblack};
  }
`;

const Introsec1 = () => {
  return (
    <Section1>
      {/* 왼쪽상단 타이틀 */}
      <h1>워매~ 아까운거</h1>
      {/* 섹션1 콘텐츠컨테이너 */}
      <div>
        {/* 섹션1 콘텐츠 왼쪽 이미지 */}
        <img
          src="https://lh3.googleusercontent.com/drive-viewer/AJc5JmT3pV0ORYOOLX4j1iEqb1exodDLsoe_8JNfG90iAQhgeMmp56Di2T01LXMsqKDQ8zpb3UAgabI=w1920-h966"
          alt="sec1_img"
        ></img>
        {/* 섹션1 텍스트 콘텐츠 컨테이너*/}
        <div>
          {/* 섹션1 텍스트 컨테이너 */}
          <div>
            {/* 섹션1 텍스트 */}
            <p>
              못난이 농산물이 버려지는 근본적인 원인은 농가의 소득문제 입니다.
              가공공장으로 판로가 존재하지만 낮은 수매단가로 인해 충분한 수익을
              기대하기 어렵습니다.
            </p>
            <p>
              갈아엎는게 속 편한 구조이니<br></br>
              자연히 폐기가 늘어나는 구조입니다.
            </p>
          </div>
          {/* 섹션1 포인트 텍스트 */}
          <h1>
            못난이 농산물
            <br />
            <p>어떻게 활용해야 할까요?</p>
          </h1>
        </div>
      </div>
    </Section1>
  );
};
//end

export default Introsec1;
