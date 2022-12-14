import styled from "styled-components";

const Section2conItem = styled.a`
  //상품 컨테이너(사이즈 조정)
  text-decoration: none;
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

const FivedaysMarketitems = ({ data }) => {
  const img = `http://localhost:8080/product/product-${data.product_key}.png`;
  const link = `http://localhost:3000/product/detail/${data.product_key}`;
  return (
    <Section2conItem href={link}>
      <div>
        <img src={img} alt="Product"></img>
        <p>
          <span>[{data && data.product_local}]</span>
          {data && data.product_name}
        </p>
        <h2>
          {data.product_discount_percent !== 0 ? (
            <span>{data.product_discount_percent}%</span>
          ) : (
            ""
          )}
          {data.product_price.toLocaleString()}원
        </h2>
      </div>
    </Section2conItem>
  );
};

export default FivedaysMarketitems;
