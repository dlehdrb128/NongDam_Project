import { Link } from "react-router-dom";
import { Wrapper, Text, Title } from "../../Theme/common";
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
          <Text hover>취소/교환/반품내역</Text>
          <Link to="/cart">
            <Text hover>장바구니</Text>
          </Link>
          <Text hover>관심상품</Text>
        </Wrapper>

        <Wrapper dir={`column`} borderTop padding={`10px 0`}>
          <Title>활동관리</Title>
          <Text hover>적립금</Text>
          <Text hover>쿠폰</Text>
          <Text hover>게시물 관리</Text>
          <Text hover>상품 리뷰 관리</Text>
        </Wrapper>

        <Wrapper dir={`column`} borderTop padding={`10px 0`}>
          <Title>정보관리</Title>
          <Text hover>회원 정보 변경</Text>
          <Text hover>배송 주소록 관리</Text>
          <Text hover>정기배송 관리</Text>
          <Text hover>상품 리뷰 관리</Text>
        </Wrapper>

        <Wrapper dir={`column`} borderTop padding={`10px 0`}>
          <Title>CS CENTER</Title>
          <Text hover>1:1 맞춤상담</Text>
        </Wrapper>
      </Wrapper>
    </>
  );
};

export default Menu;
