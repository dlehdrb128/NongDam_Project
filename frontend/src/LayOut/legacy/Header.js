import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderBox = styled.header`
  width: 1280px;
  height: 200px;
  display: flex;
  flex-direction: column;
  color: rgba(82, 82, 82, 1);
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
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  border: 2px solid #80c342;
  outline-color: #80c342;
  padding-left: 20px;
  font-size: 1rem;
  font-family: "NanumGothic-Regular";

  &::placeholder {
    color: #c0c0c0;
  }
`;

const HeaderTopRight = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "NanumGothic-Regular";
  color: rgba(82, 82, 82, 1);
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
        top: 200px;
        height: 350px;
        display: flex;
        flex-direction: column;
        background-color: white;
        justify-content: space-between;
        padding: 23px 13px;
        font-family: "NanumGothic-Regular";
        color: rgba(82, 82, 82, 1);
        z-index: 1;
        gap: 20px;

        & > div:hover {
          font-weight: bold;
        }

        & > img {
          width: 20px;
        }
        & > div {
          display: flex;
          align-items: center;
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

    &::after {
      content: "";
      display: block;
      margin: 15px auto;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: #80c342;
    }
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
    &::after {
      content: "";
      display: block;
      margin: 15px auto;
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: #80c342;
    }
  }
`;

const Header = () => {
  return (
    <>
      <HeaderBox>
        <HeaderTop>
          <a href="/">
            <HeaderLogo src="/img/logo.svg" alt="????????? ??????" />
          </a>
          <form action="">
            <HeaderInput placeholder="???????????? ??????????????????"></HeaderInput>
          </form>
          <HeaderTopRight>
            <RightTop>
              <div>????????????</div>
              <div>?????????</div>
              <div>????????????</div>
            </RightTop>
            <RightMiddle>
              <img src="img/cart.svg" alt="????????? ??????" />
              <img src="img/orderlist.svg" alt="????????? ??????" />
              <img src="img/mypage.svg" alt="????????? ??????" />
            </RightMiddle>
          </HeaderTopRight>
        </HeaderTop>
        <HeaderBottom>
          <div>
            <div>
              <img src="/img/mainHamburger.svg" alt="????????? ??????"></img>
              <div>????????????</div>
            </div>
            <div>
              <div>
                <img src="img/category-1.svg" alt="????????? ??????" />
                <div>?????? ??? ??????????</div>
              </div>
              <div>
                <img src="img/category-2.svg" alt="????????? ??????" />
                <div>????????? ????????? ????????????!</div>
              </div>
              <div>
                <img src="img/category-3.svg" alt="????????? ??????" />
                <div>????????? ?????????</div>
              </div>
              <div>
                <img src="img/category-4.svg" alt="????????? ??????" />
                <div>????????????</div>
              </div>
              <div>
                <img src="img/category-5.svg" alt="????????? ??????" />
                <div>???????????? ?????????</div>
              </div>
            </div>
          </div>
          <NavBox>
            <Link to="/">?????? ??????</Link>
            <div>?????????</div>
            <div>????????? ?????????</div>
            <div>?????????</div>
            <div>????????????</div>
          </NavBox>
          <div>?????? ??????</div>
        </HeaderBottom>
      </HeaderBox>
    </>
  );
};

export default Header;
