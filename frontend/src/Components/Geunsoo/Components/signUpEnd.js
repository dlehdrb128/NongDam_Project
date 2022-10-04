import styled from "styled-components";
import "../../../../src/index.css";
import Theme from "../../../theme/theme";
const SignUpEnd = () => {
  const SignUpEndBox = styled.div`
    width: 1230px;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 100px;
    & > h2 {
      font-size: 2rem;
      font-family: NanumGothic-ExtraBold;
      color: ${Theme.green};
    }
    & > div:nth-child(2) > img {
      width: 150px;
    }
    & > div:nth-child(4) {
      text-align: center;
      font-size: 1.5rem;
      font-family: NanumGothic-Regular;
      color: ${Theme.gray};
    }
    & > a:nth-child(5) {
      text-decoration: none;
      width: 150px;
      height: 50px;
      border-radius: 10px;
      background-color: ${Theme.green};
      color: ${Theme.realWhite};
      display: flex;
      font-size: 1.5rem;
      font-family: NanumGothic-ExtraBold;
      justify-content: center;
      align-items: center;
    }
  `;
  const SignUpEndHead = styled.div`
    font-size: 3rem;
    font-family: lotteHappyBold;
    color: ${Theme.lightBlack};
  `;
  return (
    <>
      <SignUpEndBox>
        <SignUpEndHead>회원 가입 완료</SignUpEndHead>
        <div>
          <img src="/img/logo-2.svg" alt="이미지 없음"></img>
        </div>
        <h2>회원가입이 정상적으로 완료되었습니다 !</h2>
        <div>
          농담 회원 가입을 축하드립니다.
          <br />
          다양한 정보와 푸짐한 혜택으로 보답하겠습니다.
        </div>
        <a href="/">메인으로 이동</a>
      </SignUpEndBox>
    </>
  );
};
export default SignUpEnd;
