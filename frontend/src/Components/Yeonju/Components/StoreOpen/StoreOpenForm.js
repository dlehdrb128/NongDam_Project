import styled from 'styled-components';
import Theme from '../../../../theme/theme';

const MainBox = styled.div`
  width: 83.3rem;
  padding: 24rem 0 7rem 0;
  display: flex;
  flex-direction: column;

  // form 제목
  & > h1 {
    font-family: 'SCD-6';
    color: ${Theme.lightblack};
    font-size: 2.5rem;
    padding-bottom: 1.5rem;
    border-bottom: 0.2rem solid ${Theme.lightblack};
  }

  // form 으로 묶어서 아래에 한 줄씩 추가
  & > form {
    width: 84.4rem;
    padding-bottom: 3.6rem;
  }

  // 맨 아래(수정, 등록 박스)
  & > div {
    padding-top: 3.5rem;
    display: flex;
    justify-content: center;
  }
`;

// 각각 기입내용 한 줄로 박스화시켰음
const ContentBox = styled.div`
  width: 84.3rem;
  height: 8rem;
  display: flex;
  border-bottom: 0.1rem solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  & > h2 {
    width: 14.1rem;
    height: 8rem;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 3rem 0 3rem 1.8rem;
    background-color: ${Theme.white};
    border-bottom: 0.1rem solid ${Theme.lightgray};
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  & > div {
    width: 70.2rem;
    display: flex;
    padding: 2rem;
    align-items: center;
    border-left: 0.1rem solid ${Theme.liglightgray};
    & > input {
      font-family: 'SCD-4';
      width: 30rem;
      height: 4rem;
      border: 0.1rem solid ${Theme.gray};
      border-radius: 0.3rem;
      padding: 0.5rem;
      font-size: 1.5rem;
    }
    & > span {
      font-family: 'SCD-3';
      font-size: 1.3rem;
      padding-left: 0.5rem;
    }
  }
`;
// 사업장 주소 박스
const BusinessAdd = styled.div`
  width: 84.3rem;
  height: 20.8rem;
  display: flex;
  border-bottom: 0.1rem solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  & > h2 {
    width: 14.1rem;
    height: 20.8rem;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 3rem 0 3rem 1.8rem;
    background-color: ${Theme.white};
    border-bottom: 0.1rem solid ${Theme.lightgray};
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }

  & > div {
    width: 70.2rem;
    padding: 2.2rem 2rem 2.2rem 2rem;
    border-left: 0.1rem solid ${Theme.lightblack};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > div > input {
      font-family: 'SCD-4';
      width: 30rem;
      height: 4rem;
      border: 0.1rem solid ${Theme.gray};
      border-radius: 0.3rem;
      padding: 0.5rem;
      font-size: 1.5rem;
    }
    & > div > button {
      width: 12rem;
      height: 4rem;
      font-size: 1.5rem;
      font-family: 'SCD-6';
      color: ${Theme.realWhite};
      background-color: ${Theme.green};
      border: none;
      border-radius: 0.3rem;
      margin-left: 1.5rem;
      padding: 0.5rem;
      cursor: pointer;
    }
    & > input {
      font-family: 'SCD-4';
      width: 30rem;
      height: 4rem;
      border: 0.1rem solid ${Theme.gray};
      border-radius: 0.3rem;
      padding: 0.5rem;
      font-size: 1.5rem;
    }
  }
`;

// 전화번호 들어가는 박스
const TelBox = styled.div`
  width: 84.3rem;
  height: 8rem;
  display: flex;
  border-bottom: 0.1rem solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  & > h2 {
    width: 14.1rem;
    height: 8rem;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 3rem 0 3rem 1.8rem;
    background-color: ${Theme.white};
    border-bottom: 0.1rem solid ${Theme.lightgray};
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }

  & > div {
    width: 70.2rem;
    display: flex;
    padding: 2rem;
    align-items: center;
    border-left: 0.1rem solid ${Theme.lightblack};

    & > select {
      font-family: 'SCD-4';
      width: 10rem;
      height: 4rem;
      border: 0.1rem solid ${Theme.gray};
      border-radius: 0.3rem;
      padding: 0.5rem;
      font-size: 1.5rem;
    }
    & > input {
      font-family: 'SCD-4';
      width: 10rem;
      height: 4rem;
      border: 0.1rem solid ${Theme.gray};
      border-radius: 0.3rem;
      padding: 0.5rem;
      font-size: 1.5rem;
    }
    & > span {
      font-family: 'SCD-4';
      padding: 0 1rem 0 1rem;
      font-size: 1.5rem;
    }
    & > button {
      width: 12rem;
      height: 4rem;
      font-family: 'SCD-6';
      font-size: 1.5rem;
      color: ${Theme.realWhite};
      background-color: ${Theme.green};
      border: none;
      border-radius: 0.3rem;
      padding: 0.5rem;
      margin-left: 1.5rem;
      cursor: pointer;
    }
  }
`;

// 라디오 버튼 들어가는 박스
const RadioBox = styled.div`
  width: 84.3rem;
  height: 8rem;
  display: flex;
  border-bottom: 0.1rem solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  & > h2 {
    width: 14.1rem;
    height: 8rem;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 3rem 0 3rem 1.8rem;
    background-color: ${Theme.white};
    border-bottom: 0.1rem solid ${Theme.lightgray};
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  & > div {
    width: 70.2rem;
    display: flex;
    padding: 2rem;
    align-items: center;
    border-left: 0.1rem solid ${Theme.lightblack};

    & > input {
      appearance: none;

      border-radius: 100%;
      width: 1.8rem;
      height: 1.8rem;

      border: 0.1rem solid ${Theme.gray};
    }
    & > input:checked {
      background-color: ${Theme.green};
    }
    & > label {
      font-family: 'SCD-3';
      font-size: 1.3rem;
      padding: 0 2rem 0 0.5rem;
    }
  }
`;
// 등록 버튼
const RegButton = styled.button`
  width: 18.7rem;
  height: 5rem;
  color: ${(props) => props.col};
  background-color: ${(props) => props.bgcol};
  font-family: 'SCD-6';
  font-size: 1.8rem;
  border: none;
  border-radius: 0.3rem;
  margin: 0 1.5rem 0 1.5rem;
  padding: 0.5rem;
  cursor: pointer;
`;

// 등록버튼에 테두리만 줘서 수정버튼을 만듬
const EditButton = styled(RegButton)`
  border: 0.1rem solid ${Theme.lightblack};
`;

const StoreOpenForm = () => {
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
            <input type='text' required></input>
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
            <input type='tel' required></input>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>
            대표 이메일<span> *</span>
          </h2>
          <div>
            <input type='email' required></input>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>
            이름<span> *</span>
          </h2>
          <div>
            <input type='text' required></input>
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
              <option>042</option>
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
            <input type='email' required></input>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>
            발신전용 이메일<span> *</span>
          </h2>
          <div>
            <input type='email' required></input>
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
              <option>042</option>
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
            <input type='email' required></input>
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
              <option>042</option>
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
            <input></input>
          </div>
        </ContentBox>
      </form>
      <div>
        <EditButton col={Theme.lightblack} bgcol={Theme.realWhite}>
          수정
        </EditButton>
        <RegButton col={Theme.realWhite} bgcol={Theme.green}>
          등록
        </RegButton>
      </div>
    </MainBox>
  );
};

export default StoreOpenForm;
<input type='submit'></input>
