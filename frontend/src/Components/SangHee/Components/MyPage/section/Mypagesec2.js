import styled from 'styled-components';
import Mypagesec2Info from './Mypagesec2Info';
import Mypagese2OrderState from './Mypagesec2OrderState';
import Mypage2OrderInfo from './Mypage2OrderInfo';

const Section2 = styled.section`
  padding-top: 125px;
  width: 867px;
`;
const Mypagesec2 = () => {
  return (
    <Section2>
      <Mypagesec2Info />
      <Mypagese2OrderState />
      <Mypage2OrderInfo />
    </Section2>
  );
};

export default Mypagesec2;
