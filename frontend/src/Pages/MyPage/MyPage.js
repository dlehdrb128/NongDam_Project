import styled from "styled-components";
import Remocon from "../../LayOut/Remocon";
import Mypagesec1 from "./section/Mypagesec1";
import Mypagesec2 from "./section/Mypagesec2";
import { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
// 메인 컨테이너
const Main = styled.main`
  width: inherit;
  padding-top: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  //섹션 컨테이너
  & > div.sec_wrap {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const Mypage = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const getLogin = async () => {
      try {
        let response = await axios.get("http://localhost:8080/login/check", {
          withCredentials: true,
        });

        if (response.data.status === 201) {
          setUserData(response.data.userInfo)
          console.log(response);
          try {
            const response2 = await axios(`http://localhost:8080/orders/${response.data.userInfo.user_key}`);
            setData(response2.data);
            console.log(data);
          } catch (error) {
            console.log(error)
          }
        } else {
          alert('로그인 하셔야 합니다')
          navigate('/')
        }
      } catch (error) {
        console.log(error)
      }
    }
    getLogin()
  }, [])


  if (loading) {
    return <h1>준비중입니다.</h1>;
  }
  if (data === undefined) {
    return null;
  }
  return (
    <Main>
      <div className="sec_wrap">
        <Mypagesec1 />
        {/* section1/왼쪽메뉴 */}
        <Mypagesec2 data={data} userData={userData} />
        {/* <Remocon></Remocon> */}
        {/* section2/오른쪽 상세내역 */}
      </div>
    </Main>
  );
};

export default Mypage;
