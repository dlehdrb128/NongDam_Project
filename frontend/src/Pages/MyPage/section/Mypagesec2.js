import styled from 'styled-components';
import Mypagesec2Info from './Mypagesec2Info';
import Mypagese2OrderState from './Mypagesec2OrderState';
import Mypage2OrderInfo from './Mypage2OrderInfo';

// Mypage 섹션 1 컨테이너(사이즈,위치조정)
const Section2 = styled.section`
  padding-top: 125px;
  width: 867px;
`;
const Mypagesec2 = ({ data, userData }) => {
  console.log(userData);
  return (
    <Section2>
      <Mypagesec2Info data={data} userData={userData} />
      {/* 회원정보 */}
      <Mypagese2OrderState data={data} />
      {/* 주문처리현황 */}
      <Mypage2OrderInfo data={data} />
      {/* 최근주문정보 */}
    </Section2>
  );
};
//end

export default Mypagesec2;
