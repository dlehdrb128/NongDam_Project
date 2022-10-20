import styled from 'styled-components';
import axios from 'axios';
import { useEffect, useState } from 'react';

const SignUpParent = styled.form`
  /* 회원가입창 부모 설정 */
  width: 1230px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: 150px;
  & > h1 {
    font-size: 3rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
  }
  & > h2 {
    width: inherit;
    text-align: left;
    font-size: 2rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
  }
  & > button {
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 3px;
    color: ${({ theme }) => theme.realWhite};
    background-color: ${({ theme }) => theme.green};
    font-size: 1.5rem;
    font-family: SCD-3;
  }
`;
const MemberType = styled.div`
  /* 회원구분 */
  width: 1230px;
  height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-top: 2px solid ${({ theme }) => theme.lightblack};
  border-bottom: 2px solid ${({ theme }) => theme.lightblack};
  & > div:nth-child(2) {
    width: 1030px;
    font-size: 1.5rem;
    font-family: SCD-3;
    color: ${({ theme }) => theme.lightblack};
    display: flex;
    /* justify-content: center; */
    align-items: center;
    padding-left: 10px;
  }
`;
const SideBar = styled.div`
  /* 왼쪽 회원구분 */
  width: 200px;
  height: inherit;
  color: ${({ theme }) => theme.lightblack};
  font-size: 2rem;
  background-color: #ddd;
  border-top: 2px solid ${({ theme }) => theme.lightblack};
  border-bottom: 2px solid ${({ theme }) => theme.lightblack};
  border-right: 2px solid ${({ theme }) => theme.lightblack};
  display: flex;
  align-items: center;
  padding-left: 10px;
  & > span {
    color: red;
    font-size: inherit;
  }
`;
const BasicInfo = styled.div`
  /* 기본정보 */
  width: 1230px;
  height: inherit;
  display: flex;
  flex-direction: column;
  & > div {
    width: inherit;
    height: inherit;
    border-top: 2px solid ${({ theme }) => theme.lightblack};
    display: flex;
    align-items: center;
    & > p {
      color: ${({ theme }) => theme.lightblack};
      font-size: 1rem;
      font-family: SCD-5;
      position: relative;
      left: 20px;
    }
  }
  & > div:nth-child(5) {
    /* 주소 */
    & > div:nth-child(2) {
      display: flex;
      flex-direction: column;
      & > div:nth-child(1) {
        padding-left: 10px;
        display: flex;
        & > input {
          width: 150px;
          height: 30px;
          padding-left: 10px;
          font-size: 1.5rem;
          font-family: SCD-3;
        }
        & > button {
          width: 120px;
          height: 30px;
          background-color: ${({ theme }) => theme.green};
          border: none;
          border-radius: 3px;
          color: ${({ theme }) => theme.realWhite};
          font-size: 1.5rem;
          font-family: SCD-3;
        }
      }
    }
  }
  & > div:nth-child(7) {
    /* 휴대전화 */
    & > button {
      width: 150px;
      height: 30px;
      border-radius: 3px;
      border: none;
      background-color: ${({ theme }) => theme.green};
      color: ${({ theme }) => theme.realWhite};
      font-family: SCD-3;
      font-size: 1.5rem;
    }
  }
  & > div:nth-child(8) {
    border-bottom: 1px solid ${({ theme }) => theme.lightblack};
  }
  & > div:nth-child(9) {
    /* 평생회원 */
    width: inherit;
    height: inherit;
    border-bottom: 2px solid ${({ theme }) => theme.lightblack};
    font-family: SCD-3;
    font-size: 1.5rem;
    & > input {
      margin-left: 11px;
    }
  }
`;
const MiddleBox = styled.div`
  /* 왼쪽 목록 작은 사이즈 */
  width: 200px;
  height: 50px;
  color: ${({ theme }) => theme.lightblack};
  font-size: 2rem;
  background-color: #ddd;
  border-right: 2px solid ${({ theme }) => theme.lightblack};
  padding-left: 10px;
  display: flex;
  align-items: center;
  & > span {
    font-size: 2rem;
    color: red;
  }
`;
const LongBox = styled.div`
  /* 왼쪽 목록 큰 사이즈 */
  width: 200px;
  height: 150px;
  color: ${({ theme }) => theme.lightblack};
  font-size: 2rem;
  background-color: #ddd;
  border-right: 2px solid ${({ theme }) => theme.lightblack};
  padding-top: 10px;
  padding-left: 10px;
  display: flex;
`;
const InputText = styled.input`
  /* 작성란 */
  width: 300px;
  height: 30px;
  position: relative;
  left: 10px;
  padding-left: 10px;
  font-size: 1.5rem;
  font-family: SCD-3;
`;
const Phone = styled.input`
  /* 폰번호 작성란 */
  width: 300px;
  height: 30px;
  color: ${({ theme }) => theme.lightblack};
  font-size: 1.5rem;
  font-family: SCD-3;
  padding-left: 10px;
  margin-left: 10px;
`;
const MoreInfo = styled.div`
  /* 추가정보 */
  width: inherit;
  height: inherit;
  border-top: 2px solid ${({ theme }) => theme.lightblack};
  border-bottom: 2px solid ${({ theme }) => theme.lightblack};
  & > div:nth-child(1) {
    border-bottom: 2px solid ${({ theme }) => theme.lightblack};
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.lightblack};
    font-size: 1.5rem;
    font-family: SCD-3;
    & > input:nth-child(2) {
      width: 180px;
      height: 30px;
      padding-left: 10px;
      margin-left: 10px;
      color: ${({ theme }) => theme.lightblack};
      font-size: 1.5rem;
      font-family: SCD-3;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    align-items: center;
  }
`;
const Terms = styled.div`
  /* 약관동의 */
  width: inherit;
  display: flex;
  flex-direction: column;
  border-top: 2px solid ${({ theme }) => theme.lightblack};
  & > div {
    height: 50px;
    border-bottom: 1px solid ${({ theme }) => theme.lightblack};
    display: flex;
    align-items: center;
    padding-left: 10px;
    & > p {
      font-size: 1.5rem;
      font-family: SCD-3;
      color: ${({ theme }) => theme.lightblack};
    }
  }
  & > div:nth-child(1) {
    height: 80px;
    & > p {
      font-size: 2rem;
      font-family: SCD-5;
      color: ${({ theme }) => theme.lightblack};
    }
  }
`;
const InputClick = styled.input`
  /* 선택 버튼 */
  accent-color: green;
`;

