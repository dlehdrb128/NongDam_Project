import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Theme from '../../../../../theme/theme'

const { fontSize_40, fontSize_15, fontSize_18, lightblack, gray } = Theme

const Section1 = styled.div`
  &>h1:nth-child(1){
    font-family: SCD-6;
    font-size: ${fontSize_40};
    color: ${lightblack};
    margin-bottom: 60px;
  }
  &>div{
    width: 189px;
    &>div{
      border-top: 1px solid ${gray};
      padding: 20px 0;
      &>h2{
        font-family: SCD-6;
        font-size: ${fontSize_18};
        color: ${lightblack};
        margin-bottom: 17px;
      }
      &>div{
        &>a{
          font-family: SCD-3;
          display: block;
          font-size: ${fontSize_15};
          margin-bottom: 9px;
          color: ${gray};
          cursor: pointer;
        }
        &>a:last-child{
          margin-bottom: 0;
        }
      }
    }
    &>div:last-child{
      padding: 20px 0 0;
    }
  }
`
const Mypagesec1 = () => {
  return (
    <Section1>
      <h1>마이페이지</h1>
      <div>
        <div>
          <h2>쇼핑정보</h2>
          <div>
            <Link>주문내역</Link>
            <Link>취소/교환/반품내역</Link>
            <Link to="/cart">장바구니</Link>
            <Link>관심상품</Link>
          </div>
        </div>
        <div>
          <h2>활동관리</h2>
          <div>
            <Link>적립금</Link>
            <Link>쿠폰</Link>
            <Link>게시물 관리</Link>
            <Link>상품 리뷰 관리</Link>
          </div>
        </div>
        <div>
          <h2>정보관리</h2>
          <div>
            <Link>회원 정보 변경</Link>
            <Link>배송 주소록 관리</Link>
            <Link>정기배송 관리</Link>
            <Link>상품 리뷰 관리</Link>
          </div>
        </div>
        <div>
          <h2>CS CENTER</h2>
          <div>
            <Link>1:1 맞춤상담</Link>
          </div>
        </div>
      </div>
    </Section1>
  )
}

export default Mypagesec1