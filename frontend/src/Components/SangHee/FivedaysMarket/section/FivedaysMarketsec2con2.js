import '../../../../App/App.css';
import styled from 'styled-components';
import Theme from '../../../../theme/theme';

// color,font Asset
const { fontSize_25, orange, lightblack } = Theme;

const Section2con = styled.div`
  //common constructor
  width: 934px;
  display: grid;
  column-gap: 30px;
  row-gap: 40px;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: 300px 300px;
  //constructor limit
  & > div {
    width: 210px;
    //img
    & > img {
      width: inherit;
      height: 211px;
      border-radius: 10px;
      margin-bottom: 30px;
    }
    //Product name
    & > p:nth-child(2) {
      //Product local
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
      color: ${lightblack};
      margin-bottom: 10px;
      font-family: SCD-4;
    }
    //Product Price
    & > h2:nth-child(3) {
      //Product sale
      & > span {
        width: 28%;
        display: inline-block;
        text-align: left;
        font-size: ${fontSize_25};
        font-family: SCD-6;
        color: ${orange};
      }
      font-family: SCD-6;
      font-size: ${fontSize_25};
      text-align: right;
    }
  }
`;

// dummy object
const ProductData = {
  Jeonla: [
    {
      local: '전북',
      name: '아주싱싱한푸드리퍼브상품 1kg',
      sale: '30%',
      price: '10,000',
      img: '/img/Fday_sec2_img_8.png',
    },
    {
      local: '전남',
      name: '아주싱싱한푸드리퍼브상품 1kg',
      sale: '20%',
      price: '20,000',
      img: '/img/Fday_sec2_img_7.png',
    },
    {
      local: '전북',
      name: '아주싱싱한푸드리퍼브상품 1kg',
      price: '15,000',
      img: '/img/Fday_sec2_img_4.png',
    },
    {
      local: '전북',
      name: '아주싱싱한푸드리퍼브상품 1kg',
      price: '10,000',
      img: '/img/Fday_sec2_img_6.png',
    },
    {
      local: '전북',
      name: '아주싱싱한푸드리퍼브상품 1kg',
      price: '18,000',
      img: '/img/Fday_sec2_img_5.png',
    },
    {
      local: '전남',
      name: '아주싱싱한푸드리퍼브상품 1kg',
      sale: '15%',
      price: '13,000',
      img: '/img/Fday_sec2_img_3.png',
    },
    {
      local: '전남',
      name: '아주싱싱한푸드리퍼브상품 1kg',
      price: '23,000',
      img: '/img/Fday_sec2_img_1.png',
    },
    {
      local: '전북',
      name: '아주싱싱한푸드리퍼브상품 1kg',
      sale: '10%',
      price: '9,000',
      img: '/img/Fday_sec2_img_2.png',
    },
  ],
};
const FivedaysMarketsec2con2 = () => {
  const { Jeonla } = ProductData;
  return (
    <Section2con>
      {Jeonla.map((value) => {
        return (
          <div>
            <img src={value.img} alt='Product'></img>
            <p>
              <span>[{value.local}]</span>
              {value.name}
            </p>
            <h2>
              <span>{value.sale}</span>
              {value.price}원
            </h2>
          </div>
        );
      })}
    </Section2con>
  );
};

export default FivedaysMarketsec2con2;
