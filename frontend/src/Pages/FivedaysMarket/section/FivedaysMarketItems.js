import styled from 'styled-components';

const Section2conItem = styled.div`
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

const FivedaysMarketitems = ({ data }) => {
  return (
    <Section2conItem>
      <div>
        <img src={data.PRODUCT_IMG} alt='Product'></img>
        <p>
          <span>[{data.PRODUCT_LOCAL}]</span>
          {data.PRODUCT_NAME}
        </p>
        <h2>
          {data.SALE !== null ? <span>{data.SALE}%</span> : ''}
          {data.PRODUCT_PRICE.toLocaleString()}원
        </h2>
      </div>
    </Section2conItem>
  );
};

export default FivedaysMarketitems;
