import { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../Theme/theme';
import axios from 'axios';

// 메인박스로 묶음
const MainBox = styled.div`
  width: 843px;
  padding: 180px 0 70px 0;
  display: flex;
  flex-direction: column;

  // 각 form의 제목을 h1으로 스타일링 해주었다
  & > h1 {
    font-family: 'SCD-6';
    color: ${({ theme }) => theme.lightblack};
    font-size: 2.5rem;
    padding-bottom: 15px;
    border-bottom: 2px solid ${({ theme }) => theme.lightblack};
  }

  // 각각의 form으로 묶은 후 해당 form의 내용은
  // ContentBox로 묶어서 아래에 한 줄씩 추가
  & > form {
    padding-bottom: 36px;
  }

  // 해당페이지에 제일 아래 수정,등록버튼을 묶은 div
  & > div {
    padding-top: 35px;
    display: flex;
    justify-content: center;
  }
`;

// 각각 기입내용 한 줄로 박스화시켰음
const ContentBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};

  // 기입내용의 제목을 h2
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // 필수 기입내용 *로 표현한 부분을 span으로 감싸줌
    // span있는거만 적용됨
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }

  // 기입내용 input을 div로 묶음
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.liglightgray};
    // 기입내용 input 박스 설정
    & > input {
      font-family: 'SCD-4';
      width: 300px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
    //  input박스 뒤에 따로 특이사항 붙는 부분
    // span 추가해서 설정하면되고, 없어도 상관없음
    & > span {
      font-family: 'SCD-3';
      font-size: 1.3rem;
      padding-left: 5px;
    }
  }
`;

// 사업장 주소 input부분은 형식이 달라서 따로 지정
const BusinessAdd = styled.div`
  width: inherit;
  height: 208px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};

  // 큰 틀을 비슷
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 0.1rem solid ${({ theme }) => theme.lightgray};
    // 이거 역시 필수기입내용 * 표시
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  // 사업장 주소를 입력 받을 박스
  & > div {
    width: inherit;
    padding: 22px 20px 22px 20px;
    border-left: 1px solid ${({ theme }) => theme.lightblack};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    // 우편번호 창
    & > div > input {
      font-family: 'SCD-4';
      width: 300px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
    // 주소 검색 버튼
    & > div > button {
      width: 120px;
      height: 40px;
      font-size: 1.5rem;
      font-family: 'SCD-6';
      color: ${({ theme }) => theme.realWhite};
      background-color: ${({ theme }) => theme.green};
      border: none;
      border-radius: 3px;
      margin-left: 15px;
      padding: 5px;
      cursor: pointer;
    }
    // 전체주와 나머지 주소 받을 input
    & > input {
      font-family: 'SCD-4';
      width: 300px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
  }
`;

// 전화번호 들어가는 박스
const TelBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};

  // 전화번호 타이틀
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // *로 된 필수입력사항
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  // input을 묶은 div
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.lightblack};
    // 번호의 맨 앞자리 선택박스
    & > select {
      font-family: 'SCD-4';
      width: 100px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 0.3rem;
      padding: 5px;
      font-size: 1.5rem;
    }
    // 전화번호 개인 입력창
    & > input {
      font-family: 'SCD-4';
      width: 100px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
    // 전화번호 사이사이 - 표시
    & > span {
      font-family: 'SCD-4';
      padding: 0 10px 0 10px;
      font-size: 1.5rem;
    }
    // 인증번호 받는 버튼
    & > button {
      width: 120px;
      height: 40px;
      font-family: 'SCD-6';
      font-size: 1.5rem;
      color: ${({ theme }) => theme.realWhite};
      background-color: ${({ theme }) => theme.green};
      border: none;
      border-radius: 3px;
      padding: 5px;
      margin-left: 15px;
      cursor: pointer;
    }
  }
`;

// 라디오 버튼 들어가는 박스
const RadioBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};
  // 타이틀
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // * 표시 필수입력사항
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  // input 묶을 div
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.lightblack};

    // 라디오 버튼 스타일링
    & > input {
      appearance: none;

      border-radius: 100%;
      width: 18px;
      height: 18px;

      border: 1px solid ${({ theme }) => theme.gray};
    }
    // 체크되면 달라지는 스타일링
    & > input:checked {
      background-color: ${({ theme }) => theme.green};
    }
    // 라디오 버튼의 내용
    & > label {
      font-family: 'SCD-3';
      font-size: 1.3rem;
      padding: 0 20px 0 5px;
    }
  }
`;
// 등록 버튼
const RegButton = styled.button`
  width: 187px;
  height: 50px;
  color: ${(props) => props.col};
  background-color: ${(props) => props.bgcol};
  font-family: 'SCD-6';
  font-size: 1.8rem;
  border: none;
  border-radius: 3px;
  margin: 0 15px 0 15px;
  padding: 5px;
  cursor: pointer;
`;

// 등록버튼에 테두리만 줘서 수정버튼을 만듬
const EditButton = styled(RegButton)`
  border: 1px solid ${({ theme }) => theme.lightblack};
