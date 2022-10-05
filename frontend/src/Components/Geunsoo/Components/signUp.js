import styled from "styled-components";
import Theme from "../../../theme/theme";
const SignUpParent = styled.form`
  /* 회원가입창 부모 설정 */
  width: 1230px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 150px;
  & > h1 {
    font-size: 3rem;
    font-family: YANGJIN;
    color: ${Theme.lightblack};
  }
  & > h2 {
    width: inherit;
    text-align: left;
    font-size: 2rem;
    font-family: YANGJIN;
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
  /* 회원구분 */
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
  /* 왼쪽 회원구분 */
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
  /* 기본정보 */
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
    /* 주소 */
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
  & > div:nth-child(7) {
    /* 휴대전화 */
    & > button {
      width: 150px;
      height: 30px;
      border-radius: 3px;
      border: none;
      background-color: ${Theme.green};
      color: ${Theme.realWhite};
      font-family: SCD-3;
      font-size: 1.5rem;
    }
  }
  & > div:nth-child(9) {
    /* 평생회원 */
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
  /* 왼쪽 목록 작은 사이즈 */
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
  /* 왼쪽 목록 큰 사이즈 */
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
  /* 작성란 */
  width: 300px;
  height: 30px;
  position: relative;
  left: 10px;
  padding-left: 10px;
  font-size: 1.5rem;
  font-family: SCD-3;
`;
const Phone = styled.input`
  /* 폰번호 작성란 */
  width: 300px;
  height: 30px;
  color: ${Theme.lightblack};
  font-size: 1.5rem;
  font-family: SCD-3;
  padding-left: 10px;
  margin-left: 10px;
`;
const MoreInfo = styled.div`
  /* 추가정보 */
  width: inherit;
  height: inherit;
  border-top: 2px solid ${Theme.lightblack};
  border-bottom: 2px solid ${Theme.lightblack};
  & > div:nth-child(1) {
    border-bottom: 2px solid ${Theme.lightblack};
    display: flex;
    align-items: center;
    color: ${Theme.lightblack};
    font-size: 1.5rem;
    font-family: SCD-3;
    & > input:nth-child(2) {
      width: 180px;
      height: 30px;
      padding-left: 10px;
      margin-left: 10px;
      color: ${Theme.lightblack};
      font-size: 1.5rem;
      font-family: SCD-3;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    align-items: center;
  }
`;
const Terms = styled.div`
  /* 약관동의 */
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
const InputClick = styled.input`
  /* 선택 버튼 */
  accent-color: green;
`;
const SignUp = () => {
  return (
    <SignUpParent
      action="http://localhost:3000/login"
      acceptCharset="utf-8"
      name="sign-up"
      method="get"
    >
      {/* 회원가입창 부모 설정 */}
      <h1>회원가입</h1>
      <br />
      <MemberType>
        {/* 회원구분  */}
        <SideBar>
          {/* 왼쪽 회원구분 */}
          회원구분<span>*</span>
        </SideBar>
        <div>
          <InputClick type={"radio"} name="member"></InputClick>
          {/* 선택 버튼 */}
          &nbsp;개인회원 &nbsp;&nbsp;
          <InputClick type={"radio"} name="member"></InputClick>
          &nbsp;사업자회원
        </div>
      </MemberType>
      <br />
      <h2>기본정보</h2>
      <br />
      <BasicInfo>
        {/* 기본정보 */}
        <div>
          <MiddleBox>
            {/* 왼쪽 목록 작은 사이즈 */}
            아이디<span>*</span>
          </MiddleBox>
          <InputText></InputText>
          {/* 작성란 */}
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
          {/* 왼쪽 목록 큰 사이즈 */}
          <div>
            <div>
              <input type="text" placeholder="우편번호"></input>
              &nbsp;&nbsp;&nbsp;
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
          <Phone
            type={"text"}
            placeholder="전화번호 입력('-'제외)"
            maxLength={11}
          />
        </div>
        <div>
          <MiddleBox>
            휴대전화<span>*</span>
          </MiddleBox>
          <Phone
            type={"text"}
            placeholder="핸드폰번호 입력('-'제외)"
            maxLength={11}
          />
          {/* 폰번호 작성란 */}
          &nbsp;&nbsp;&nbsp;
          <button>인증번호받기</button>
        </div>
        <div>
          <MiddleBox>
            이메일<span>*</span>
          </MiddleBox>
          <InputText></InputText>
        </div>
        <div>
          <MiddleBox>평생회원</MiddleBox>
          <InputClick type={"radio"} name="agree"></InputClick>
          &nbsp;동의함&nbsp;&nbsp;
          <InputClick type={"radio"} name="agree"></InputClick>
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
        {/* 추가정보 */}
        <div>
          <MiddleBox>생년월일</MiddleBox>
          <input type={"date"}></input>
          &nbsp;&nbsp;&nbsp;
          <InputClick type={"radio"} name="calendar" />
          &nbsp;양력 &nbsp;&nbsp;
          <InputClick type={"radio"} name="calendar" />
          &nbsp;음력
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
        {/* 약관동의 */}
        <div>
          <InputClick type={"checkbox"}></InputClick>
          &nbsp;&nbsp;
          <p>
            이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
            동의합니다.
          </p>
        </div>
        <div>
          <InputClick type={"checkbox"}></InputClick>
          &nbsp;&nbsp;
          <p>[필수] 이용약관 동의</p>
        </div>
        <div>
          <InputClick type={"checkbox"}></InputClick>
          &nbsp;&nbsp;
          <p>[필수] 개인정보 수집 및 이용 동의</p>
        </div>
        <div>
          <InputClick type={"checkbox"}></InputClick>
          &nbsp;&nbsp;
          <p>[선택] SMS 수신을 동의하십니까?</p>
          &nbsp;&nbsp;&nbsp;
          <InputClick type={"checkbox"}></InputClick>
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
