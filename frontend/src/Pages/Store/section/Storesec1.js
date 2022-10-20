import styled from "styled-components";
import { useState, useEffect } from 'react';


const Section1 = styled.section`
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  &>div:nth-child(1){
    display: flex;
    &>img{
      width: 288px;
      height: 229px;
      border-radius: 10px;
      margin-right: 44px;
    }
    &>div:nth-child(2){
      color: ${({ theme }) => theme.lightblack};
      &>h1{
        font-family:YANGJIN;
        margin-bottom: 60px;
        font-size: ${({ theme }) => theme.fontSize_30};
      }
      &>p{
        font-family: SCD-4;
        width: 356px;
        font-size: ${({ theme }) => theme.fontSize_18};
      }
    }
  }
`

const Storesec1 = ({ data }) => {
  console.log(data);
  return (
    <Section1>
      <div>
        <img src='http://localhost:8080/product/product-1.png' alt="store이미지"></img>
        <div>
          <h1>{data[0].store_name}</h1>
          <p>{data[0].store_desc}</p>
        </div>
      </div>
    </Section1>
  )
}

export default Storesec1