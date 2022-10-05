import "../../../App/App.css";
import styled from "styled-components";
import Theme from "../../../theme/theme";
import { useState } from "react";

const { gray, orange, realWhite } = Theme;

const Remote = styled.div`
  position: fixed;
  top: 150px;
  right: 2.3vw;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div:nth-child(1) {
    width: 76px;
    height: 360px;
    border: 1px solid ${gray};
    border-radius: 30px;
    background: ${realWhite};
    overflow: hidden;
    margin-bottom: 30px;

    & > div {
      width: inherit;
      height: calc(360px / 3);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid ${gray};
      position: relative;
      cursor: pointer;

      &:hover {
        font-weight: bold;

        & > p {
          color: ${Theme.green};
        }
      }
      & > img {
        width: 25px;
        height: 25px;
        margin-bottom: 10px;
      }
      & > p {
        color: ${gray};
        font-size: 1.4rem;
        font-family: SCD-3;
      }
      & > span {
        background: ${orange};
        width: 18px;
        height: 18px;
        position: absolute;
        border-radius: 50%;
        text-align: center;
        padding-top: 1px;
        color: ${realWhite};
        font-size: 1.1rem;
        font-family: SCD-4;
        bottom: 59px;
        right: 42px;
      }
    }
  }
  & > div:nth-child(2) {
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background: ${orange};
    padding-top: 18px;
    position: relative;
    color: ${realWhite};
    font-size: 1.4rem;
    font-family: SCD-5;
    cursor: pointer;

    &:hover {
      background-color: ${Theme.green};
    }
    &::before {
      content: "";
      position: absolute;
      top: 15px;
      left: 33.5px;
      transform: rotate(145deg);
      background: ${realWhite};
      border-radius: 1px;
      width: 2px;
      height: 15px;
    }
    &::after {
      content: "";
      position: absolute;
      top: 15px;
      right: 33px;
      transform: rotate(-145deg);
      background: ${realWhite};
      border-radius: 1px;
      width: 2px;
      height: 15px;
    }
  }
`;

const Remocon = () => {
  const [ScrollY, setScrollY] = useState(0);

  //Top btn func
  const MoveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0);
  };

  return (
    <Remote id="Remote">
      <div>
        <div>
          <img src="/img/deliverycar.svg" alt="Delivery"></img>
          <p>주문조회</p>
        </div>
        <div>
          <img src="/img/marketbasket.svg" alt="Marketbasket"></img>
          <p>장바구니</p>
          <span>0</span>
        </div>
        <div>
          <img src="/img/mypage_gray.svg" alt="Mypage"></img>
          <p>마이페이지</p>
        </div>
      </div>
      <div onClick={MoveTop}>TOP</div>
    </Remote>
  );
};

export default Remocon;