import { Wrapper, Text } from "../common";

const OrderPerson = () => {
  return (
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
        <Text>이상호</Text>
      </Wrapper>

      <Wrapper ju={`flex-start`}>
        <Text margin={`0 15px 0 0`}>연락처</Text>
        <Text>010-0000-0000</Text>
      </Wrapper>

      <Wrapper ju={`flex-start`}>
        <Text margin={`0 15px 0 0`}>받는주소</Text>
        <Text>대전 서구 대덕대로 182</Text>
      </Wrapper>

      <Wrapper ju={`flex-start`}>
        <Text margin={`0 15px 0 0`}>배송요청</Text>
        <Text>문 앞(경비실 호출)</Text>
      </Wrapper>
    </Wrapper>
  );
};

export default OrderPerson;
