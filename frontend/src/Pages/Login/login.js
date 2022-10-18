import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const LoginHeader = styled.div`
  /* 최상단 "로그인" 제목 값 */
  width: 1230px;
  height: 80px;
  text-align: center;
  font-size: 3rem;
  font-family: YANGJIN;
  color: ${({ theme }) => theme.lightblack};
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  margin-top: 80px;
`;
const LoginMain = styled.div`
  /* Header를 제외한 전체 설정값(감싸는 용도) */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px;
`;
const LoginResponse = styled.div`
  /* 로그인창 전체 부모 설정값 */
  width: 600px;
  height: 625px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
`;
const LoginBox = styled.input`
  /* 아이디 비밀번호 입력창 */
  width: 600px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.lightgray};
  margin: 10px;
  font-size: 2rem;
  font-family: SCD-3;
  padding-left: 20px;
`;
const OptionMenu = styled.div`
  /* 아이디 저장, checkbox, 아이디/비밀번호찾기 전체 설정값 */
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const IdOption = styled.div`
  /* 아이디 저장,checkbox 부모 설정값 */
  display: flex;
  justify-content: center;
  align-items: center;
  & > input {
    accent-color: green;
  }
`;
const LoginFind = styled.div`
  /* 아이디/비밀번호찾기 링크 부모 설정값 */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const A = styled.a`
  /* 아이디찾기, 비밀번호 찾기, 보안접속 링크 설정값 */
  text-decoration: none;
  color: ${({ theme }) => theme.lightblack};
  font-size: 1.5em;
  font-family: SCD-3;
`;
const P = styled.p`
  /* "아이디 저장", "|" 문자 설정값 */
  color: ${({ theme }) => theme.lightblack};
  font-size: 1.5rem;
  font-family: SCD-3;
  position: relative;
  bottom: 1px;
`;
const LoginButton = styled.button`
  /* 로그인 버튼 */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 60px;
  border: 1px solid ${({ theme }) => theme.green};
  border-radius: 10px;
  font-size: 2.5rem;
  font-family: SCD-5;
  text-decoration: none;
  background-color: ${({ theme }) => theme.green};
  color: white;
`;
const Security = styled.div`
  /* 보안접속 링크 전체 설정값 */
  width: 600px;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const SignupGuide = styled.div`
  /* 회원가입링크 전체 부모 설정값 */
  width: 600px;
  height: 120px;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;
const NongdamMember = styled.div`
  /* 아직 농담 회원이 아니신가요? */
  font-size: 2rem;
  font-family: SCD-3;
  color: ${({ theme }) => theme.lightblack};
  margin-bottom: 10px;
`;
const MemberBenefits = styled.div`
  /* 회원이 되시면 다양한 혜택을 누리실 수 있습니다. */
  font-size: 1.5rem;
  font-family: SCD-3;
  color: ${({ theme }) => theme.lightblack};
  margin-bottom: 5px;
`;
const SignupButton = styled.a`
  /* 회원가입 링크 버튼 */
  text-decoration: none;
  width: 150px;
  height: 50px;
  border: 1px solid ${({ theme }) => theme.green};
  border-radius: 5px;
  margin-top: 5px;
  color: ${({ theme }) => theme.green};
  display: flex;
  font-size: 1.5rem;
  font-family: SCD-3;
  justify-content: center;
  align-items: center;
`;
const SNSBox = styled.div`
  /* sns설명글 부모값설정 */
  width: 600px;
  height: 150px;
  text-align: center;
  text-align: left;
  font-size: 2rem;
  color: ${({ theme }) => theme.lightblack};
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const SNSLogin = styled.div`
  /* sns로그인 제목 */
  font-size: 2rem;
  font-family: SCD-3;
`;
const SignupPlease = styled.div`
  /* sns로그인(빨간글씨) 상세설명 */
  font-size: 1.5rem;
  color: ${({ theme }) => theme.red};
`;
const IconBox = styled.div`
  /* sns 아이콘 전채 부모 설정값 */
  display: flex;
  width: 200px;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
`;
const SNSIcon = styled.a`
  /* sns아이콘 원형모양 링크버튼 */
  width: 55px;
  height: 55px;
  border: 1px solid ${({ theme }) => theme.lightgray};
  border-radius: 100%;
  position: relative;
  right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const NaverLogo = styled.img`
  /* 네이버로고 */
  position: absolute;
  width: 55px;
  height: 55px;
`;
const KakaotalkLogo = styled.img`
  /* 카카오로고 */
  position: absolute;
  width: 40px;
  height: 40px;
`;
const AppleLogo = styled.img`
  /* 애플로고 */
  position: absolute;
  left: 6px;
  top: 5px;
  width: 40px;
  height: 40px;
`;

