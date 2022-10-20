import axios from "axios";
import { useEffect, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

// 헤더 박스
const HeaderBox = styled.div`
  width: 1920px;
  height: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);
  position: relative;
  z-index: 4;

  /* Link 속성 */
  & a {
    &:link {
      text-decoration: none;
      color: black;
    }
    &:visited {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }
    &:active {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }

    &:hover {
      cursor: pointer;
      color: ${({ theme }) => theme.green};
    }
  }

  /* 헤더의 요소들을 담은 박스 */
  & > div {
    position: relative;
    width: 1280px;
    display: flex;
    justify-content: center;
    align-items: center;

    & > img {
      z-index: 1;
    }
  }
`;

// 헤더의 중간 박스 (함께 둘러보는 농담...)
const HeaderBoxMid = styled.div`
  display: flex;
  gap: 40px;
  color: ${({ theme }) => theme.lightblack};
  font-family: "YANGJIN";
  margin-right: 180px;
  margin-left: 70px;
  & > a {
    font-size: 1.6rem;
  }
  & > div {
    font-size: 1.6rem;
  }

  & > div:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.green};
  }
`;

// 헤더의 오른쪽 박스 (회원가입...)
const HeaderBoxRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  font-family: "SCD-4";
  margin-bottom: 5px;

  /* 회원가입, 로그인 폰트 속성*/
  & > a {
    &:nth-child(1) {
      & > div:nth-child(1) {
        font-size: 1.6rem;
        color: ${({ theme }) => theme.lightblack};
      }
    }
    &:link {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }
    &:visited {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }
    &:active {
      text-decoration: none;
      color: ${({ theme }) => theme.lightblack};
    }

    &:hover {
      cursor: pointer;
      opacity: 60%;
    }
  }
`;

const LogBox = styled.div`
  color: rgba(255, 255, 255, 1);
  font-family: "SCD-4";
  font-size: 1.6rem;
  width: 79px;
  height: 30px;
  background-color: ${({ theme }) => theme.green};
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

const Header = () => {
  const [data, setData] = useState();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getLoginData = async () => {
      try {
        let response = await axios.get("http://localhost:8080/login/check", {
          withCredentials: true,
        });
        setData(response.data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    getLoginData();
  }, [params]);

  if (data === undefined) {
    return null;
  }

  const logOut = async () => {
    try {
      let response = await axios.get("http://localhost:8080/logOut", {
        withCredentials: true,
      });
      if (response.data.status === 201) {
        alert("농담을 이용해주셔서 감사합니다");
        navigate("/");
      }
    } catch (error) {}
  };

  return (
    <>
      <HeaderBox>
        <div>
          <Link to="/">
            <img
              src="http://localhost:8080/svg/logo-3.svg"
              alt="이미지 없음"
            ></img>
          </Link>
          <HeaderBoxMid>
            <Link to="/intro">함께 둘러보는 농담</Link>
            <Link to="/product/all">못난이 장터</Link>
            <Link to="/recipe">못난이 활용법</Link>
            <Link to="/FivedaysMakret">온라인 5일장</Link>
            {data.status === 201 && data.userInfo.user_auth === "사업자" ? (
              <Link to="/admin">스토어 관리</Link>
            ) : null}
          </HeaderBoxMid>
          {data.status === 401 ? (
            <HeaderBoxRight>
              <Link to="/signUp">
                <div>회원가입</div>
              </Link>
              <Link to="/login">
                <LogBox>로그인</LogBox>
              </Link>
            </HeaderBoxRight>
          ) : (
            <HeaderBoxRight>
              <LogBox onClick={logOut}>로그아웃</LogBox>
            </HeaderBoxRight>
          )}
        </div>
      </HeaderBox>
    </>
  );
};

export default Header;
