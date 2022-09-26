import styled from "styled-components";
import { Link } from "react-router-dom";

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
  border: 2px solid #80c342;
  display: flex;
  justify-content: space-between;
  padding-left: 20px;
  font-size: 1rem;
  outline-color: #80c342;

  &::placeholder {
    color: #c0c0c0;
  }

  &:focus {
  }
`;

const HeaderTopRight = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "NanumGothic-Regular";
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
    display: flex;
    flex-direction: column;
    gap: 20px;
    cursor: pointer;

    & > div:nth-child(1) {
      display: flex;
      gap: 15px;
      z-index: 1;
      & > img:nth-child(1) {
        width: 20px;
        height: 30px;
      }
      & > div:nth-child(2) {
        font-size: 1.3rem;
        font-weight: bold;
        color: #80c342;
      }
    }

    & > div:nth-child(2) {
      & > div {
        display: none;
      }
    }

    &:hover {
      & > div:nth-child(2) {
        position: absolute;
        width: 250px;
        height: 260px;
        display: flex;
        flex-direction: column;
        background-color: white;
        justify-content: flex-end;
        padding: 20px 10px 10px 10px;

        font-family: "NanumGothic-Regular";
        gap: 20px;

        & > div:hover {
          font-weight: bold;
        }

        & > img {
          width: 20px;
        }
        & > div {
          display: flex;
          gap: 20px;
        }
      }
    }
  }

  & > div:nth-child(3) {
    width: 120px;
    height: 30px;
    border: 1px solid #80c342;
    color: #80c342;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    font-family: "NanumGothic-Regular";

    &:hover {
      cursor: pointer;
    }
  }
`;

const NavBox = styled.nav`
  display: flex;
  width: 700px;
  justify-content: space-between;
  font-family: "NanumGothic-Bold";

  & > div:hover {
    cursor: pointer;
    color: #80c342;
    border-bottom: 30px solid #80c342;
    border-radius: 100%;
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
    color: #80c342;
    border-bottom: 30px solid #80c342;
    border-radius: 100%;
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
          <form action="">
            <HeaderInput placeholder="검색어를 입력해주세요"></HeaderInput>
          </form>
          <HeaderTopRight>
            <RightTop>
              <div>회원가입</div>
              <div>로그인</div>
              <div>고객센터</div>
            </RightTop>
            <RightMiddle>
              <img src="img/cart.svg" alt="이미지 없음" />
              <img src="img/orderlist.svg" alt="이미지 없음" />
              <img src="img/mypage.svg" alt="이미지 없음" />
            </RightMiddle>
          </HeaderTopRight>
        </HeaderTop>
        <HeaderBottom>
          <div>
            <div>
              <img src="/img/mainHamburger.svg" alt="이미지 없음"></img>
              <div>카테고리</div>
            </div>
            <div>
              <div>
                <img src="img/category-1.svg" alt="이미지 없음" />
                <div>오늘 뭐 해먹지?</div>
              </div>
              <div>
                <img src="img/category-2.svg" alt="이미지 없음" />
                <div>상큼한 과일로 기분전환!</div>
              </div>
              <div>
                <img src="img/category-3.svg" alt="이미지 없음" />
                <div>고소한 곡물류</div>
              </div>
              <div>
                <img src="img/category-4.svg" alt="이미지 없음" />
                <div>공지사항</div>
              </div>
              <div>
                <img src="img/category-5.svg" alt="이미지 없음" />
                <div>진행중인 이벤트</div>
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Header;
