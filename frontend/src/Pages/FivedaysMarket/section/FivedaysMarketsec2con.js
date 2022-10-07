import styled from "styled-components";

//섹션2 상품 콘텐츠(충청) 컨테이너(사이즈,위치조정)
const Section2con = styled.div`
  width: 934px;
  display: grid;
  column-gap: 30px;
  row-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 300px 300px;
  //상품 컨테이너(사이즈 조정)
  & > div {
    width: 210px;
    cursor: pointer;
    //상품 이미지(사이즈조정)
    & > img {
      width: inherit;
      height: 211px;
      border-radius: 10px;
      margin-bottom: 30px;
    }
    //상품 이름(사이즈,글간격,컬러,폰트,위치조정)
    & > p:nth-child(2) {
      //상품 지역명(폰트,위치조정)
      & > span {
        display: inline-block;
        margin-right: 5px;
        font-size: 1.5rem;
        font-family: SCD-6;
      }
      width: inherit;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.lightblack};
      margin-bottom: 10px;
      font-family: SCD-4;
    }
    //상품 가격(폰트,글정렬조정)
    & > h2:nth-child(3) {
      //상품 할인율(사이즈,글정렬,폰트,컬러조정)
      & > span {
        width: 28%;
        display: inline-block;
        text-align: left;
        font-size: ${({ theme }) => theme.fontSize_25};
        font-family: SCD-6;
        color: ${({ theme }) => theme.orange};
      }
      font-family: SCD-6;
      font-size: ${({ theme }) => theme.fontSize_25};
      text-align: right;
    }
  }
`;

// dummy object
const ProductData = {
  Chungchung: [
    {
      local: "충북",
      name: "아주싱싱한푸드리퍼브상품 1kg",
      sale: 15 + "%",
      price: 10000,
      img: "/img/Fday_sec2_img_1.png",
    },
    {
      local: "충남",
      name: "아주싱싱한푸드리퍼브상품 1kg",
      price: 20000,
      img: "/img/Fday_sec2_img_2.png",
    },
    {
      local: "충북",
      name: "아주싱싱한푸드리퍼브상품 1kg",
      price: 15000,
      img: "/img/Fday_sec2_img_3.png",
    },
    {
      local: "충북",
      name: "아주싱싱한푸드리퍼브상품 1kg",
      sale: 10 + "%",
      price: 10000,
      img: "/img/Fday_sec2_img_4.png",
    },
    {
      local: "충북",
      name: "아주싱싱한푸드리퍼브상품 1kg",
      price: 18000,
      img: "/img/Fday_sec2_img_5.png",
    },
    {
      local: "충남",
      name: "아주싱싱한푸드리퍼브상품 1kg",
      price: 13000,
      img: "/img/Fday_sec2_img_6.png",
    },
    {
      local: "충남",
      name: "아주싱싱한푸드리퍼브상품 1kg",
      price: 23000,
      img: "/img/Fday_sec2_img_7.png",
    },
    {
      local: "충북",
      name: "아주싱싱한푸드리퍼브상품 1kg",
      sale: 30 + "%",
      price: 9000,
      img: "/img/Fday_sec2_img_8.png",
    },
  ],
};
const FivedaysMarketsec2con = () => {
  // 객체 구조분해 할당
  const { Chungchung } = ProductData;
  return (
    <Section2con>
      {/* 맵 사용 해서 태그 생성 */}
      {Chungchung.map((value) => {
        return (
          <div>
            {/* 상품이미지 */}
            <img src={value.img} alt="Product"></img>
            <p>
              {/* 상품이름 및 지역 */}
              <span>[{value.local}]</span>
              {value.name}
            </p>
            <h2>
              {/* 상품 가격 및 할인율 */}
              <span>{value.sale}</span>
              {value.price.toLocaleString()}원
            </h2>
          </div>
        );
      })}
    </Section2con>
  );
};
//end

export default FivedaysMarketsec2con;