const SignUp = () => {
  const [data, setData] = useState();

  const [inputData, setInputData] = useState({
    userAuth: '',
    userId: '',
    userEmail: '',
    userPassword: '',
    userPasswordcheck: '',
    userName: '',
    userZipcode: '',
    userAddress: '',
    userAddressDetail: '',
    userCall: '',
    userPhone: '',
    useBrith: '',
  });

  const {
    userAuth,
    userId,
    userEmail,
    userPassword,
    userName,
    userZipcode,
    userAddress,
    userAddressDetail,
    userCall,
    userPhone,
    useBrith,
  } = inputData;

  const onchange = (e) => {
    const { value, name } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const dbData = {
    userId: userId,
    userAuth: userAuth,
    userEmail: userEmail,
    userPassword: userPassword,
    userName: userName,
    userZipcode: userZipcode,
    userAddress: userAddress,
    userAddressDetail: userAddressDetail,
    userCall: userCall,
    userPhone: userPhone,
    useBrith: useBrith,
  };

  console.log(dbData);
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get('http://localhost:8080/signUp');
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  if (data === undefined) {
    return null;
  }
  return (
    <SignUpParent action='http://localhost:8080/signUp' method='post'>
      {/* 회원가입창 부모 설정 */}
      <h1>회원가입</h1>
      <br />
      <MemberType>
        {/* 회원구분  */}
        <SideBar>
          {/* 왼쪽 회원구분 */}
          회원구분<span>*</span>
        </SideBar>
        <div>
          <InputClick type='radio' name='member' value='일반'></InputClick>
          {/* 선택 버튼 */}
          &nbsp;개인회원 &nbsp;&nbsp;
          <InputClick type='radio' name='member' value='사업자'></InputClick>
          &nbsp;사업자회원
        </div>
      </MemberType>
      <br />
      <h2>기본정보</h2>
      <br />
      <BasicInfo>
        {/* 기본정보 */}
        <div>
          <MiddleBox>
            {/* 왼쪽 목록 작은 사이즈 */}
            아이디<span>*</span>
          </MiddleBox>
          <InputText type='text' name='userId' onChange={onchange}></InputText>
          {/* 작성란 */}
          <p>(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)</p>
        </div>
        <div>
          <MiddleBox>
            비밀번호<span>*</span>
          </MiddleBox>
          <InputText
            type='password'
            name='userPassword'
            onChange={onchange}
          ></InputText>
        </div>
        <div>
          <MiddleBox>
            비밀번호 확인<span>*</span>
          </MiddleBox>
          <InputText type='password'></InputText>
        </div>
        <div>
          <MiddleBox>
            이름<span>*</span>
          </MiddleBox>
          <InputText
            type='text'
            name='userName'
            onChange={onchange}
          ></InputText>
        </div>
        <div>
          <LongBox>주소</LongBox>
          {/* 왼쪽 목록 큰 사이즈 */}
          <div>
            <div>
              <input
                type='text'
                placeholder='우편번호'
                name='userZipcode'
              ></input>
              &nbsp;&nbsp;&nbsp;
              <button>주소검색</button>
            </div>
            <br />
            <div>
              <InputText
                placeholder='기본주소'
                name='userAddress'
                onChange={onchange}
              ></InputText>
              <br />
              <br />
              <InputText
                placeholder='나머지 주소(선택 입력 가능)'
                name='userAddressDetail'
                onChange={onchange}
              ></InputText>
            </div>
          </div>
        </div>
        <div>
          <MiddleBox>일반전화</MiddleBox>
          <Phone
            type='number'
            placeholder="전화번호 입력('-'제외)"
            maxLength={11}
            name='userCall'
            onChange={onchange}
          />
        </div>
        <div>
          <MiddleBox>
            휴대전화<span>*</span>
          </MiddleBox>
          <Phone
            type={'text'}
            placeholder="핸드폰번호 입력('-'제외)"
            maxLength={11}
            name='userPhone'
            onChange={onchange}
          />
          {/* 폰번호 작성란 */}
          &nbsp;&nbsp;&nbsp;
          <button>인증번호받기</button>
        </div>
        <div>
          <MiddleBox>
            이메일<span>*</span>
          </MiddleBox>
          <InputText name='userEmail' onChange={onchange}></InputText>
        </div>
      </BasicInfo>
      <br />
      <h2>추가정보</h2>
      <br />
      <MoreInfo>
        {/* 추가정보 */}
        <div>
          <MiddleBox>생년월일</MiddleBox>
          <input type='date' name='userBrith' onChange={onchange}></input>
          &nbsp;&nbsp;&nbsp;
          <InputClick type={'radio'} name='calendar' />
          &nbsp;양력 &nbsp;&nbsp;
          <InputClick type={'radio'} name='calendar' />
          &nbsp;음력
        </div>
        <div>
          <MiddleBox>추천인 아이디</MiddleBox>
          <InputText type={'search'}></InputText>
        </div>
      </MoreInfo>
      <br />
      <h2>약관동의</h2>
      <br />
      <Terms>
        {/* 약관동의 */}
        <div>
          <InputClick type={'checkbox'}></InputClick>
          &nbsp;&nbsp;
          <p>
            이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에 모두
            동의합니다.
          </p>
        </div>
        <div>
          <InputClick type={'checkbox'}></InputClick>
          &nbsp;&nbsp;
          <p>[필수] 이용약관 동의</p>
        </div>
        <div>
          <InputClick type={'checkbox'}></InputClick>
          &nbsp;&nbsp;
          <p>[필수] 개인정보 수집 및 이용 동의</p>
        </div>
        <div>
          <InputClick type={'checkbox'}></InputClick>
          &nbsp;&nbsp;
          <p>[선택] SMS 수신을 동의하십니까?</p>
          &nbsp;&nbsp;&nbsp;
          <InputClick type={'checkbox'}></InputClick>
          &nbsp;&nbsp;
          <p>[선택] 이메일 수신을 동의하십니까?</p>
        </div>
      </Terms>
      <br />
      <br />
      <button type='submit'>회원가입</button>
    </SignUpParent>
  );
};
export default SignUp;
