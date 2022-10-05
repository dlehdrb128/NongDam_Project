import styled from "styled-components";
import Theme from "../../../../theme/theme";

// 폼제목과 폼을 메인박스로 묶었다
const MainBox = styled.div`
  width: 843px;
  padding: 240px 0 7rem 0;
  display: flex;
  flex-direction: column;

  // form 제목
  & > h1 {
    font-family: "SCD-6";
    color: ${Theme.lightblack};
    font-size: 2.5rem;
    padding-bottom: 15px;
    border-bottom: 2px solid ${Theme.lightblack};
  }
  // form 으로 묶어서 아래에 한 줄씩 추가
  & > form {
    padding-bottom: 36px;
  }

  // 맨 아래 수정 등록 버튼을 묶은 박스
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
  border-bottom: 1px solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  // 내용 값을 받을 제목값
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${Theme.white};
    border-bottom: 1px solid ${Theme.lightgray};
    // 필수입력사항 *로 표시
    & > span {
      color: red;
      font-family: "SCD-6";
      font-size: 1.5rem;
    }
  }
  // input 담은 div 박스
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${Theme.liglightgray};
    // 내용 담기는 input
    & > input {
      font-family: "SCD-4";
      width: 300px;
      height: 40px;
      border: 1px solid ${Theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
  }
`;

// 대표이미지 등록부분 박스
const ImgBox = styled.div`
  width: inherit;
  height: 223px;
  display: flex;
  border-bottom: 1px solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  // 제목 - 대표이미지 등록
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${Theme.white};
    border-bottom: 1px solid ${Theme.lightgray};
    // 필수기입사항
    & > span {
      color: red;
      font-family: "SCD-6";
      font-size: 1.5rem;
    }
  }
  // input받을 내용 담긴 box
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${Theme.liglightgray};
    // 사진부분
    & > div:nth-child(1) {
      width: 164px;
      height: 182px;
      display: flex;
      flex-direction: column;
      //사진미리보기 부분/ 지금은 회색 박스
      & > div {
        width: 164px;
        height: 164px;
        background-color: ${Theme.lightgray};
        border-radius: 3px;
      }
      // 이미지 권장 사이즈 안내
      & > p {
        font-family: "SCD-5";
        text-align: center;
      }
    }
    // 등록 부분
    & > div:nth-child(2) {
      width: 496px;
      height: 182px;
      display: flex;
      flex-direction: column;
      padding-left: 5px;
      // 파일불러오는 input 버튼
      & > label {
        width: 73px;
        height: 30px;
        background-color: ${Theme.green};
        color: ${Theme.realWhite};
        text-align: center;
        border-radius: 3px;
        font-family: "SCD-6";
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      // 등록이미지 안내
      & > p {
        font-family: "SCD-5";
        font-size: 1rem;
      }
    }
  }
`;
// 라디오 선택박스
const RadioBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${Theme.lightgray};
  color: ${Theme.lightblack};

  // 타이틀
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${Theme.white};
    border-bottom: 1px solid ${Theme.lightgray};
    // 필수입력사항
    & > span {
      color: red;
      font-family: "SCD-6";
      font-size: 1.5rem;
    }
  }
  // 라디오 버튼 담을 박스
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${Theme.lightblack};
    // 라디오 버튼
    & > input {
      appearance: none;

      border-radius: 100%;
      width: 18px;
      height: 18px;

      border: 1px solid ${Theme.gray};
    }
    // 체크 됬을 때 스타일링
    & > input:checked {
      background-color: ${Theme.green};
    }
    //
    & > label {
      font-family: "SCD-3";
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
    font-family: "SCD-6";
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
      font-family: "SCD-4";
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
    font-family: "SCD-6";
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
        font-family: "SCD-3";
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
          font-family: "SCD-3";
          font-size: 1.3rem;
          padding: 5px;
          margin-right: 10px;
        }
      }
      & > select {
        font-family: "SCD-3";
        width: 68px;
        height: 40px;
        border: 1px solid ${Theme.gray};
        border-radius: 0.3rem;
        padding: 5px;
        font-size: 1.5rem;
        margin-right: 10px;
      }
      & > span {
        font-family: "SCD-3";
        font-size: 1.5rem;
        margin-right: 10px;
      }
    }
  }
`;

// 등록 버튼
const RegButton = styled.input`
  width: 187px;
  height: 50px;
  color: ${(props) => props.col};
  background-color: ${(props) => props.bgcol};
  font-family: "SCD-6";
  font-size: 1.8rem;
  border: none;
  border-radius: 3px;
  margin: 0 15px 0 15px;
  padding: 5px;
  cursor: pointer;
`;

// 등록버튼에 테두리만 줘서 수정버튼을 만듬
const EditButton = styled(RegButton)`
  border: 1px solid ${Theme.lightblack};
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
            <input type="text" required></input>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>상품요약설명</h2>
          <div>
            <input type="text"></input>
          </div>
        </ContentBox>
        <ContentBox>
          <h2>
            판매가<span> *</span>
          </h2>
          <div>
            <input type="number" required></input>
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
              <label for="input-file">등록</label>
              <input
                type="file"
                id="input-file"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
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
            <input type="radio" name="check"></input>
            <label>할인 적용</label>
            <input type="radio" name="check"></input>
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
            <input type="text"></input>
            <span>원</span>
          </div>
        </ContentBox>
        <PeriodSet>
          <h2>기간설정</h2>
          <div>
            <div>
              <input type="radio" name="check"></input>
              <label>사용함</label>
              <input type="radio" name="check"></input>
              <label>사용안함</label>
            </div>
            <div>
              <div>
                <input type="date"></input>
              </div>
              <select>
                <option>00</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
              </select>
              <span>시</span>
              <select>
                <option>00</option>
                <option>05</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
                <option>35</option>
                <option>40</option>
                <option>45</option>
                <option>50</option>
                <option>55</option>
              </select>
              <span>분 ~</span>
            </div>
            <div>
              <div>
                <input type="date"></input>
              </div>
              <select>
                <option>00</option>
                <option>01</option>
                <option>02</option>
                <option>03</option>
                <option>04</option>
                <option>05</option>
                <option>06</option>
                <option>07</option>
                <option>08</option>
                <option>09</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>18</option>
                <option>19</option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
              </select>
              <span>시</span>
              <select>
                <option>00</option>
                <option>05</option>
                <option>10</option>
                <option>15</option>
                <option>20</option>
                <option>25</option>
                <option>30</option>
                <option>35</option>
                <option>40</option>
                <option>45</option>
                <option>50</option>
                <option>55</option>
              </select>
              <span>분</span>
            </div>
          </div>
        </PeriodSet>
      </form>
      <div>
        <EditButton
          type="submit"
          id="editbutton"
          value="수정"
          col={Theme.lightblack}
          bgcol={Theme.realWhite}
        ></EditButton>
        <RegButton
          type="submit"
          id="regbutton"
          value="등록"
          col={Theme.realWhite}
          bgcol={Theme.green}
        ></RegButton>
      </div>
    </MainBox>
  );
};

export default NewProductForm;
