import styled from "styled-components";
import { Link } from "react-router-dom";

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
    height: 240px;
    border: 1px solid ${({ theme }) => theme.gray};
    border-radius: 30px;
    background: ${({ theme }) => theme.realWhite};
    overflow: hidden;
    margin-bottom: 30px;

    & > a {
      width: inherit;
      height: calc(240px / 2);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid ${({ theme }) => theme.gray};
      position: relative;
      cursor: pointer;

      &:hover {
        font-weight: bold;

        & > p {
          color: ${({ theme }) => theme.green};
        }
      }
      & > img {
        width: 25px;
        height: 25px;
        margin-bottom: 10px;
      }
      & > p {
        color: ${({ theme }) => theme.gray};
        font-size: 1.4rem;
        font-family: SCD-3;
      }
      & > span {
        background: ${({ theme }) => theme.orange};
        width: 18px;
        height: 18px;
        position: absolute;
        border-radius: 50%;
        text-align: center;
        padding-top: 1px;
        color: ${({ theme }) => theme.realWhite};
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
    background: ${({ theme }) => theme.orange};
    padding-top: 18px;
    position: relative;
    color: ${({ theme }) => theme.realWhite};
    font-size: 1.4rem;
    font-family: SCD-5;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.green};
    }
    &::before {
      content: "";
      position: absolute;
      top: 15px;
      left: 33.5px;
      transform: rotate(145deg);
      background: ${({ theme }) => theme.realWhite};
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
      background: ${({ theme }) => theme.realWhite};
      border-radius: 1px;
      width: 2px;
      height: 15px;
    }
  }
`;

const Remocon = () => {
  //Top btn func
  const MoveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Remote id="Remote">
      <div>
        <Link to="/cart">
          <img
            src="http://localhost:8080/svg/marketbasket.svg"
            alt="Marketbasket"
          ></img>
          <p>장바구니</p>
          <span>0</span>
        </Link>
        <Link to="/admin/myPage">
          <img
            src="http://localhost:8080/svg/mypage_gray.svg"
            alt="Mypage"
          ></img>
          <p>마이페이지</p>
        </Link>
      </div>
      <div onClick={MoveTop}>TOP</div>
    </Remote>
  );
};

export default Remocon;
