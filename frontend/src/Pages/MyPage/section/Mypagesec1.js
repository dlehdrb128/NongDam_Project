import { Link } from "react-router-dom";
import styled from "styled-components";

// Mypage 섹션 1 컨테이너(위치조정)
const Section1 = styled.section`
  margin-right: 30px;
  //섹션1 타이틀
  & > h1:nth-child(1) {
    font-family: SCD-6;
    font-size: ${({ theme }) => theme.fontSize_40};
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 60px;
  }
  //섹션1 콘텐츠 컨테이너(사이즈조정)
  & > div {
    width: 189px;
    //섹션1 메뉴 콘텐츠 컨테이너(위치,테두리조정)
    & > div {
      border-top: 1px solid ${({ theme }) => theme.gray};
      padding: 20px 0;
      //섹션1 메뉴 콘텐츠 타이틀(폰트,컬러,위치조정)
      & > h2 {
        font-family: SCD-6;
        font-size: ${({ theme }) => theme.fontSize_18};
        color: ${({ theme }) => theme.lightblack};
        margin-bottom: 17px;
      }
      //섹션1 메뉴 텍스트 컨테이너
      & > div {
        //섹션1 메뉴 텍스트(폰트,사이즈,위치,컬러조정)
        & > a {
          font-family: SCD-3;
          display: block;
          font-size: ${({ theme }) => theme.fontSize_15};
          margin-bottom: 9px;
          color: ${({ theme }) => theme.gray};
          cursor: pointer;

          &:hover {
            font-weight: bold;
          }
        }
        //섹션1 메뉴 텍스트(마지막요소)(위치조정)
        & > a:last-child {
          margin-bottom: 0;
        }
      }
    }
    //섹션1 메뉴 텍스트 컨테이너(마지막요소)(위치조정)
    & > div:last-child {
      padding: 20px 0 0;
    }
  }
`;
const Mypagesec1 = () => {
  return (
    <Section1>
      {/* 섹션1 타이틀 */}
      <h1>마이페이지</h1>
      <div>
        {/* 메뉴 콘텐츠 */}
        <div>
          {/* 메뉴 콘텐츠 타이틀 */}
          <h2>쇼핑정보</h2>
          {/*메뉴 텍스트 컨테이너*/}
          <div>
            {/* 메뉴텍스트 */}
            <Link>주문내역</Link>
            <Link>취소/교환/반품내역</Link>
            <Link to="/cart">장바구니</Link>
            <Link>관심상품</Link>
          </div>
        </div>
        <div>
          {/* 메뉴 콘텐츠 타이틀 */}
          <h2>활동관리</h2>
          {/*메뉴 텍스트 컨테이너*/}
          <div>
            {/* 메뉴텍스트 */}
            <Link>적립금</Link>
            <Link>쿠폰</Link>
            <Link>게시물 관리</Link>
            <Link>상품 리뷰 관리</Link>
          </div>
        </div>
        <div>
          {/* 메뉴 콘텐츠 타이틀 */}
          <h2>정보관리</h2>
          {/*메뉴 텍스트 컨테이너*/}
          <div>
            {/* 메뉴텍스트 */}
            <Link>회원 정보 변경</Link>
            <Link>배송 주소록 관리</Link>
            <Link>정기배송 관리</Link>
            <Link>상품 리뷰 관리</Link>
          </div>
        </div>
        <div>
          {/* 메뉴 콘텐츠 타이틀 */}
          <h2>CS CENTER</h2>
          {/*메뉴 텍스트 컨테이너*/}
          <div>
            {/* 메뉴텍스트 */}
            <Link>1:1 맞춤상담</Link>
          </div>
        </div>
      </div>
    </Section1>
  );
};
//end

export default Mypagesec1;
