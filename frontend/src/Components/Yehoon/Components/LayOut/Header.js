import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBox = styled.div`
  width: 1920px;
  height: 103px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 1);

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
  color: rgba(82, 82, 82, 1);
  font-family: "YANGJIN";
  font-size: 1.1rem;
  margin-right: 180px;
  margin-left: 70px;

  & > div:hover {
    cursor: pointer;
    color: rgba(128, 195, 66, 1);
  }
`;

const HeaderBoxRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  font-family: "SCD-4";
  font-size: 1.1rem;
  margin-bottom: 5px;

  & > div:hover {
    cursor: pointer;
    opacity: 60%;
  }

  & > div:nth-child(1) {
    color: rgba(82, 82, 82, 1);
  }

  & > a:nth-child(2) > div {
    color: rgba(255, 255, 255, 1);
    width: 79px;
    height: 30px;
    background-color: rgba(128, 195, 66, 1);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & > a {
    &:link {
      text-decoration: none;
      color: black;
    }
    &:visited {
      text-decoration: none;
      color: black;
    }
    &:active {
      text-decoration: none;
      color: black;
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
            <div>함께 둘러보는 농담</div>
            <div>못난이 장터</div>
            <div>못난이 활용법</div>
            <div>온라인 5일장</div>
          </HeaderBoxMid>
          <HeaderBoxRight>
            <div>회원가입</div>
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
