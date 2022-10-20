import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Remote = styled.div`
  position: fixed;
  top: 150px;
  right: 2.3vw;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;


`;

const Top = styled.div`

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
`

const Container = styled.div`
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
    }`




const Remocon = () => {
  const [data, setData] = useState(null)
  //Top btn func
  const MoveTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {

    const getLogin = async () => {
      try {
        let response = await axios.get("http://localhost:8080/login/check", {
          withCredentials: true,
        });

        if (response.data.status === 201) {
          setData(response.data.userInfo)
        } else {
          setData({ user_auth: '비회원' })
        }


      } catch (error) {
        console.log(error)
      }
    }
    getLogin()
  }, [])

  if (data === null) {
    return null;
  }





  return (
    <Remote id="Remote">
      {data === null || data.user_auth === '일반' ?
        <Container>
          <>
            <Link to={`/cart/user/${data.user_key}`}>
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
          </>
        </Container>
        : null}

      <Top onClick={MoveTop}>TOP</Top>

    </Remote>
  );
};

export default Remocon;
