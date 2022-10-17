import styled from "styled-components";
const SignUpEndBox = styled.div`
  /* 회원가입 완료창 전체 설정값 */
  width: 1230px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 100px;
  & > h2 {
    /* "회원가입이 정상적으로 완료되었습니다!" */
    font-size: 2rem;
    font-family: SCD-3;
    color: ${({ theme }) => theme.green};
  }
  & > div:nth-child(2) > img {
    /* 농담 로고 */
    width: 150px;
  }
  & > div:nth-child(4) {
    /* 추가글 폰트 */
    text-align: center;
    font-size: 1.5rem;
    font-family: SCD-3;
    color: ${({ theme }) => theme.gray};
  }
  & > a:nth-child(5) {
    /* 메인으로 이동하는 버튼 */
    text-decoration: none;
    width: 150px;
    height: 50px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.green};
    color: ${({ theme }) => theme.realWhite};
    display: flex;
    font-size: 1.5rem;
    font-family: SCD-5;
    justify-content: center;
    align-items: center;
  }
`;
const SignUpEndHead = styled.div`
  /* 최상단 "회원가입 완료" 폰트 */
  font-size: 3rem;
  font-family: YANGJIN;
  color: ${({ theme }) => theme.lightblack};
`;
const SignUpEnd = () => {
  return (
    <>
      <SignUpEndBox>
        {/* 회원가입 완료창 전체 설정값 */}
        <SignUpEndHead>회원 가입 완료</SignUpEndHead>
        {/* 최상단 "회원가입 완료" 폰트 */}
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
