import styled, { keyframes } from "styled-components";
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
  }
`;

const updown = keyframes`
  0%{
    top : 8px;
  }
  50%{
    top:0px;
  }
  100%{
    top : 8px;
  }
`;
const Line = styled.div`
  background-color: ${({ theme }) => theme.orange};
  width: 1px;
  height: 60px;
`;
const Metabus = styled.a`
  background: url("http://localhost:8080/icon/metabus.png") no-repeat
    center/cover;
  width: 95px;
  height: 131px;
  position: relative;
  transition: ease 0.5s;
  animation: ${updown} 1s infinite linear alternate;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    transition: ease 0.5s;
  }
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
  margin-bottom: 0px;
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
`;
const Remocon = () => {
  const [data, setData] = useState(null);
  const [cartData, setCartData] = useState();

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
          setData(response.data.userInfo);
          try {
            const response2 = await axios(
              `http://localhost:8080/cart/user/${response.data.userInfo.user_key}`
            );
            setCartData(response2.data);
            // console.log(cartData.length);
          } catch (error) {
            console.log(error);
          }
        } else {
          setData({ user_auth: "비회원" });
        }
      } catch (error) {
        console.log(error);
      }
    };
    getLogin();
  }, []);
  if (data === null) {
    return null;
  }
  if (cartData === null) {
    return 0;
  }

  return (
    <Remote id="Remote">
      {data === null || data.user_auth === "일반" ? (
        <Container>
          <>
            <Link to={`/cart/user/${data.user_key}`}>
              <img
                src="http://localhost:8080/svg/marketbasket.svg"
                alt="Marketbasket"
              ></img>
              <p>장바구니</p>
              <span>{cartData && cartData.length}</span>
            </Link>
            <Link to="/mypage">
              <img
                src="http://localhost:8080/svg/mypage_gray.svg"
                alt="Mypage"
              ></img>
              <p>마이페이지</p>
            </Link>
          </>
        </Container>
      ) : null}
      <Top onClick={MoveTop}>TOP</Top>
      <Line></Line>
      <Metabus href="https://app.gather.town/invite?token=exEth8VwR7aXhS-BeDXo"></Metabus>
    </Remote>
  );
};

export default Remocon;
