import styled from "styled-components";

// 금액 나타나는 제일 큰 박스
const MainBox = styled.div`
  width: inherit;
  height: 137px;
  background-color: ${({ theme }) => theme.white};
  display: flex;
  justify-content: center;
  border-bottom: 2px solid ${({ theme }) => theme.gray};
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

const CartPrice = ({ data }) => {
  let shipping = 2500;
  if (data.price < 50000) {
    shipping = 2500;
  } else {
    shipping = 0;
  }

  return (
    <MainBox>
      <Pricebox>
        <p>상품금액</p>
        <p>{data.price.toLocaleString()}원</p>
      </Pricebox>
      <OperatorBox>
        <p>-</p>
      </OperatorBox>
      <Pricebox>
        <p>할인금액</p>
        <p>{data.saleprice.toLocaleString()}원</p>
      </Pricebox>
      <OperatorBox>
        <p>+</p>
      </OperatorBox>
      <Pricebox>
        <p>배송비</p>
        <p>{shipping.toLocaleString()}원</p>
      </Pricebox>
      <OperatorBox>
        <p>=</p>
      </OperatorBox>
      <Pricebox>
        <p>결제금액</p>
        <p>
          {(
            Math.round((data.price - data.saleprice + shipping) / 10) * 10
          ).toLocaleString()}
          원
        </p>
      </Pricebox>
    </MainBox>
  );
};

export default CartPrice;
