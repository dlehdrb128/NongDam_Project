import styled from "styled-components";
import "../../../../src/index.css";
import Theme from "../../../theme/theme";
const LoginHeader = styled.div`
  width: 1230px;
  height: 80px;
  text-align: center;
  font-size: 3rem;
  font-family: YANGJIN;
  color: rgba(82, 82, 82, 1);
  border-bottom: 1px solid rgba(192, 192, 192, 1);
  margin-top: 80px;
`;
const LoginResponse = styled.div`
  width: 600px;
  height: 625px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-right: 10px;
`;
const LoginBox = styled.input`
  width: 600px;
  height: 60px;
  border-radius: 10px;
  border: 1px solid rgba(192, 192, 192, 1);
  margin: 10px;
  font-size: 2rem;
  font-family: NanumGothic-Regular;
  padding-left: 20px;
`;
const A = styled.a`
  text-decoration: none;
  color: rgba(82, 82, 82, 1);
  font-size: 1.5em;
  font-family: NanumGothic-Regular;
`;
const OprionMenu = styled.div`
  width: 600px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
const LoginFind = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;
const IdOption = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginMain = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 80px;
`;
const P = styled.p`
  color: rgba(82, 82, 82, 1);
  font-size: 1.5rem;
  font-family: NanumGothic-Regular;
  position: relative;
  bottom: 1px;
`;
const LoginButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 60px;
  border: 1px solid rgba(128, 195, 66, 1);
  border-radius: 10px;
  font-size: 2rem;
  font-family: NanumGothic-bold;
  text-decoration: none;
  background-color: rgba(128, 195, 66, 1);
  color: white;
`;
const Security = styled.div`
  width: 600px;
  display: flex;
  justify-content: right;
  align-items: center;
`;
const SignupGuide = styled.div`
  width: 600px;
  height: 120px;
  border-bottom: 1px solid rgba(192, 192, 192, 1);
  padding-bottom: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
`;
const NongdamMember = styled.div`
  font-size: 2rem;
  font-family: NanumGothic-Regular;
  color: rgba(82, 82, 82, 1);
  margin-bottom: 10px;
`;
const MemberBenefits = styled.div`
  font-size: 1.5rem;
  font-family: NanumGothic-Regular;
  color: rgba(82, 82, 82, 1);
  margin-bottom: 5px;
`;
const SignupButton = styled.a`
  text-decoration: none;
  width: 150px;
  height: 50px;
  border: 1px solid rgba(128, 195, 66, 1);
  border-radius: 5px;
  margin-top: 5px;
  color: rgba(128, 195, 66, 1);
  display: flex;
  font-size: 1.5rem;
  font-family: NanumGothic-Regular;
  justify-content: center;
  align-items: center;
`;
const IconBox = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-around;
  align-items: center;
  margin-top: 5px;
`;
const SNSLogin = styled.div`
  font-size: 2rem;
  font-family: NanumGothic-Regular;
`;
const SNSBox = styled.div`
  width: 600px;
  height: 150px;
  text-align: center;
  text-align: left;
  font-size: 2rem;
  color: rgba(82, 82, 82, 1);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const SNSIcon = styled.a`
  width: 55px;
  height: 55px;
  border: 1px solid rgba(192, 192, 192, 1);
  border-radius: 100%;
  position: relative;
  right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const SignupPlease = styled.div`
  font-size: 1.5rem;
  color: rgba(255, 0, 0, 1);
`;
const NaverLogo = styled.img`
  position: absolute;
  width: 55px;
  height: 55px;
`;
const KakaotalkLogo = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
`;
const AppleLogo = styled.img`
  position: absolute;
  left: 5px;
  top: 4px;
  width: 40px;
  height: 40px;
`;

// 가장 진한 회색 rgba(82,82,82,1)
// 중간 회색 rgba(149,149,149,1)
// 가장 옅은 회색 rgba(192,192,192,1)
// 초록색 rgba(128,195,66,1)
// 빨간색 rgba(255,0,0,1)
// 오렌지색 rgba(243,152,0,1)
// ?? rgba(242,242,242,1)
const Login = () => {
  return (
    <>
      <LoginHeader>로그인</LoginHeader>
      <LoginMain>
        <LoginResponse>
          <LoginBox type="text" placeholder="아이디"></LoginBox>
          <LoginBox type="password" placeholder="비밀번호"></LoginBox>
          <OprionMenu>
            <IdOption>
              <label>
                <input type="checkbox" id="login"></input>
              </label>
              <P>&nbsp;아이디 저장</P>
            </IdOption>
            <LoginFind>
              <A href="http://naver.com">아이디 찾기</A>
              <P>&nbsp;|&nbsp;</P>
              <A href="http://naver.com">비밀번호 찾기</A>
            </LoginFind>
          </OprionMenu>
          <LoginButton href="http://naver.com">로그인</LoginButton>

          <Security>
            <P>&nbsp;🔒&nbsp;</P>
            <A href="http://naver.com">보안접속</A>
          </Security>
          <SignupGuide>
            <NongdamMember>아직 농담 회원이 아니신가요?</NongdamMember>
            <MemberBenefits>
              회원이 되시면 다양한 혜택을 누리실 수 있습니다.
            </MemberBenefits>
            <SignupButton href="http://naver.com">회원가입</SignupButton>
          </SignupGuide>
          <SNSBox>
            <SNSLogin>SNS 로그인</SNSLogin>
            <SignupPlease>
              사업자회원님은 아래 네이버, 카카오, 애플 로그인들이 사용 불가
              하오니
              <br />위 회원가입 버튼 클릭 후 사업자 회원으로 정식 회원가입을
              부탁드립니다.
            </SignupPlease>
            <IconBox>
              <SNSIcon href="http://naver.com">
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
