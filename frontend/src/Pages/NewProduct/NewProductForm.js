import { useState } from "react";
import styled from "styled-components";
import Theme from "../../Theme/theme";

// 폼제목과 폼을 메인박스로 묶었다
const MainBox = styled.div`
  width: 843px;
  padding: 240px 0 7rem 0;
  display: flex;
  flex-direction: column;

  // form 제목
  & > form {
    & > h1 {
      font-family: "SCD-6";
      color: ${({ theme }) => theme.lightblack};
      font-size: 2.5rem;
      padding-bottom: 15px;
      border-bottom: 2px solid ${({ theme }) => theme.lightblack};
    }
    // form 으로 묶어서 아래에 한 줄씩 추가
    & > div:nth-child(2) {
      padding-bottom: 36px;
    }
    & > div:nth-child(4) {
      padding-bottom: 36px;
    }
    // 맨 아래 수정 등록 버튼을 묶은 박스
    & > div:nth-child(5) {
      padding-top: 35px;
      display: flex;
      justify-content: center;
    }
  }
`;

// 각각 기입내용 한 줄로 박스화시켰음
const ContentBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};

  // 내용 값을 받을 제목값
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
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
    border-left: 1px solid ${({ theme }) => theme.liglightgray};
    // 내용 담기는 input
    & > input {
      font-family: "SCD-4";
      width: 300px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
    & > span {
      font-family: "SCD-3";
      font-size: 1.5rem;
      padding-left: 5px;
    }
  }
`;

// 대표이미지 등록부분 박스
const ImgBox = styled.div`
  width: inherit;
  height: 223px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};

  // 제목 - 대표이미지 등록
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
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
    border-left: 1px solid ${({ theme }) => theme.liglightgray};
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
        background-color: ${({ theme }) => theme.lightgray};
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
        background-color: ${({ theme }) => theme.green};
        color: ${({ theme }) => theme.realWhite};
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
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};

  // 타이틀
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
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
    border-left: 1px solid ${({ theme }) => theme.lightblack};
    // 라디오 버튼
    & > input {
      appearance: none;

      border-radius: 100%;
      width: 18px;
      height: 18px;

      border: 1px solid ${({ theme }) => theme.gray};
    }
    // 체크 됬을 때 스타일링
    & > input:checked {
      background-color: ${({ theme }) => theme.green};
    }
    //
    & > label {
      font-family: "SCD-3";
      font-size: 1.3rem;
      padding: 0 20px 0 5px;
    }
  }
`;

// 할인적용 - 할인유형을 고를 수 있는 select
// 전체 큰 박스로 묶음
const SelectBox = styled.div`
  width: inherit;
  height: 80px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};

  // 할인유형
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  }

  // select 박스부분 전체 묶은 div
  & > div {
    width: 702px;
    display: flex;
    padding: 20px;
    align-items: center;
    border-left: 1px solid ${({ theme }) => theme.lightblack};

    // select박스 부분
    & > select {
      font-family: "SCD-4";
      width: 100px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 0.3rem;
      padding: 5px;
      font-size: 1.5rem;
    }
  }
