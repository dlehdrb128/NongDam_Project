import styled from "styled-components";
import Theme from "../../../../theme/theme";

// 금액 나타나는 제일 큰 박스
const MainBox = styled.div`
  width: inherit;
  height: 137px;
  background-color: ${Theme.white};
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${Theme.gray};
`;

// 해당가격의이름 + 해당가격 : 하나의 박스로 묶음
const Pricebox = styled.div`
  width: 246px;
  height: inherit;
  padding-left: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  // 해당가격 이름
  & > p:nth-child(1) {
    font-size: 2rem;
    font-family: "SCD-3";
  }
  // 해당 가격
  & > p:nth-child(2) {
    font-size: 3rem;
    font-family: "SCD-5";
  }
`;

// 연산자 박스 ( -, +, =)
const OperatorBox = styled.div`
  width: 56px;
  height: 137px;
  display: flex;
  justify-content: center;
  align-items: center;
  & > p {
    font-size: 3rem;
    font-family: "SCD-6";
  }
`;

const CartPrice = () => {
  return (
    <MainBox>
      <Pricebox>
        <p>상품금액</p>
        <p>9,500원</p>
      </Pricebox>
      <OperatorBox>
        <p>-</p>
      </OperatorBox>
      <Pricebox>
        <p>할인금액</p>
        <p>0원</p>
      </Pricebox>
      <OperatorBox>
        <p>+</p>
      </OperatorBox>
      <Pricebox>
        <p>배송비</p>
        <p>3,000원</p>
      </Pricebox>
      <OperatorBox>
        <p>=</p>
      </OperatorBox>
      <Pricebox>
        <p>결제금액</p>
        <p>12,500원</p>
      </Pricebox>
    </MainBox>
  );
};

export default CartPrice;
