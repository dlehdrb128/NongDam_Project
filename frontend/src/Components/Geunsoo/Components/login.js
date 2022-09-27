import styled from 'styled-components';
import '../../../../src/index.css';
// 가장 진한 회색 rgba(82,82,82,1)
// 중간 회색 rgba(149,149,149,1)
// 가장 옅은 회색 rgba(192,192,192,1)
// 초록색 rgba(128,195,66,1)
// 빨간색 rgba(255,0,0,1)
// 오렌지색 rgba(243,152,0,1)
// ?? rgba(242,242,242,1)
const Login = () => {
  const LoginHeader = styled.div`
    width: 1277px;
    height: 80px;
    text-align: center;
    font-size: 2rem;
    font-family: NanumGothic-Bold;
    color: rgba(82, 82, 82, 1);
    border-bottom: 1px solid rgba(192, 192, 192, 1);
    margin-top: 80px;
  `;
  const LoginResponse = styled.div`
    width: 625px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-right: 10px;
  `;
  const LoginBox = styled.input`
    width: 625px;
    height: 60px;
    border-radius: 10px;
    border: 1px solid rgba(192, 192, 192, 1);
    margin: 10px;
    & ::placeholder {
      padding-left: 10px;
    }
  `;
  const A = styled.a`
    text-decoration: none;
    color: rgba(82, 82, 82, 1);
    font-size: 1rem;
    font-family: NanumGothic-Regular;
  `;
  const OprionMenu = styled.div`
    width: 620px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;
  const LoginFind = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const IdOption = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const Ppl = styled.div`
    width: 625px;
    height: 625px;
    background-color: #ccc;
    margin-left: 10px;
  `;
  const LoginMain = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 80px;
  `;
  const Button = styled.button`
    border: 1px solid rgba(192, 192, 192, 1);
    width: 20px;
    height: 20px;
  `;
  const P = styled.p`
    color: rgba(82, 82, 82, 1);
    font-size: 1rem;
    font-family: NanumGothic-Regular;
  `;
  const LoginButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 625px;
    height: 60px;
    border: 1px solid rgba(128, 195, 66, 1);
    border-radius: 10px;
    font-size: 1.5rem;
    font-family: NanumGothic-bold;
    text-decoration: none;
    background-color: rgba(128, 195, 66, 1);
    color: white;
    margin-top: 5px;
  `;
  const Security = styled.div`
    width: 625px;
    height: inherit;
    display: flex;
    justify-content: right;
    align-items: center;
  `;
  const SignupGuide = styled.div`
    width: 625px;
    height: 120px;
    border-bottom: 1px solid rgba(192, 192, 192, 1);
    padding-bottom: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
  `;
  const NongdamMember = styled.div`
    font-size: 1.3rem;
    font-family: NanumGothic-Regular;
    color: rgba(82, 82, 82, 1);
  `;
  const MemberBenefits = styled.div`
    font-size: 1rem;
    font-family: NanumGothic-Regular;
    color: rgba(82, 82, 82, 1);
  `;
  const SignupButton = styled.a`
    text-decoration: none;
    width: 150px;
    height: 50px;
    border: 1px solid rgba(128, 195, 66, 1);
    border-radius: 5px;
    color: rgba(128, 195, 66, 1);
    display: flex;
    justify-content: center;
    align-items: center;
  `;
  const IconBox = styled.div`
    display: flex;
    width: 200px;
    justify-content: space-around;
    align-items: center;
  `;
  const SNSIcon = styled.a`
    width: 55px;
    height: 55px;
    border: 1px solid rgba(192, 192, 192, 1);
    border-radius: 100%;
  `;
  const SNSBox = styled.div`
    width: 625px;
    height: 150px;
    margin-top: 10px;
    text-align: left;
    font-size: 1.3rem;
    color: rgba(82, 82, 82, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  `;
  const SignupPlease = styled.div`
    font-size: 1rem;
    color: rgba(255, 0, 0, 1);
  `;

  return (
    <>
      <LoginHeader>로그인</LoginHeader>
      <LoginMain>
        <LoginResponse>
          <LoginBox placeholder='&nbsp;&nbsp;아이디'></LoginBox>
          <LoginBox placeholder='&nbsp;&nbsp;비밀번호'></LoginBox>
          <OprionMenu>
            <IdOption>
              <Button></Button>
              <P>&nbsp;아이디 저장</P>
            </IdOption>
            <LoginFind>
              <A href='http://naver.com'>아이디 찾기</A>
              <P>&nbsp;|&nbsp;</P>
              <A href='http://naver.com'>비밀번호 찾기</A>
            </LoginFind>
          </OprionMenu>
          <LoginButton href='http://naver.com'>로그인</LoginButton>
          <Security>
            <P>&nbsp;🔒&nbsp;</P>
            <A href='http://naver.com'>보안접속</A>
          </Security>
          <SignupGuide>
            <NongdamMember>아직 농담 회원이 아니신가요?</NongdamMember>
            <MemberBenefits>
              회원이 되시면 다양한 혜택을 누리실 수 있습니다.
            </MemberBenefits>
            <SignupButton href='http://naver.com'>회원가입</SignupButton>
          </SignupGuide>
          <SNSBox>
            <div>SNS 로그인</div>
            <SignupPlease>
              사업자회원님은 아래 네이버, 카카오, 애플 로그인들이 사용 불가
              하오니
              <br />위 회원가입 버튼 클릭 후 사업자 회원으로 정식 회원가입을
              부탁드립니다.
            </SignupPlease>
            <IconBox>
              <SNSIcon href='http://naver.com'></SNSIcon>
              <SNSIcon href='http://naver.com'></SNSIcon>
              <SNSIcon href='http://naver.com'></SNSIcon>
            </IconBox>
          </SNSBox>
        </LoginResponse>
        <Ppl></Ppl>
      </LoginMain>
    </>
  );
};
export default Login;