`;
// 할인적용 - 기간 설정 부분
const PeriodSet = styled.div`
  width: inherit;
  height: 208px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};

  // 기간설정
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 0.1rem solid ${({ theme }) => theme.lightgray};
  }
  // 기간설정 세부내용 다 묶은 박스
  & > div {
    width: 702px;
    height: inherit;
    padding: 22px 20px 22px 20px;
    border-left: 1px solid ${({ theme }) => theme.lightblack};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    //첫번쨰 div - 라디오 버튼 묶은 것
    & > div:nth-child(1) {
      display: flex;
      width: inherit;
      height: 50px;
      // 라디오 버튼
      & > input {
        appearance: none;

        border-radius: 100%;
        width: 18px;
        height: 18px;

        border: 1px solid ${({ theme }) => theme.gray};
      }
      // 라이도 버튼 체크 됬을때 스타일링
      & > input:checked {
        background-color: ${({ theme }) => theme.green};
      }
      // 각 라디오버튼의 내용 스타일링
      & > label {
        font-family: "SCD-3";
        font-size: 1.3rem;
        padding: 0 20px 0 5px;
      }
    }
    // 날짜 박스 묶은 div 두 개 있는 데 둘 다 같은 구조로 되어있어서
    // div로 같이 설정
    & > div {
      display: flex;
      width: inherit;
      height: 50px;
      align-items: center;

      // input 박스가 들어있는 div
      & > div:nth-child(1) {
        // input 설정
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
      // select 스타일링
      & > select {
        font-family: "SCD-3";
        width: 68px;
        height: 40px;
        border: 1px solid ${({ theme }) => theme.gray};
        border-radius: 0.3rem;
        padding: 5px;
        font-size: 1.5rem;
        margin-right: 10px;
      }
      // select 박스 뒤에 글자들 ex)시, 분
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
  border: 1px solid ${({ theme }) => theme.lightblack};
`;
const NewProductForm = () => {
  const hourList = [
    "00",
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
  ];
  const minuteList = [
    "00",
    "05",
    "10",
    "15",
    "20",
    "25",
    "30",
    "35",
    "40",
    "45",
    "50",
    "55",
  ];
  const [inputData, setInputData] = useState({
    productName: "",
    productExp: "",
    productPrice: "",
    startHour: "00",
    startminute: "00",
    endHour: "23",
    endminute: "55",
  });
  const {
    productName,
    productExp,
    productPrice,
    startHour,
    startMinute,
    endHour,
    endMinute,
  } = inputData;

  const onchange = (e) => {
    const { value, name } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };
  const data = {
    productName: productName,
    productExp: productExp,
    productPrice: productPrice,
  };
  // const onClick = () => {
  //   const response = axios.post("http://localhost:8080/admin/newproduct", data);
  // };
  return (
    <MainBox>
      <form>
        <h1>상품 등록</h1>
        <div>
          <ContentBox>
            <h2>
              상품명<span> *</span>
            </h2>
            <div>
              <input type="text" onChange={onchange} name="productName"></input>
            </div>
          </ContentBox>
          <ContentBox>
            <h2>상품요약설명</h2>
            <div>
              <input type="text" onChange={onchange} name="productExp"></input>
            </div>
          </ContentBox>
          <ContentBox>
            <h2>
              판매가<span> *</span>
            </h2>
            <div>
              <input
                type="number"
                onChange={onchange}
                name="productPrice"
              ></input>
              <span>원</span>
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
                <label>등록</label>
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
        </div>
        <h1>할인 적용</h1>
        <div>
          <RadioBox>
            <h2>
              할인 적용 여부
              <span> *</span>
            </h2>
            <div>
              <input type="radio" name="discount"></input>
              <label>할인 적용</label>
              <input type="radio" name="discount"></input>
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
                <input type="radio" name="use"></input>
                <label>사용함</label>
                <input type="radio" name="use"></input>
                <label>사용안함</label>
              </div>
              <div>
                <div>
                  <input type="date"></input>
                </div>
                <select value={startHour} onChange={onchange} name="startHour">
                  {hourList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <span>시</span>
                <select
                  value={startMinute}
                  onChange={onchange}
                  name="startminute"
                >
                  {minuteList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <span>분 ~</span>
              </div>
              <div>
                <div>
                  <input type="date"></input>
                </div>
                <select value={endHour} onChange={onchange} name="endHour">
                  {hourList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <span>시</span>
                <select value={endMinute} onChange={onchange} name="endMinute">
                  {minuteList.map((item) => (
                    <option value={item} key={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <span>분</span>
              </div>
            </div>
          </PeriodSet>
        </div>
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
      </form>
    </MainBox>
  );
};

export default NewProductForm;
