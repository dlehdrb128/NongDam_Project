import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
const LoginPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > form {
    display: flex;
    flex-direction: column;
  }
`;
const NewLogin = () => {
  const [user, setUser] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get("http://localhost:8080/signUp");
        setUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8080/signUp")
      .then((res) => console.log(res))
      .catch();
  });

  if (user === undefined) {
    return null;
  }
  return (
    <LoginPage>
      <h1>로그인</h1>
      <form method="post" action="http://localhost:8080/signUp">
        <input type={"text"} placeholder="로그인" name="id"></input>
        <input type={"password"} placeholder="비밀번호" name="password"></input>
        <button type="submit">로그인</button>
      </form>
    </LoginPage>
  );
};
export default NewLogin;