`;

const StoreOpenForm = () => {
  const [value, setValue] = useState('');
  const onchange = (e) => {
    console.log(value);
    setValue(e.target.value);
  };

  const data1 = {
    test1: value,
  };

  const onClick = () => {
    const data = axios.post('http://localhost:8080/storeOpen', data1);
  };

  return (
    <MainBox>
      <h1>스토어 정보</h1>
      <form>
        <ContentBox>
          <h2>
            쇼핑몰명
            <span> *</span>
          </h2>
          <div>
            <input
              type='text'
              name='storeName'
              required
              onChange={onchange}
            ></input>
            <button onClick={onClick}>등록</button>
            <span>
              (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10자~16자)
            </span>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>
            대표 휴대전화<span> *</span>
          </h2>
          <div>
            <input type='tel' name='mobilephone' required></input>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>
            대표 이메일<span> *</span>
          </h2>
          <div>
            <input type='email' name='email' required></input>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>
            이름<span> *</span>
          </h2>
          <div>
            <input type='text' name='name' required></input>
          </div>
        </ContentBox>
        <BusinessAdd>
          <h2>
            사업장 주소<span> *</span>
          </h2>
          <div>
            <div>
              <input placeholder='우편번호'></input>
              <button>주소검색</button>
            </div>
            <input></input>
            <input placeholder='나머지 주소(선택 입력 가능)'></input>
          </div>
        </BusinessAdd>
        <TelBox>
          <h2>대표전화</h2>
          <div>
            <select>
              <option>02</option>
              <option>031</option>
              <option>032</option>
              <option>033</option>
              <option>041</option>
              <option>042</option>
              <option>043</option>
              <option>044</option>
              <option>051</option>
              <option>052</option>
              <option>054</option>
              <option>055</option>
              <option>061</option>
              <option>062</option>
              <option>063</option>
              <option>063</option>
              <option>070</option>
              <option>010</option>
            </select>
            <span>-</span>
            <input></input>
            <span>-</span>
            <input></input>
          </div>
        </TelBox>
        <TelBox>
          <h2>
            휴대전화
            <span> *</span>
          </h2>

          <div>
            <select>
              <option>010</option>
              <option>011</option>
              <option>016</option>
              <option>017</option>
              <option>018</option>
              <option>019</option>
              <option>070</option>
            </select>
            <span>-</span>
            <input></input>
            <span>-</span>
            <input></input>
            <button>인증번호받기</button>
          </div>
        </TelBox>
        <ContentBox>
          <h2>
            수신전용 이메일<span> *</span>
          </h2>
          <div>
            <input type='email' name='receiveEmail' required></input>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>
            발신전용 이메일<span> *</span>
          </h2>
          <div>
            <input type='email' name='outgoingEmail' required></input>
          </div>
        </ContentBox>
        <RadioBox>
          <h2>
            통신판매업 신고
            <span> *</span>
          </h2>
          <div>
            <input type='radio' name='check'></input>
            <label>신고함</label>
            <input type='radio' name='check'></input>
            <label>신고안함</label>
          </div>
        </RadioBox>
      </form>
      <h1>고객센터 정보안내 설정</h1>
      <form>
        <TelBox>
          <h2>
            상담전화
            <span> *</span>
          </h2>
          <div>
            <select>
              <option>02</option>
              <option>031</option>
              <option>032</option>
              <option>033</option>
              <option>041</option>
              <option>042</option>
              <option>043</option>
              <option>044</option>
              <option>051</option>
              <option>052</option>
              <option>054</option>
              <option>055</option>
              <option>061</option>
              <option>062</option>
              <option>063</option>
              <option>063</option>
              <option>070</option>
              <option>010</option>
            </select>
            <span>-</span>
            <input></input>
            <span>-</span>
            <input></input>
          </div>
        </TelBox>
        <ContentBox>
          <h2>
            상담 이메일<span> *</span>
          </h2>
          <div>
            <input type='email' name='csEmail' required></input>
          </div>
        </ContentBox>
        <TelBox>
          <h2>
            팩스 전화
            <span> *</span>
          </h2>
          <div>
            <select>
              <option>02</option>
              <option>031</option>
              <option>032</option>
              <option>033</option>
              <option>041</option>
              <option>042</option>
              <option>043</option>
              <option>044</option>
              <option>051</option>
              <option>052</option>
              <option>054</option>
              <option>055</option>
              <option>061</option>
              <option>062</option>
              <option>063</option>
              <option>063</option>
              <option>070</option>
              <option>010</option>
            </select>
            <span>-</span>
            <input></input>
            <span>-</span>
            <input></input>
          </div>
        </TelBox>
        <ContentBox>
          <h2>
            CS 운영시간<span> *</span>
          </h2>
          <div>
            <input type='text' name='csHours'></input>
          </div>
        </ContentBox>
      </form>
      <div>
        <EditButton
          type='submit'
          col={Theme.lightblack}
          bgcol={Theme.realWhite}
        >
          수정
        </EditButton>
        <RegButton type='submit' col={Theme.realWhite} bgcol={Theme.green}>
          등록
        </RegButton>
      </div>
    </MainBox>
  );
};

export default StoreOpenForm;
<input type='submit'></input>;
