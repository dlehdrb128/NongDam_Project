import styled from "styled-components";
import Theme from "../../../theme/theme";
// const Theme = {
//   green: "rgba(128,195,66,1)",
//   lightgray: "rgba(192,192,192,1)",
//   gray: "rgba(149,149,149,1)",
//   lightblack: "rgba(82,82,82,1)",
//   white: "rgba(242,242,242,1)",
//   orange: "rgba(243,152,0,1)",
//   red: "rgba(255,0,0,1)",
//   black: "rgba(0, 0, 0, 1)",
//   realWhite: "rgba(255, 255, 255, 1)",

//   fontSize_60: "6rem",
//   fontSize_50: "5rem",
//   fontSize_40: "4rem",
//   fontSize_30: "3rem",
//   fontSize_25: "2.5rem",
//   fontSize_20: "2rem",
//   btnTransition: "ease-in 0.3s",
// };
const SignUp = () => {
  const SignUpParent = styled.form`
    width: 1230px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    & > h1 {
      font-size: 3rem;
      font-family: lotteHappyBold;
      color: ${Theme.lightblack};
    }
    & > h2 {
      width: inherit;
      text-align: left;
      font-size: 2rem;
      font-family: lotteHappyBold;
      color: ${Theme.lightblack};
    }
  `;
  const MemberType = styled.div`
    width: 1230px;
    height: 50px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    border-top: 2px solid ${Theme.lightblack};
    border-bottom: 2px solid ${Theme.lightblack};
    & > div:nth-child(2) {
      width: 1030px;
      font-size: 1.5rem;
      color: ${Theme.lightblack};
      display: flex;
      /* justify-content: center; */
      align-items: center;
      padding-left: 10px;
    }
  `;
  const SideBar = styled.div`
    width: 200px;
    height: inherit;
    color: ${Theme.lightblack};
    font-size: 2rem;
    background-color: #ddd;
    border-top: 2px solid ${Theme.lightblack};
    border-bottom: 2px solid ${Theme.lightblack};
    border-right: 2px solid ${Theme.lightblack};
    display: flex;
    align-items: center;
    padding-left: 10px;
    & > span {
      color: red;
      font-size: inherit;
    }
  `;
  const BasicInfo = styled.div`
    width: 1230px;
    height: inherit;
    display: flex;
    flex-direction: column;
  `;
  const SignUpInfo = styled.div`
    width: 1030px;

    border-top: 2px solid ${Theme.lightblack};
    border-bottom: 2px solid ${Theme.lightblack};
  `;
  return (
    <SignUpParent
      action="http://localhost:3000/login"
      acceptCharset="utf-8"
      name="sign-up"
      method="get"
    >
      <h1>회원가입</h1>
      <MemberType>
        <SideBar>
          회원구분<span>*</span>
        </SideBar>
        <div>
          <input type={"radio"}></input>
          &nbsp;개인회원 &nbsp;&nbsp;
          <input type={"radio"}></input>
          &nbsp;사업자회원
        </div>
      </MemberType>
      <h2>기본정보</h2>
      <BasicInfo>
        <SideBar>
          아이디<span>*</span>
        </SideBar>
        <div></div>
        <SideBar>
          비밀번호<span>*</span>
        </SideBar>
        <div></div>
        <SideBar>
          비밀번호 확인<span>*</span>
        </SideBar>
        <div></div>
        <SideBar>
          이름<span>*</span>
        </SideBar>
        <div></div>
        <SideBar>주소</SideBar>
        <div></div>
        <SideBar>일반전화</SideBar>
        <div></div>
        <SideBar>
          휴대전화<span>*</span>
        </SideBar>
        <div></div>
        <SideBar>
          이메일<span>*</span>
        </SideBar>
        <div></div>
        <SideBar>평생회원</SideBar>
        <div></div>
      </BasicInfo>
    </SignUpParent>
  );
};
export default SignUp;