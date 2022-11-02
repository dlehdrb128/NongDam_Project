import styled from "styled-components";
import { useState, useEffect } from "react"
import axios from 'axios'

const Storeitmes = styled.a`
  width: 254px;
  &>div:nth-child(1){
    display: flex;
    flex-direction: column;
    &>img{
      width: 252px;
      height: 234px;
      border-radius: 10px;
      margin-bottom: 20px;
    }
    &>span:nth-child(2){
      font-family: SCD-4;
      font-size: ${({ theme }) => theme.fontSize_15};
      color : ${({ theme }) => theme.green};
      margin-bottom: 20px;
    }
    &>p:nth-child(3){
      color: ${({ theme }) => theme.lightblack};
      font-family: SCD-4;
      font-size: ${({ theme }) => theme.fontSize_20};
      margin-bottom: 40px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    &>span:nth-child(4){
      color: ${({ theme }) => theme.lightgray};
      font-size: 2rem;
      font-family:SCD-4;
      position: relative;
      text-decoration: line-through;
    }
    &>div:nth-child(5){
      display: flex;
      align-items: center;
      &>h1{
        color: ${({ theme }) => theme.lightblack};
        font-size: ${({ theme }) => theme.fontSize_30};
        margin-right: 10px;
      }
      &>div{
        color: ${({ theme }) => theme.lightblack};
        font-size: 8px;
        &>div:nth-child(1){
          &>span:nth-child(1){
            color: ${({ theme }) => theme.orange};
            font-size: 8px;
          }

        }
      }
    }
  }
`

const Storeitem = ({ data }) => {
  const img = `http://localhost:8080/product/${data.product_image}`
  const href = `http://localhost:3000/product/detail/${data.product_key}`

  const [reviewData, setReviewData] = useState()

  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get(`http://localhost:8080/store/review/${data.product_key}`)
        setReviewData(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  if (reviewData === undefined) {
    return null
  }

  return (
    <Storeitmes href={href}>
      <div>
        <img src={img} alt="아이템이미지"></img>
        <span>[{data.product_local}]</span>
        <p>{data.product_name}</p>
        <span>{data.product_discount_percent > 0 ? ((Math.round(data.product_price)).toLocaleString()) + '원' : null}</span>
        <div>
          <h1>{(Math.round((data.product_price - (data.product_price * data.product_discount_percent) / 100) / 10) * (10)).toLocaleString()}원</h1>

          <div>
            <div>
              <span>★</span>{" "}
              <span>{reviewData[0].avg === null || reviewData[0].avg === 0 ? 0 : reviewData[0].avg}/5</span>
            </div>
            <div>리뷰 {reviewData[0].count === 0 || reviewData[0].count === null ? 0 : reviewData[0].count} </div>
          </div>
        </div>
      </div>
    </Storeitmes>
  )
}

export default Storeitem