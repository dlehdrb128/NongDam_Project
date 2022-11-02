import styled from "styled-components";
import { useState, useEffect } from 'react'
import axios from "axios";
//color,font Asset

//섹션2 콘텐츠1 주문처리현황 컨테이너(사이즈,백그라운드,위치조정)
const Info = styled.div`
  width: inherit;
  height: 120px;
  padding: 0 18px;
  background: ${({ theme }) => theme.lightgreen};
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  // 콘텐츠1 회원 등급 및 적립금 컨테이너(사이즈조정)
  & > div:nth-child(1) {
    width: 150px;
    //회원이름(사이즈,글정렬,폰트,위치조정)
    & > h1 {
      width: inherit;
      color: ${({ theme }) => theme.lightblack};
      word-break: keep-all;
      font-family: SCD-6;
      font-size: ${({ theme }) => theme.fontSize_18};
      margin-bottom: 10px;
    }
    //적립금(폰트,컬러조정)
    & > span {
      color: ${({ theme }) => theme.gray};
      font-family: SCD-3;
      font-size: ${({ theme }) => theme.fontSize_13};
      word-break: keep-all;
    }
  }
  // 콘텐츠1 쿠폰,선호상품,적립금 컨테이너(사이즈조정 및 위치, 테두리조정)
  & > div:nth-child(2) {
    background: ${({ theme }) => theme.realWhite};
    width: 550px;
    height: 80px;
    border-radius: 10px;
    display: flex;
    overflow: hidden;
    //쿠폰,적립금,선호상품 컨테이너(사이즈,위치조정)
    & > div {
      width: calc(100% / 3);
      height: inherit;
      position: relative;
      padding: 15px 26px;
      //정보 텍스트(폰트,글정렬,위치조정)
      & > p {
        font-family: SCD-6;
        font-size: ${({ theme }) => theme.fontSize_18};
        color: ${({ theme }) => theme.lightblack};
        text-align: right;
        margin-right: 9px;
        position: relative;
      }
      & > p:nth-child(1) {
        &::after {
          //화살표아이콘(백그라운드,사이즈,위치조정)
          content: "";
          background: url("/img/Direction.png") no-repeat center;
          background-size: cover;
          width: 7px;
          height: 13px;
          position: absolute;
          top: 7px;
          right: -20px;
        }
      }
      //쿠폰,적립금,선호상품 분류선(사이즈,위치조정)
      &::after {
        content: "";
        background: ${({ theme }) => theme.lightgreen};
        width: 1px;
        height: 50px;
        position: absolute;
        right: 0;
        top: 15px;
      }
    }
    //각각 아이콘 배치(사이즈,위치,백그라운드조정)
    & > div:nth-child(1) {
      &::before {
        content: "";
        background: url("http://localhost:8080/svg/coupon.svg") no-repeat center;
        width: 48px;
        height: 47px;
        position: absolute;
      }
    }
    & > div:nth-child(2) {
      &::before {
        content: "";
        background: url("http://localhost:8080/svg/StackMoney.svg") no-repeat center;
        background-size: cover;
        width: 43px;
        height: 47px;
        position: absolute;
      }
    }
    & > div:nth-child(3) {
      &::before {
        content: "";
        background: url("http://localhost:8080/svg/Favorite.svg") no-repeat center;
        width: 41px;
        height: 47px;
        position: absolute;
      }
    }
    //마지막 (선호상품) 위치 조정 및 분류선 제거
    & > div:nth-child(3) {
      & > p {
        margin-right: 0;
        &::after {
          display: none;
        }
      }
      &::after {
        display: none;
      }
    }
  }
`;

//dummy object

const Mypagesec2Info = ({ data, userData }) => {

  // console.log(userData);
  const [loading, setLoading] = useState(false);
  const [datas, setDatas] = useState();

  useEffect(() => {
    setLoading(true);
    const Product = async () => {
      try {
        let response = await axios.get(`http://localhost:8080/cart/user/${userData.user_key}`, { withCredentials: true });
        console.log(response.data);
        setDatas(response.data)
      } catch (e) {
        console.log(e);
      }
      setLoading(false);
    };
    Product();
  }, []);
  // console.log(datas);
  // console.log(data);

  if (loading) {
    return <h1>준비중입니다.</h1>;
  }
  if (data === undefined) {
    return null;
  }

  let name = data[0][0].user_name;
  let otherdata = data[1]
  //구조분해할당
  return (
    <Info>
      {/* 회원정보 */}
      <div>
        <h1>
          {data && name}님
        </h1>
        <span>
          총주문<br />
          준비중입니다.
        </span>
      </div>
      {/* 쿠폰,적립금,관심상품 */}
      <div>
        <div>
          <p>쿠폰<br />
            0개
          </p>
        </div>
        <div>
          <p>적립금</p>
          <p>{otherdata[0].orders_point}원</p>
        </div>
        <div>
          <p>관심상품</p>
          <p>{datas && datas.length}개</p>
        </div>
      </div>
    </Info>
  );
};
//end

export default Mypagesec2Info;
