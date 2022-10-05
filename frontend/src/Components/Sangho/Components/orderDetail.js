import React from "react";
import styled, { css } from "styled-components";
import Theme from "../../../theme/theme";

console.log(Theme);
console.log(Theme.fontSize_40);

const Wrapper = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  display: ${(props) => props.display || "flex"};
  justify-content: ${(props) => props.ju || "center"};
  flex-direction: ${(props) => props.dir || "row"};
  background-color: ${(props) => props.bgColor};
  margin: ${(props) => props.margin};
  padding: ${(props) => props.padding};
  font-size: ${(props) => props.fontSize || `${Theme.fontSize_40}`};
  font-family: ${(props) => props.fontFamily || "SCD-2"};
  color: ${(props) => props.color || `#525252`};
  flex: ${(props) => props.flex};
  border-radius: ${(props) => props.radius};

  ${(props) =>
    props.borderTop &&
    css`
      border-top: 1px solid #959595;
    `};
`;

const RsWrapper = styled.div`
  width: 1280px;
  height: ${(props) => props.height};
  display: ${(props) => props.display};
  justify-content: ${(props) => props.ju || "center"};
  align-items: ${(props) => props.al || "start"};
  margin: ${(props) => props.margin || "50px 0"};
  padding: ${(props) => props.padding || "0 150px"};
`;

const Title = styled.p`
  color: #525252;
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 10px 0;
`;

const Text = styled.p`
  margin: ${(props) => props.margin || "0 0 5px 0"};
`;

const OrderTitle = styled.div``;

const OrderContent = styled.div``;

const OrderDetail = () => {
  return (
    <Wrapper>
      <RsWrapper>
        <Wrapper ju={`start`} margin={`30px 0 20px 0`}>
          주문상세
        </Wrapper>

        <Wrapper>
          <Wrapper width={`20%`} dir={`column`} margin={`0 20px 0 0`}>
            <Wrapper dir={`column`} borderTop padding={`15px 0`}>
              <Title>쇼핑정보</Title>
              <Text>취소/교환/반품내역</Text>
              <Text>장바구니</Text>
              <Text>관심상품</Text>
            </Wrapper>

            <Wrapper dir={`column`} borderTop padding={`15px 0`}>
              <Title>쇼핑정보</Title>
              <Text>취소/교환/반품내역</Text>
              <Text>장바구니</Text>
              <Text>관심상품</Text>
            </Wrapper>

            <Wrapper dir={`column`} margin={`24px 0`} borderTop>
              <Title>쇼핑정보</Title>
              <Text>취소/교환/반품내역</Text>
              <Text>장바구니</Text>
              <Text>관심상품</Text>
            </Wrapper>
          </Wrapper>

          <Wrapper flex={`1`} dir={`column`} ju={`flex-start`}>
            <Wrapper radius={`10px`} bgColor={`#C5DFAD`} padding={`25px`}>
              <Wrapper width={`25%`} dir={`column`}>
                <Text margin={`0px`}>
                  OOO님은 <br />
                  [개인회원]입니다.
                </Text>
                <Text></Text>
                <Text>총주문0원(0회)</Text>
              </Wrapper>

              <Wrapper width={`75%`} bgColor={`white`} radius={`10px`}>
                <Text>쿠폰</Text>
                <Text>적립금</Text>
                <Text>관심상품</Text>
              </Wrapper>
            </Wrapper>
            <Wrapper
              ju={`flex-start`}
              fontSize={`2rem`}
              margin={`10px 0 10px 0`}
            >
              주문 정보
            </Wrapper>
            <Wrapper ju={`space-around`} borderTop>
              <OrderTitle>주문일자/주문번호</OrderTitle>
              <OrderTitle>이미지</OrderTitle>
              <OrderTitle>상품정보</OrderTitle>
              <OrderTitle>수량</OrderTitle>
              <OrderTitle>구매금액</OrderTitle>
              <OrderTitle>주문처리상태</OrderTitle>
              <OrderTitle>취소/교환/반품</OrderTitle>
            </Wrapper>

            <Wrapper ju={`space-around`}>
              <OrderContent>
                <Text margin={`0`}> 2022.9.11</Text>
                <Text> 1000151095787</Text>
              </OrderContent>

              <OrderContent></OrderContent>
              <OrderContent></OrderContent>
              <OrderContent></OrderContent>
              <OrderContent></OrderContent>
              <OrderContent></OrderContent>
              <OrderContent></OrderContent>
            </Wrapper>

            <Wrapper>받는 사람 정보</Wrapper>
          </Wrapper>
        </Wrapper>
      </RsWrapper>
    </Wrapper>
  );
};

export default OrderDetail;
