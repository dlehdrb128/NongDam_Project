import styled from "styled-components";

// 각각의 타이틀을 담을 박스를 만들고
const Title = styled.div`
  width: inherit;
  height: 41px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.white};
  border-top: 2px solid ${({ theme }) => theme.gray};
  border-bottom: 1px solid ${({ theme }) => theme.gray};

  // 공통 스타일링 부분 - 각 div안에 이름 폰트사이즈
  & > div {
    font-size: 1.5rem;
  }

  // 체크박스
  & > div:nth-child(1) {
    width: 298px;
    padding-left: 20px;
    display: flex;

    & > input {
      width: 24px;
      height: 24px;
      border: 1px solid ${({ theme }) => theme.lightblack};
    }
  }
  // 상품정보
  & > div:nth-child(2) {
    width: 327px;
    text-align: center;
  }
  // 판매가
  & > div:nth-child(3) {
    width: 139px;
    text-align: center;
  }
  //수량
  & > div:nth-child(4) {
    width: 79px;
    text-align: center;
  }
  // 할인금액
  & > div:nth-child(5) {
    width: 149px;
    text-align: center;
  }
  // 합계
  & > div:nth-child(6) {
    width: 79px;
    text-align: center;
  }
  // 선택
  & > div:nth-child(7) {
    width: 218px;
    text-align: center;
    padding-left: 30px;
  }
`;

const CartTitle = () => {
  return (
    <Title>
      <div>
        <input type="checkbox" name="product"></input>
      </div>
      <div>상품정보</div>
      <div>판매가</div>
      <div>수량</div>
      <div>할인금액</div>
      <div>합계</div>
      <div>선택</div>
    </Title>
  );
};

export default CartTitle;
