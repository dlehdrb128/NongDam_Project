import { Wrapper, Text } from "../common";

const Title = () => {
  return (
    <Wrapper
      radius={`10px`}
      bgColor={`#C5DFAD`}
      padding={`20px`}
      margin={`0 0 5px 0`}
    >
      <Wrapper flex={`1`} dir={`column`}>
        <Text margin={`0px`} fontFamily={"SCD-6"}>
          OOO님은 <br />
          [개인회원]입니다.
        </Text>
        <Text></Text>
        <Text>총주문0원(0회)</Text>
      </Wrapper>

      <Wrapper
        width={`75%`}
        height={`80px`}
        bgColor={`white`}
        radius={`10px`}
        ju={`flex-end`}
        padding={`12px`}
      >
        <Wrapper
          margin={`0px`}
          width={`calc(100% / 3) `}
          fontSize={`18px`}
          ju={`flex-end`}
          borderRight={`1px solid #C4D0BA`}
          padding={`0 15px 0 0`}
        >
          쿠폰 ▶
        </Wrapper>
        <Wrapper
          margin={`0px`}
          width={`calc(100% / 3) `}
          fontSize={`18px`}
          al={`flex-end`}
          dir={`column`}
          borderRight={`1px solid #C4D0BA`}
          padding={`0 15px 0 0`}
        >
          <Text fontSize={`16px`}>적립금 ▶</Text>
          <Text fontSize={`16px`}>0 개</Text>
        </Wrapper>
        <Wrapper
          margin={`0px`}
          width={`calc(100% / 3) `}
          fontSize={`18px`}
          al={`center`}
          ju={`space-between`}
        >
          <Wrapper cursor={"pointer"}>
            <img src="/img/heart.png" alt="heart" />
          </Wrapper>

          <Wrapper dir={`column`} ju={`flex-end`}>
            <Text fontSize={`16px`}>관심상품</Text>
            <Text fontSize={`16px`}>0 개</Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </Wrapper>
  );
};

export default Title;
