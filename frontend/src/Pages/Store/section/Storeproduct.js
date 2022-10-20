import styled from "styled-components";
import Storeitem from "./StoreItem";

const Storeprocuts = styled.section`
  width: inherit;
  &>div:nth-child(1){
    margin-bottom: 60px;
    &>button{
      width: 106px;
      height: 34px;
      background: none;
      border: 1px solid  ${({ theme }) => theme.lightgray};
      border-radius:5px;
      color: ${({ theme }) => theme.gray};
      font-size: ${({ theme }) => theme.fontSize_15};
      margin-right: 20px;
      &:hover{
        background: ${({ theme }) => theme.green};
        color: ${({ theme }) => theme.realWhite};
        font-weight: bold;
        border: none;
      }
    }
  }
  &>h1:nth-child(2){
    font-family: SCD-4;
    font-size: ${({ theme }) => theme.fontSize_15};
    color: ${({ theme }) => theme.gray};
    margin-bottom: 75px;
  }
  &>div:nth-child(3){
    width: inherit;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: 422px;
    row-gap: 150px;
    column-gap: 70px;
    margin-bottom: 130px;
  }
`

const Storeproduct = ({ data }) => {
  return (
    <Storeprocuts>
      <div>
        <button>최신순</button>
        <button>높은 가격</button>
        <button>낮은 가격</button>
      </div>
      <h1>{data.length}개의 판매상품이 있어요.</h1>
      {/* <Storeitem></Storeitem> */}
      <div>
        {data.map((value, index) => {
          return <Storeitem data={value} key={index}></Storeitem>
        })}
      </div>
    </Storeprocuts>
  )
}

export default Storeproduct