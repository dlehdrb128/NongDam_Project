import { Wrapper, Text, Title } from "../common";

const Menu = () => {
  return (
    <>
      <Wrapper
        width={`20%`}
        dir={`column`}
        margin={`0 20px 0 0`}
        ju={`flex-start`}
      >
        <Wrapper dir={`column`} borderTop padding={`10px 0`}>
          <Title>쇼핑정보</Title>
          <Text cursor>취소/교환/반품내역</Text>
          <Text cursor>장바구니</Text>
          <Text cursor>관심상품</Text>
        </Wrapper>

        <Wrapper dir={`column`} borderTop padding={`10px 0`}>
          <Title>활동관리</Title>
          <Text cursor>적립금</Text>
          <Text cursor>쿠폰</Text>
          <Text cursor>게시물 관리</Text>
          <Text cursor>상품 리뷰 관리</Text>
        </Wrapper>

        <Wrapper dir={`column`} borderTop padding={`10px 0`}>
          <Title>정보관리</Title>
          <Text cursor>회원 정보 변경</Text>
          <Text cursor>배송 주소록 관리</Text>
          <Text cursor>정기배송 관리</Text>
          <Text cursor>상품 리뷰 관리</Text>
        </Wrapper>

        <Wrapper dir={`column`} borderTop padding={`10px 0`}>
          <Title>CS CENTER</Title>
          <Text cursor>1:1 맞춤상담</Text>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Menu;
