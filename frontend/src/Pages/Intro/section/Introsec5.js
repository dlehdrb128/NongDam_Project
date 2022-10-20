import styled from "styled-components";
import { StyledButton } from "../../../Theme/theme";

//color,font Asset

//Intro 섹션5컨테이너 (너비,위치조정)
const Section5 = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //섹션5 중간 타이틀(폰트,폰트사이즈,위치,컬러조정)
  & > h1 {
    font-family: YANGJIN;
    font-size: ${({ theme }) => theme.fontSize_60};
    color: ${({ theme }) => theme.orange};
    text-align: center;
    margin-bottom: 30px;
  }
  //섹션5 콘텐츠 컨테이너(너비,위치,백그라운드설정)
  & > div:nth-child(2) {
    width: 100%;
    height: 584px;
    background: url("http://localhost:8080/intro/Intro_sec5_img.png") no-repeat center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    //섹션5 텍스트 콘텐츠 컨테이너(너비,위치,백그라운드설정)
    & > div {
      background: rgba(21, 21, 21, 0.71);
      width: 685px;
      height: 583px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      //섹션5 포인트 텍스트(폰트,컬러,글정렬,위치조정)
      & > h1 {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize_40};
        font-family: YANGJIN;
        color: ${({ theme }) => theme.green};
        margin-bottom: 80px;
        justify-content: center;
        //섹션5 포인트 텍스트(폰트,컬러조정)
        & > span {
          font-size: ${({ theme }) => theme.fontSize_40};
          color: ${({ theme }) => theme.white};
        }
      }
      //섹션5 텍스트(폰트,글정렬,컬러)
      & > p {
        width: 412px;
        word-break: keep-all;
        font-family: SCD-4;
        font-size: ${({ theme }) => theme.fontSize_25};
        color: ${({ theme }) => theme.white};
        text-align: center;
      }
    }
  }
`;

const Introsec5 = () => {
  return (
    <Section5>
      {/* 오른쪽 상단 타이틀 */}
      <h1>혹시 도움이 필요하신가요?</h1>
      {/* 섹션5 콘텐츠 컨테이너 */}
      <div>
        {/* 섹션5 텍스트 콘텐츠 컨테이너 */}
        <div>
          {/* 섹션5 포인트 텍스트 */}
          <h1>
            WE SAVE# 농가
            <br />
            <span>위기에 처한 밭을 구해요</span>
          </h1>
          {/* 섹션5 텍스트*/}
          <p>
            작황이 좋지 않아 갈아엎을 위기에 처한 밭을 구합니다.
            <br /> 농가와 소비자를 웃게 할 수 있다면 우리는 어디든 달려갑니다.
            <br /> 주위에 위기의 밭이 있으신가요?
            <br /> 여러분의 제보를 기다립니다!
          </p>
        </div>
      </div>
      {/* 하단 버튼 */}
      <StyledButton wd="400px" ht="80px" fs="3rem">
        제보하러 가기
      </StyledButton>
    </Section5>
  );
};
//end

export default Introsec5;
