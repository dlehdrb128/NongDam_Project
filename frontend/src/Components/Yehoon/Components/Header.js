import styled from "styled-components";
import { Outlet, Link } from "react-router-dom";

const HeaderBox = styled.header`
  width: 1280px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const HeaderTop = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const HeaderLogo = styled.img`
  width: 200px;
  height: 50px;
  cursor: pointer;
`;

const HeaderInput = styled.input`
  width: 550px;
  height: 60px;
  border-radius: 10px;
  border: 2px solid darkgreen;
  text-align: center;
  font-weight: bold;
`;

const HeaderTopRight = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightTop = styled.div`
  display: flex;
  margin-bottom: 30px;
  font-size: 0.7rem;
  gap: 30px;

  & > div {
    cursor: pointer;
  }

  & > div:hover {
    font-weight: bold;
  }
`;

const RightMiddle = styled.div`
  display: flex;
  gap: 20px;

  align-self: flex-end;

  & > img:hover {
    cursor: pointer;
    opacity: 60%;
  }
`;

const HeaderBottom = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: space-between;

  & > div:nth-child(1) {
    font-size: 1.3rem;
    font-weight: bold;

    &:hover {
      cursor: pointer;
      color: lightseagreen;
    }
  }

  & > div:nth-child(3) {
    width: 120px;
    height: 30px;
    border: 1px solid lightseagreen;
    color: lightseagreen;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;

    &:hover {
      cursor: pointer;
    }
  }
`;

const NavBox = styled.nav`
  display: flex;
  width: 700px;
  justify-content: space-between;
  font-weight: bold;
  & > div:hover {
    cursor: pointer;
    color: green;
  }

  & > a:link {
    text-decoration: none;
    color: black;
  }
  & > a:visited {
    text-decoration: none;
    color: black;
  }
  & > a:active {
    text-decoration: none;
    color: black;
  }

  & > a:hover {
    color: green;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderBox>
        <HeaderTop>
          <a href="/">
            <HeaderLogo src="/img/logo.svg" alt="이미지 없음" />
          </a>
          <div>
            <HeaderInput placeholder="검색어를 입력해주세요"></HeaderInput>
          </div>
          <HeaderTopRight>
            <RightTop>
              <div>회원가입</div>
              <div>로그인</div>
              <div>고객센터</div>
            </RightTop>
            <RightMiddle>
              <img src="img/cart.svg" alt="" />
              <img src="img/orderlist.svg" alt="" />
              <img src="img/mypage.svg" alt="" />
            </RightMiddle>
          </HeaderTopRight>
        </HeaderTop>
        <HeaderBottom>
          <div>카테고리</div>
          <NavBox>
            <Link to="/">전체 상품</Link>
            <div>베스트</div>
            <div>지역별 농산물</div>
            <div>이벤트</div>
            <div>공지사항</div>
          </NavBox>
          <div>배송 안내</div>
        </HeaderBottom>
      </HeaderBox>

      <Outlet />
    </>
  );
};

export default Header;
