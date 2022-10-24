import { Wrapper, Text } from "../../Theme/common";

const OrderPerson = ({ orderDetail }) => {
  return (
    <>
      {orderDetail && (
        <Wrapper
          dir={`column`}
          padding={`10px`}
          margin={`50px 0 0 0`}
          borderTop
          borderBottom
        >
          <Wrapper
            ju={`flex-start`}
            fontSize={`1.8rem`}
            margin={`0 0 30px 0`}
            fontFamily={`SCD-6`}
          >
            받는 사람 정보
          </Wrapper>

          <Wrapper ju={`flex-start`}>
            <Text margin={`0 15px 0 0`}>받는사람</Text>
            <Text>{orderDetail.user_name}</Text>
          </Wrapper>

          <Wrapper ju={`flex-start`}>
            <Text margin={`0 15px 0 0`}>연락처</Text>
            <Text>{orderDetail.user_phone}</Text>
          </Wrapper>

          <Wrapper ju={`flex-start`}>
            <Text margin={`0 15px 0 0`}>받는주소</Text>
            <Text>
              {orderDetail.user_address} {orderDetail.user_address_detail}
            </Text>
          </Wrapper>

          <Wrapper ju={`flex-start`}>
            <Text margin={`0 15px 0 0`}>배송요청</Text>
            <Text>문 앞(경비실 호출)</Text>
          </Wrapper>
        </Wrapper>
      )}
    </>
  );
};

export default OrderPerson;
