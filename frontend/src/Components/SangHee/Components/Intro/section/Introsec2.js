import '../../../../../App/App.css';
import { Theme } from '../../../../../theme/theme'
import styled from 'styled-components';

//color,font Asset
const { green, lightblack, fontSize_50, fontSize_30, fontSize_20 } = Theme;

//section2
const Section2 = styled.section`
  width: inherit;
  margin-bottom: 180px;
  //title
  & > h1 {
    font-family: YANGJIN;
    font-size: ${fontSize_50};
    margin-bottom: 40px;
    text-align: right;
    color: ${lightblack};
    & > span {
      font-size: ${fontSize_50};
      color: ${green};
    }
  }
  //sec2_contents
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    //text
    & > div:nth-child(1) {
      & > div {
        margin-bottom: 60px;
        color: ${lightblack};
        & > p {
          word-break: keep-all;
          font-size: ${fontSize_20};
          width: 504px;
          text-align: left;
          font-family: SCD-4;
        }
        & > p:nth-child(1) {
          margin-bottom: 3rem;
        }
      }
      //bold text
      & > h1 {
        font-family: YANGJIN;
        font-size: ${fontSize_30};
        text-align: left;
        color: ${lightblack};
        & > span {
          color: ${green};
          font-size: ${fontSize_30};
        }
      }
    }
    //img
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
      <h1>
        그<span>'푸드 리퍼브'</span>들어봤는감?
      </h1>
      <div>
        <div>
          <div>
            <p>
              소비자의 기준에 못 미치는 ‘부족한 외모’라는 이유로 버려진 농산물을
              적극적으로 구매하고, 또 그 농산물을 활용해 훌륭한 식품으로
              재탄생시키는 트렌드를 의미합니다.
            </p>
          </div>
          <h1>
            이게 글쎄
            <br />
            <span>환경</span>에도 도움이 되요 !
          </h1>
        </div>
        <img
          src='/img/Intro_sec2_img.png'
          alt='sec2_img'
        ></img>
      </div>
    </Section2>
  );
};

export default Introsec2;
