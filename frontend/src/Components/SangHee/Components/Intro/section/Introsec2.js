import '../../../../../App/App.css';
import { Theme } from '../../../../../theme/theme'
import styled from 'styled-components';

//color,font Asset
const { green, lightblack, fontSize_50, fontSize_30, fontSize_20 } = Theme;

//Intro 섹션2컨테이너 (너비,위치조정)
const Section2 = styled.section`
  width: inherit;
  margin-bottom: 180px;
  //섹션2 오른쪽 상단 타이틀(폰트,폰트사이즈,위치,컬러조정) 
  & > h1 {
    font-family: YANGJIN;
    font-size: ${fontSize_50};
    margin-bottom: 40px;
    text-align: right;
    color: ${lightblack};
    //섹션2 상단 타이틀 포인트 텍스트(폰트,컬러조정)
    & > span {
      font-size: ${fontSize_50};
      color: ${green};
    }
  }
   //섹션2 콘텐츠 컨테이너(위치조정)
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
   //섹션2 콘텐츠 텍스트 콘텐츠 컨테이너
    & > div:nth-child(1) {
      //섹션2 텍스트 컨테이너(글씨컬러,위치)
      & > div {
        margin-bottom: 60px;
        color: ${lightblack};
         //섹션2 텍스트(내용,글정렬,폰트,너비조정)
        & > p {
          word-break: keep-all;
          font-size: ${fontSize_20};
          width: 504px;
          text-align: left;
          font-family: SCD-4;
        }
         //섹션2 텍스트 위치조정
        & > p:nth-child(1) {
          margin-bottom: 3rem;
        }
      }
       //섹션2 포인트텍스트(폰트,컬러,텍스트정렬)
      & > h1 {
        font-family: YANGJIN;
        font-size: ${fontSize_30};
        text-align: left;
        color: ${lightblack};
        //섹션2 포인트텍스트2(,텍스트정렬)
        & > span {
          color: ${green};
          font-size: ${fontSize_30};
        }
      }
    }
    //섹션1 콘텐츠 오른쪽 이미지(크기조정)
    & > img {
      width: 700px;
      height: 650px;
    }
  } //common
  p {
    color: ${lightblack};
  }
`;

const Introsec2 = () => {
  return (
    <Section2>
      {/* 오른쪽 상단 타이틀 */}
      <h1>
        그<span>'푸드 리퍼브'</span>들어봤는감?
      </h1>
      {/* 섹션2 콘텐츠컨테이너 */}
      <div>
        {/* 섹션2 텍스트 콘텐츠 컨테이너*/}
        <div>
          <div>
            {/* 섹션2 텍스트 */}
            <p>
              소비자의 기준에 못 미치는 ‘부족한 외모’라는 이유로 버려진 농산물을
              적극적으로 구매하고, 또 그 농산물을 활용해 훌륭한 식품으로
              재탄생시키는 트렌드를 의미합니다.
            </p>
          </div>
          {/* 섹션2 포인트 텍스트 */}
          <h1>
            이게 글쎄
            <br />
            <span>환경</span>에도 도움이 되요 !
          </h1>
        </div>
        {/* 섹션2 콘텐츠 왼쪽 이미지 */}
        <img
          src='/img/Intro_sec2_img.png'
          alt='sec2_img'
        ></img>
      </div>
    </Section2>
  );
};
//end

export default Introsec2;