const Login = () => {
  const navigate = useNavigate();
  // const [inputId, setInputId] = useState("");
  // const [inputPW, setInputPw] = useState("");

  // const handleInputId = (e) => {
  //   setInputId(e.target.value);
  // };
  // const handleInputPw = (e) => {
  //   setInputPw(e.target.value);
  // };

  // const onClickLogin = () => {
  //   console.log("click login");
  // };
  // if (data.id === inputId) {
  //   console.log("ㅇㅇ");
  // }
  // if (data.password === inputPW) {
  //   console.log("yes");
  // }

  const login = async (e) => {
    e.preventDefault();
    let loginData = {
      id: e.target[0].value,
      password: e.target[1].value,
    };
    let tryLogin = await axios.post(
      "http://localhost:8080/login/attempt",
      loginData
    );
    if (tryLogin.data.login === "성공") {
      navigate("/");
    }
    try {
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <LoginHeader>로그인</LoginHeader>
      {/*최상단 "로그인" 제목 값*/}
      <LoginMain>
        {/* Header를 제외한 전체 설정값(감싸는 용도) */}
        <LoginResponse>
          {/* 로그인창 전체 부모 설정값 */}
          <form onSubmit={login}>
            <LoginBox type="text" placeholder="아이디" name="id"></LoginBox>
            {/* 아이디 입력창 */}
            <LoginBox
              type="password"
              placeholder="비밀번호"
              name="password"
            ></LoginBox>
            {/* 비밀번호 입력창 */}
            <OptionMenu>
              {/* 아이디 저장, checkbox, 아이디/비밀번호찾기 전체 설정값 */}
              <IdOption>
                {/* 아이디 저장,checkbox 부모 설정값 */}
                <input type="checkbox"></input>
                <P>&nbsp;아이디 저장</P>
              </IdOption>
              <LoginFind>
                {/* 아이디/비밀번호찾기 링크 부모 설정값 */}
                <A href="http://naver.com">
                  {/* 아이디찾기 링크 설정값 */}
                  아이디 찾기
                </A>
                <P>
                  {/* "아이디 저장", "|" 문자 설정값 */}
                  &nbsp;|&nbsp;
                </P>
                <A href="http://naver.com">
                  {/* 비밀번호 찾기 링크 설정값 */}
                  비밀번호 찾기
                </A>
              </LoginFind>
            </OptionMenu>
            <LoginButton>
              {/* 로그인 버튼 */}
              로그인
            </LoginButton>
          </form>
          <Security>
            {/* 보안접속 링크 전체 설정값 */}
            <P>&nbsp;🔒&nbsp;</P>
            <A href="http://naver.com">
              {/* 아이디찾기, 비밀번호 찾기, 보안접속 링크 설정값 */}
              보안접속
            </A>
          </Security>
          <SignupGuide>
            {/* 회원가입링크 전체 부모 설정값 */}
            <NongdamMember>아직 농담 회원이 아니신가요?</NongdamMember>
            <MemberBenefits>
              회원이 되시면 다양한 혜택을 누리실 수 있습니다.
            </MemberBenefits>
            <SignupButton href="/signUp">
              {/* 회원가입 링크 버튼 */}
              회원가입
            </SignupButton>
          </SignupGuide>
          <SNSBox>
            {/* sns설명글 부모값설정 */}
            <SNSLogin>
              {/* sns로그인 제목 */}
              SNS 로그인
            </SNSLogin>
            <SignupPlease>
              {/* sns로그인(빨간글씨) 상세설명 */}
              사업자회원님은 아래 네이버, 카카오, 애플 로그인들이 사용 불가
              하오니
              <br />위 회원가입 버튼 클릭 후 사업자 회원으로 정식 회원가입을
              부탁드립니다.
            </SignupPlease>
            <IconBox>
              {/* sns 아이콘 전채 부모 설정값 */}
              <SNSIcon href="http://naver.com">
                {/* sns아이콘 원형모양 링크버튼 */}
                <NaverLogo src="/img/naverLogo.png" alt="네이버" />
              </SNSIcon>
              <SNSIcon href="http://naver.com">
                <KakaotalkLogo src="/img/kakaoTalk.png" alt="카카오톡" />
              </SNSIcon>
              <SNSIcon href="http://naver.com">
                <AppleLogo src="/img/apple.png" alt="애플" />
              </SNSIcon>
            </IconBox>
          </SNSBox>
        </LoginResponse>
      </LoginMain>
    </>
  );
};
export default Login;
