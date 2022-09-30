import styled from "styled-components";
import "../../../../src/index.css";
import Theme from "../../../theme/theme";
// 가장 진한 회색 rgba(82,82,82,1)
// 중간 회색 rgba(149,149,149,1)
// 가장 옅은 회색 rgba(192,192,192,1)
// 초록색 rgba(128,195,66,1)
// 빨간색 rgba(255,0,0,1)
// 오렌지색 rgba(243,152,0,1)
// ?? rgba(242,242,242,1)

const SignUpEnd = () => {
  const SignUpEndBox = styled.div`
    width: 1230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const SignUpEndHead = styled.div`
    font-size: 3rem;
    color: ${Theme.lightBlack};
  `;
  return (
    <>
      <SignUpEndBox>
        <SignUpEndHead>회원 가입 완료</SignUpEndHead>
        <div></div>
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
