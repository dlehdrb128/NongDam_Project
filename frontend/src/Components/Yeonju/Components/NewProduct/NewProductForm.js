import styled from 'styled-components';
import Theme from '../../../../theme/theme';

const MainBox = styled.div`
  width: 843px;
  padding: 240px 0 7rem 0;
  display: flex;
  flex-direction: column;

  // form 제목
  & > h1 {
    font-family: 'SCD-6';
    color: ${Theme.lightblack};
    font-size: 2.5rem;
    padding-bottom: 15px;
    border-bottom: 2px solid ${Theme.lightblack};
  }
  // form 으로 묶어서 아래에 한 줄씩 추가
  & > form {
    padding-bottom: 36px;
  }
`;

// 각각 기입내용 한 줄로 박스화시켰음
const ContentBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${Theme.white};
    border-bottom: 1px solid ${Theme.lightgray};
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${Theme.liglightgray};
    & > input {
      font-family: 'SCD-4';
      width: 300px;
      height: 40px;
      border: 1px solid ${Theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
    & > span {
      font-family: 'SCD-3';
      font-size: 1.3rem;
      padding-left: 5px;
    }
  }
`;

const ImgBox = styled.div`
  width: inherit;
  height: 223px;
  display: flex;
  border-bottom: 1px solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${Theme.white};
    border-bottom: 1px solid ${Theme.lightgray};
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${Theme.liglightgray};
    & > div:nth-child(1) {
      width: 164px;
      height: 182px;
      display: flex;
      flex-direction: column;
      & > div {
        width: 164px;
        height: 164px;
        background-color: ${Theme.lightgray};
        border-radius: 3px;
      }
      & > p {
        font-family: 'SCD-5';
        text-align: center;
      }
    }
    & > div:nth-child(2) {
      width: 496px;
      height: 182px;
      display: flex;
      flex-direction: column;
      padding-left: 5px;
      & > label {
        width: 73px;
        height: 30px;
        background-color: ${Theme.green};
        color: ${Theme.realWhite};
        text-align: center;
        border-radius: 3px;
        font-family: 'SCD-6';
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      & > p {
        font-family: 'SCD-5';
        font-size: 1rem;
      }
    }
  }
`;
const RadioBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${Theme.white};
    border-bottom: 1px solid ${Theme.lightgray};
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${Theme.lightblack};

    & > input {
      appearance: none;

      border-radius: 100%;
      width: 18px;
      height: 18px;

      border: 1px solid ${Theme.gray};
    }
    & > input:checked {
      background-color: ${Theme.green};
    }
    & > label {
      font-family: 'SCD-3';
      font-size: 1.3rem;
      padding: 0 20px 0 5px;
    }
  }
`;

const SelectBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${Theme.white};
    border-bottom: 1px solid ${Theme.lightgray};
  }

  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${Theme.lightblack};

    & > select {
      font-family: 'SCD-4';
      width: 100px;
      height: 40px;
      border: 1px solid ${Theme.gray};
      border-radius: 0.3rem;
      padding: 5px;
      font-size: 1.5rem;
    }
  }
`;

const PeriodSet = styled.div`
  width: inherit;
  height: 208px;
  display: flex;
  border-bottom: 1px solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${Theme.white};
    border-bottom: 0.1rem solid ${Theme.lightgray};
  }
  & > div {
    width: 702px;
    height: inherit;
    padding: 22px 20px 22px 20px;
    border-left: 1px solid ${Theme.lightblack};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & > div:nth-child(1) {
      display: flex;
      width: inherit;
      height: 50px;
      & > input {
        appearance: none;

        border-radius: 100%;
        width: 18px;
        height: 18px;

        border: 1px solid ${Theme.gray};
      }
      & > input:checked {
        background-color: ${Theme.green};
      }
      & > label {
        font-family: 'SCD-3';
        font-size: 1.3rem;
        padding: 0 20px 0 5px;
      }
    }
    & > div {
      display: flex;
      width: inherit;
      height: 50px;
      align-items: center;

      & div:nth-child(1) {
        & > input {
          width: 187px;
          height: 40px;
          border-radius: 3px;
          font-family: 'SCD-3';
          font-size: 1.3rem;
          padding: 5px;
          margin-right: 10px;
        }
      }
      & > select {
        font-family: 'SCD-3';
        width: 68px;
        height: 40px;
        border: 1px solid ${Theme.gray};
        border-radius: 0.3rem;
        padding: 5px;
        font-size: 1.5rem;
        margin-right: 10px;
      }
      & > span {
        font-family: 'SCD-3';
        font-size: 1.5rem;
        margin-right: 10px;
      }
    }
  }
`;

const EditButton = styled.label`
  width: 188px;
  height: 50px;
  font-size: 1.8rem;
  background-color: ${Theme.green};
`;

const NewProductForm = () => {
  return (
    <MainBox>
      <h1>상품 등록</h1>
      <form>
        <ContentBox>
          <h2>
            상품명<span> *</span>
          </h2>
          <div>
            <input type='text' required></input>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>상품요약설명</h2>
          <div>
            <input type='text'></input>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>
            판매가<span> *</span>
          </h2>
          <div>
            <input type='number' required></input>
          </div>
        </ContentBox>
        <ImgBox>
          <h2>
            대표이미지 등록<span> *</span>
          </h2>
          <div>
            <div>
              <div></div>
              <p>권장 500px * 500px</p>
            </div>
            <div>
              <label for='input-file'>등록</label>
              <input
                type='file'
                id='input-file'
                accept='image/jpeg,gif,png,jpg'
                style={{ display: 'none' }}
              ></input>
              <p>등록이미지 : 5M 이하 / gif, png, jpg(jpeg)</p>
            </div>
          </div>
        </ImgBox>
      </form>
      <h1>할인 적용</h1>
      <form>
        <RadioBox>
          <h2>
            할인 적용 여부
            <span> *</span>
          </h2>
          <div>
            <input type='radio' name='check'></input>
            <label>할인 적용</label>
            <input type='radio' name='check'></input>
            <label>적용 안함</label>
          </div>
        </RadioBox>
        <SelectBox>
          <h2>할인 유형</h2>
          <div>
            <select>
              <option>금액 할인</option>
              <option>정률 할인</option>
            </select>
          </div>
        </SelectBox>
        <ContentBox>
          <h2>할인율/ 할인금액</h2>
          <div>
            <input type='text'></input>
            <span>원</span>
          </div>
        </ContentBox>
        <PeriodSet>
          <h2>기간설정</h2>
          <div>
            <div>
              <input type='radio' name='check'></input>
              <label>사용함</label>
              <input type='radio' name='check'></input>
              <label>사용안함</label>
            </div>
            <div>
              <div>
                <input type='date'></input>
              </div>
              <select>
                <option>00</option>
                <option>01</option>
              </select>
              <span>시</span>
              <select>
                <option>00</option>
                <option>05</option>
              </select>
              <span>분 ~</span>
            </div>
            <div>
              <div>
                <input type='date'></input>
              </div>
              <select>
                <option>00</option>
                <option>01</option>
              </select>
              <span>시</span>
              <select>
                <option>00</option>
                <option>05</option>
              </select>
              <span>분</span>
            </div>
          </div>
        </PeriodSet>
      </form>
      <div>
        <input type='submit' id='editbutton'></input>
        <label for='editbutton'>수정</label>
        <input type='submit' id='regbutton'></input>
        <EditButton for='editbutton'>등록</EditButton>
      </div>
    </MainBox>
  );
};

export default NewProductForm;
