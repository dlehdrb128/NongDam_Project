import { Link } from "react-router-dom";
import styled from "styled-components";
import { Theme } from "./../../../../theme/theme";

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

// 헤더의 오른쪽 박스 (회원가입...)
const HeaderBoxRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  font-family: "SCD-4";
  margin-bottom: 5px;

  /* 로그인 */
  & > a:nth-child(2) > div {
    color: rgba(255, 255, 255, 1);
    width: 79px;
    height: 30px;
    background-color: ${Theme.green};
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* 회원가입, 로그인 폰트 속성*/
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
            <Link to="/FivedaysMakret">온라인 5일장</Link>
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
