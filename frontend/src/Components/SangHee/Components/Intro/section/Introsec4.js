import '../../../../../App/App.css';
import { Theme } from '../../../../../theme/theme'
import styled from 'styled-components';

//color,font Asset
const { green, lightblack, fontSize_60, fontSize_50, fontSize_30, fontSize_20 } = Theme;

//Intro 섹션4컨테이너 (너비,위치조정)
const Section4 = styled.section`
  width: inherit;
  margin-bottom: 180px;
   //섹션4 왼쪽상단 타이틀(폰트,폰트사이즈,위치,컬러조정) 
  & > h1 {
    font-family: YANGJIN;
    font-size: ${fontSize_50};
    margin-bottom: 40px;
    color: ${lightblack};
  }
 //섹션4 콘텐츠 컨테이너(위치조정)
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    //섹션4 콘텐츠 왼쪽 이미지(크기조정)
    & > img {
      width: 700px;
      height: 650px;
    }
    //섹션4 콘텐츠 텍스트 콘텐츠 컨테이너
    & > div:nth-child(2) {
      //섹션4 텍스트 컨테이너(글씨컬러,위치)
      & > div {
        margin-bottom: 60px;
        color: ${Theme.lightblack};
        //섹션4 텍스트(내용,글정렬,폰트,너비조정)
        & > p {
          word-break: keep-all;
          font-size: ${fontSize_20};
          width: 464px;
          text-align: right;
          font-family: SCD-4;
        }
        //섹션4 텍스트 위치조정
        & > p:nth-child(1) {
          margin-bottom: 30px;
        }
      }
      //섹션4 포인트텍스트(폰트,컬러,텍스트정렬)
      & > h1 {
        font-family: YANGJIN;
        font-size: ${fontSize_30};
        text-align: right;
        color: ${green};
        margin-bottom: 60px;
      }
      //섹션4 포인트텍스트2(폰트,컬러조정)
      & > h1:nth-child(3) {
        font-size: ${fontSize_60};
        color: ${lightblack};
        //섹션4 포인트텍스트2_그레이(폰트,컬러조정)
        & > span {
          font-size: ${fontSize_60};
          color: ${green};
        }
      }
    }
  }
  //common
  p {
    color: ${lightblack};
  }
`;

const Introsec4 = () => {
  return (
    <Section4>
      {/* 왼쪽상단 타이틀 */}
      <h1>가벼운 가격 가벼운 부담</h1>
      {/* 섹션4 콘텐츠컨테이너 */}
      <div>
        {/* 섹션4 콘텐츠 왼쪽 이미지 */}
        <img
          src='/img/Intro_sec4_img.png'
          alt='sec4_img'
        ></img>
        {/* 섹션4 텍스트 콘텐츠 컨테이너*/}
        <div>
          {/* 섹션4 텍스트 컨테이너 */}
          <div>
            {/* 섹션4 텍스트 */}
            <p>
              기존 시세 대비 최소 30% 이상!
              <br />
              농가의 가외 소득원으로 분류되기 때문에 못난이 농산물은 도매시장을
              거치지 않을 뿐더러 저렴한 가격에 구매할 수 있습니다!
            </p>
          </div>
          {/* 섹션4 포인트 텍스트 */}
          <h1>건강한 채소생활</h1>
          <h1>
            <span>농담</span>과 함께!
          </h1>
        </div>
      </div>
    </Section4>
  );
};
//end


export default Introsec4;
