import { Link } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "./../../../../theme/theme";

const HeaderBox = styled.div`
  width: 1920px;
  height: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);

  & a {
    &:link {
      text-decoration: none;
      color: black;
    }
    &:visited {
      text-decoration: none;
      color: ${Theme.lightblack};
    }
    &:active {
      text-decoration: none;
      color: ${Theme.lightblack};
    }

    &:hover {
      cursor: pointer;
      color: ${Theme.green};
    }
  }

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

const HeaderBoxMid = styled.div`
  display: flex;
  gap: 66px;
  color: ${Theme.lightblack};
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
    color: ${Theme.green};
  }
`;

const HeaderBoxRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  font-family: "SCD-4";
  margin-bottom: 5px;

  & > div:hover {
    cursor: pointer;
    opacity: 60%;
  }

  & > div:nth-child(1) {
    color: ${Theme.lightblack};
  }

  & > a:nth-child(2) > div {
    color: rgba(255, 255, 255, 1);
    width: 79px;
    height: 30px;
    background-color: ${Theme.green};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.6rem;
  }

  & > a {
    & > div {
      font-size: 1.6rem;
      color: ${Theme.lightblack};
    }
    &:link {
      text-decoration: none;
      color: ${Theme.lightblack};
    }
    &:visited {
      text-decoration: none;
      color: ${Theme.lightblack};
    }
    &:active {
      text-decoration: none;
      color: ${Theme.lightblack};
    }

    &:hover {
      cursor: pointer;
      opacity: 60%;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderBox>
        <div>
          <Link to="/">
            <img src="/img/logo-3.svg" alt="이미지 없음"></img>
          </Link>
          <HeaderBoxMid>
            <Link to="/intro">함께 둘러보는 농담</Link>

            <Link to="/all">못난이 장터</Link>
            <div>못난이 활용법</div>
            <div>온라인 5일장</div>
          </HeaderBoxMid>
          <HeaderBoxRight>
            <Link to="/admin">
              <div>회원가입</div>
            </Link>
            <Link to="/login">
              <div>로그인</div>
            </Link>
          </HeaderBoxRight>
        </div>
      </HeaderBox>
    </>
  );
};

export default Header;
