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
const SignUpParent = styled.form`
  width: 1230px;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 150px;
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
  & > button {
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 3px;
    color: ${Theme.realWhite};
    background-color: ${Theme.green};
    font-size: 1.5rem;
    font-family: SCD-3;
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
    font-family: SCD-3;
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
  & > div {
    width: inherit;
    height: inherit;
    border-top: 2px solid ${Theme.lightblack};
    display: flex;
    align-items: center;
    & > p {
      color: ${Theme.lightblack};
      font-size: 1rem;
      font-family: SCD-5;
      position: relative;
      left: 20px;
    }
  }
  & > div:nth-child(5) {
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      & > div:nth-child(1) {
        padding-left: 10px;
        display: flex;
        & > input {
          width: 150px;
          height: 30px;
          padding-left: 10px;
          font-size: 1.5rem;
          font-family: SCD-3;
        }
        & > button {
          width: 120px;
          height: 30px;
          background-color: ${Theme.green};
          border: none;
          border-radius: 3px;
          color: ${Theme.realWhite};
          font-size: 1.5rem;
          font-family: SCD-3;
        }
      }
    }
  }
  & > div:nth-child(9) {
    width: inherit;
    height: inherit;
    border-bottom: 2px solid ${Theme.lightblack};
    font-family: SCD-3;
    font-size: 1.5rem;
    & > input {
      margin-left: 11px;
    }
  }
`;
const MiddleBox = styled.div`
  width: 200px;
  height: 50px;
  color: ${Theme.lightblack};
  font-size: 2rem;
  background-color: #ddd;
  border-right: 2px solid ${Theme.lightblack};
  padding-left: 10px;
  display: flex;
  align-items: center;
  & > span {
    font-size: 2rem;
    color: red;
  }
`;
const LongBox = styled.div`
  width: 200px;
  height: 150px;
  color: ${Theme.lightblack};
  font-size: 2rem;
  background-color: #ddd;
  border-right: 2px solid ${Theme.lightblack};
  padding-top: 10px;
  padding-left: 10px;
  display: flex;
`;
const InputText = styled.input`
  width: 300px;
  height: 30px;
  position: relative;
  left: 10px;
  padding-left: 10px;
  font-size: 1.5rem;
  font-family: SCD-3;
`;
const MoreInfo = styled.div`
  width: inherit;
  height: inherit;
  border-top: 2px solid ${Theme.lightblack};
  border-bottom: 2px solid ${Theme.lightblack};
  & > div:nth-child(1) {
    border-bottom: 2px solid ${Theme.lightblack};
  }
  & > div:nth-child(2) {
    display: flex;
    align-items: center;
  }
`;
const Terms = styled.div`
  width: inherit;
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${Theme.lightblack};
  & > div {
    height: 50px;
    border-bottom: 1px solid ${Theme.lightblack};
    display: flex;
    align-items: center;
    padding-left: 10px;
    & > p {
      font-size: 1.5rem;
      font-family: SCD-3;
      color: ${Theme.lightblack};
    }
  }
  & > div:nth-child(1) {
    height: 80px;
    & > p {
      font-size: 2rem;
      font-family: SCD-5;
      color: ${Theme.lightblack};
    }
  }
`;
const SignUp = () => {
  return (
    <SignUpParent
      action="http://localhost:3000/login"
      acceptCharset="utf-8"
      name="sign-up"
      method="get"
    >
      <h1>회원가입</h1>
      <br />
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
      <br />
      <h2>기본정보</h2>
      <br />
      <BasicInfo>
        <div>
          <MiddleBox>
            아이디<span>*</span>
          </MiddleBox>
          <InputText></InputText>
          <p>(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)</p>
        </div>
        <div>
          <MiddleBox>
            비밀번호<span>*</span>
          </MiddleBox>
          <InputText></InputText>
        </div>
        <div>
          <MiddleBox>
            비밀번호 확인<span>*</span>
          </MiddleBox>
          <InputText></InputText>
        </div>
        <div>
          <MiddleBox>
            이름<span>*</span>
          </MiddleBox>
          <InputText></InputText>
        </div>
        <div>
          <LongBox>주소</LongBox>
          <div>
            <div>
              <input type="text" placeholder="우편번호"></input>
              &nbsp;&nbsp;
              <button>주소검색</button>
            </div>
            <br />
            <div>
              <InputText placeholder="기본주소"></InputText>
              <br />
              <br />
              <InputText placeholder="나머지 주소(선택 입력 가능)"></InputText>
            </div>
          </div>
        </div>
        <div>
          <MiddleBox>일반전화</MiddleBox>
        </div>
        <div>
          <MiddleBox>
            휴대전화<span>*</span>
          </MiddleBox>
        </div>
        <div>
          <MiddleBox>
            이메일<span>*</span>
          </MiddleBox>
          <InputText></InputText>
        </div>
        <div>
          <MiddleBox>평생회원</MiddleBox>
          <input type={"radio"}></input>
          &nbsp;동의함&nbsp;&nbsp;
          <input type={"radio"}></input>
          &nbsp;동의안함
          <br />
          <p>
            -평생회원으로 가입하시면 농담 회원 탈퇴시까지는 휴면회원으로
            전환되지 않으며, 고객님의 개인정보가 탈퇴시까지 안전하게 보관됩니다.
          </p>
        </div>
      </BasicInfo>
      <br />
      <h2>추가정보</h2>
      <br />
      <MoreInfo>
        <div>
          <MiddleBox>생년월일</MiddleBox>
          <div></div>
        </div>
        <div>
          <MiddleBox>추천인 아이디</MiddleBox>
          <InputText></InputText>
        </div>
      </MoreInfo>
      <br />
      <h2>약관동의</h2>
      <br />
      <Terms>
        <div>
          <input type={"checkbox"}></input>
          &nbsp;&nbsp;
          <p>
            이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
            동의합니다.
          </p>
        </div>
        <div>
          <input type={"checkbox"}></input>
          &nbsp;&nbsp;
          <p>[필수] 이용약관 동의</p>
        </div>
        <div>
          <input type={"checkbox"}></input>
          &nbsp;&nbsp;
          <p>[필수] 개인정보 수집 및 이용 동의</p>
        </div>
        <div>
          <input type={"checkbox"}></input>
          &nbsp;&nbsp;
          <p>[선택] SMS 수신을 동의하십니까?</p>
          &nbsp;&nbsp;&nbsp;
          <input type={"checkbox"}></input>
          &nbsp;&nbsp;
          <p>[선택] 이메일 수신을 동의하십니까?</p>
        </div>
      </Terms>
      <br />
      <br />
      <button>회원가입</button>
    </SignUpParent>
  );
};
export default SignUp;
