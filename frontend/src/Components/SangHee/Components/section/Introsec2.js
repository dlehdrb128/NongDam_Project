import '../../../../App/App.css';
import { Common } from '../Common';
import styled from 'styled-components';

//color,font Asset
const { Maincol, text, fontSize_50, fontSize_30, fontSize_20 } = Common;

//section2
const Section2 = styled.section`
  width: inherit;
  margin-bottom: 18rem;
  //title
  & > h1 {
    font-family: YANGJIN;
    font-size: ${fontSize_50};
    margin-bottom: 4rem;
    text-align: right;
    color: ${text};
    letter-spacing: 0.4rem;
    & > span {
      font-size: ${fontSize_50};
      color: ${Maincol};
    }
  }
  //sec2_contents
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    //text
    & > div:nth-child(1) {
      & > div {
        margin-bottom: 6rem;
        color: ${text};
        & > p {
          word-break: keep-all;
          font-size: ${fontSize_20};
          width: 50.4rem;
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
        line-height: 4.48rem;
        color: ${text};
        letter-spacing: 0.15rem;
        & > span {
          color: ${Maincol};
          font-size: ${fontSize_30};
        }
      }
    }
    //img
    & > img {
      width: 70rem;
      height: 65rem;
    }
  } //common
  p {
    color: ${text};
    letter-spacing: 0.025rem;
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
          src='https://lh3.googleusercontent.com/drive-viewer/AJc5JmRvnF9TrzFhLZSAjuPA5lTWUZR1BwnyhXRf_dtKYTxj43HU5_7qQMQ1DTha-yR4HaZm-L_vvDw=w1915-h968'
          alt='sec2_img'
        ></img>
      </div>
    </Section2>
  );
};

export default Introsec2;
