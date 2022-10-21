import { useRef, useState } from "react";
import styled from "styled-components";
import Theme from "../../Theme/theme";
import axios from "axios";

// 메인박스로 묶음
const MainBox = styled.div`
  width: 843px;
  padding: 180px 0 70px 0;
  display: flex;
  flex-direction: column;
  // 각 form의 제목을 h1으로 스타일링 해주었다
  & > form {
    // 스토어정보, 고객센터 정보안내 h1 스타일링
    & > h1 {
      font-family: "SCD-6";
      color: ${({ theme }) => theme.lightblack};
      font-size: 2.5rem;
      padding-bottom: 15px;
      border-bottom: 2px solid ${({ theme }) => theme.lightblack};
    }
    //스토어 정보 박스
    & > div:nth-child(2) {
      padding-bottom: 100px;
    }
    // 고객센터 정보안내 설정 박스
    & > div:nth-child(4) {
      padding-bottom: 36px;
    }
    // 해당페이지에 제일 아래 수정,등록버튼을 묶은 div
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
  // 기입내용의 제목을 h2
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // 필수 기입내용 *로 표현한 부분을 span으로 감싸줌
    // span있는거만 적용됨
    & > span {
      color: red;
      font-family: "SCD-6";
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
      font-family: "SCD-4";
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
      font-family: "SCD-3";
      font-size: 1.3rem;
      padding-left: 5px;
    }
  }
`;

// 스토어 설명 박스
const StoreDescBox = styled.div`
  width: inherit;
  height: 200px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};
  // 기입내용의 제목을 h2
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // 필수 기입내용 *로 표현한 부분을 span으로 감싸줌
    // span있는거만 적용됨
    & > span {
      color: red;
      font-family: "SCD-6";
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
      font-family: "SCD-4";
      width: 300px;
      height: 150px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
    //  input박스 뒤에 따로 특이사항 붙는 부분
    // span 추가해서 설정하면되고, 없어도 상관없음
    & > span {
      font-family: "SCD-3";
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
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 0.1rem solid ${({ theme }) => theme.lightgray};
    // 이거 역시 필수기입내용 * 표시
    & > span {
      color: red;
      font-family: "SCD-6";
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
      font-family: "SCD-4";
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
      font-family: "SCD-6";
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
      font-family: "SCD-4";
      width: 300px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
  }
`;
const ImgBox = styled.div`
  width: inherit;
  height: 260px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};
  // 제목 - 대표이미지 등록
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: "SCD-6";
    display: flex;
    align-items: center;
    text-align: left;
    padding-left: 18px;
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
      width: 155px;
      height: 192px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      //사진미리보기 부분/ 지금은 회색 박스
      & > div {
        width: 155px;
        height: 155px;
        border-radius: 3px;
        display: flex;
        flex-direction: column;
        & > img {
          width: 100%;
          height: 100%;
          margin: "auto";
        }
      }
      // 이미지 권장 사이즈 안내
      & > p {
        font-family: "SCD-4";
        text-align: center;
        font-size: 1.5rem;
      }
    }
    // 등록 부분
    & > div:nth-child(2) {
      width: 496px;
      height: 192px;
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      padding-bottom: 40px;
      justify-content: flex-end;
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
        font-size: 1.3rem;
        padding-top: 5px;
      }
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
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // *로 된 필수입력사항
    & > span {
      color: red;
      font-family: "SCD-6";
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
      font-family: "SCD-4";
      width: 100px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 0.3rem;
      padding: 5px;
      font-size: 1.5rem;
    }
    // 전화번호 개인 입력창
    & > input {
      font-family: "SCD-4";
      width: 100px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
    // 전화번호 사이사이 - 표시
    & > span {
      font-family: "SCD-4";
      padding: 0 10px 0 10px;
      font-size: 1.5rem;
    }
    // 인증번호 받는 버튼
    & > button {
      width: 120px;
      height: 40px;
      font-family: "SCD-6";
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
    font-family: "SCD-6";
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // * 표시 필수입력사항
    & > span {
      color: red;
      font-family: "SCD-6";
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
      width: 18px;
      height: 18px;
      accent-color: green;
    }
    // 체크되면 달라지는 스타일링
    // 라디오 버튼의 내용
    & > label {
      font-family: "SCD-3";
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

const StoreOpenForm = () => {
  const imgSrc = useRef();

  const [img, setImg] = useState("");
  console.log(img);
  const onChangeFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      setImg(e.target.files[0]);

      reader.onload = async (e) => {
        console.log(e);
        console.log(img, "안녕");

        const formData = new FormData();
        formData.append("img", img);

        let URL = `http://localhost:8080/admin/upload`;
        const request = await axios.post(URL, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        imgSrc.current.src = reader.result;
      };
    }
  };
  const [topping, setTopping] = useState();
  const onChangeRadio = (e) => {
    setTopping(e.target.value);
  };

  const firstTelList = [
    "02",
    "031",
    "032",
    "033",
    "041",
    "042",
    "043",
    "044",
    "051",
    "052",
    "054",
    "055",
    "061",
    "062",
    "063",
    "064",
    "070",
    "010",
  ];

  const firstMobileList = ["010", "011", "016", "017", "018", "019", "070"];
  const [inputData, setInputData] = useState({
    storeName: "",
    mobilePhone: "",
    email: "",
    name: "",
    address1: "",
    address2: "",
    address3: "",
    huntingLine1: "02",
    huntingLine2: "",
    huntingLine3: "",
    mobile1: "010",
    mobile2: "",
    mobile3: "",
    receiveEmail: "",
    outgoingEmail: "",
    csTel1: "02",
    csTel2: "",
    csTel3: "",
    csEmail: "",
    faxTel1: "02",
    faxTel2: "",
    faxTel3: "",
    csHours: "",
    storeDesc: "",
  });

  const {
    storeName,
    mobilePhone,
    email,
    name,
    address1,
    address2,
    address3,
    huntingLine1,
    huntingLine2,
    huntingLine3,
    mobile1,
    mobile2,
    mobile3,
    receiveEmail,
    outgoingEmail,
    csTel1,
    csTel2,
    csTel3,
    csEmail,
    faxTel1,
    faxTel2,
    faxTel3,
    csHours,
    storeDesc,
  } = inputData;

  const onchange = (e) => {
    const { value, name } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const data = {
    storeName: storeName,
    storeCeophone: mobilePhone,
    storeCeoEmail: email,
    storeCeoName: name,
    storeAddress: `${address1} ${address2} ${address3}`,
    storeimg: ``,
    storeCall: `${huntingLine1}-${huntingLine2}-${huntingLine3}`,
    storePhone: `${mobile1}-${mobile2}-${mobile3}`,
    storeReceiveEmail: receiveEmail,
    storeOutgoingEmail: outgoingEmail,
    storecsCall: `${csTel1}-${csTel2}-${csTel3}`,
    storeCsEmail: csEmail,
    storeFax: `${faxTel1}-${faxTel2}-${faxTel3}`,
    storeCsTime: csHours,
    storeBusiness: topping === "true" ? 1 : 0,
    storeDesc: storeDesc,
  };

  console.log(data);
  const onclick = () => {
    axios.post("http://localhost:8080/admin/storeOpen", data);
  };

  return (
    <MainBox>
      <form>
        <h1>스토어 정보</h1>
        <div>
          <ContentBox>
            <h2>
              쇼핑몰명
              <span> *</span>
            </h2>
            <div>
              <input hidden="hidden" />
              <input type="text" onChange={onchange} name="storeName"></input>

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
              <input type="tel" onChange={onchange} name="mobilePhone"></input>
            </div>
          </ContentBox>
          <ContentBox>
            <h2>
              대표 이메일<span> *</span>
            </h2>
            <div>
              <input type="email" onChange={onchange} name="email"></input>
            </div>
          </ContentBox>
          <ContentBox>
            <h2>
              이름<span> *</span>
            </h2>
            <div>
              <input type="text" onChange={onchange} name="name"></input>
            </div>
          </ContentBox>
          <BusinessAdd>
            <h2>
              사업장 주소<span> *</span>
            </h2>
            <div>
              <div>
                <input
                  onChange={onchange}
                  name="address1"
                  placeholder="우편번호"
                ></input>
                <button>주소검색</button>
              </div>
              <input
                onChange={onchange}
                name="address2"
                placeholder="기본주소"
              ></input>
              <input
                onChange={onchange}
                name="address3"
                placeholder="나머지 주소(선택 입력 가능)"
              ></input>
            </div>
          </BusinessAdd>
          <ImgBox>
            <h2>
              대표이미지 등록<span> *</span>
            </h2>
            <div>
              <div>
                <div>
                  {img ? (
                    <img
                      src=""
                      alt=""
                      ref={imgSrc}
                      style={{ borderRadius: "3px" }}
                    />
                  ) : (
                    <div
                      style={{
                        width: "155px",
                        height: "155px",
                        backgroundColor: "gray",
                        borderRadius: "3px",
                      }}
                    ></div>
                  )}
                </div>
                <p>권장 500px * 500px</p>
              </div>
              <div>
                <input
                  type="file"
                  id="input-file"
                  accept="image/jpeg,gif,png,jpg"
                  style={{ display: "none" }}
                  onChange={onChangeFile}
                  name={"img"}
                ></input>
                <label htmlFor="input-file">등록</label>
                <p>등록이미지 : 5M 이하 / gif, png, jpg(jpeg)</p>
              </div>
            </div>
          </ImgBox>
          <StoreDescBox>
            <h2>스토어 설명</h2>
            <div>
              <input
                type="text"
                onChange={onchange}
                name="storeDesc"
                placeholder="200자 이내로 작성해주세요"
              ></input>
            </div>
          </StoreDescBox>
          <TelBox>
            <h2>대표전화</h2>
            <div>
              <select
                onChange={onchange}
                value={huntingLine1}
                name="huntingLine1"
              >
                {firstTelList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span>-</span>
              <input onChange={onchange} name="huntingLine2"></input>
              <span>-</span>
              <input onChange={onchange} name="huntingLine3"></input>
            </div>
          </TelBox>
          <TelBox>
            <h2>
              휴대전화
              <span> *</span>
            </h2>
            <div>
              <select onChange={onchange} value={mobile1} name="mobile1">
                {firstMobileList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span>-</span>
              <input onChange={onchange} name="mobile2"></input>
              <span>-</span>
              <input onChange={onchange} name="mobile3"></input>
            </div>
          </TelBox>
          <ContentBox>
            <h2>
              수신전용 이메일<span> *</span>
            </h2>
            <div>
              <input
                type="email"
                onChange={onchange}
                name="receiveEmail"
              ></input>
            </div>
          </ContentBox>
          <ContentBox>
            <h2>
              발신전용 이메일<span> *</span>
            </h2>
            <div>
              <input
                type="email"
                onChange={onchange}
                name="outgoingEmail"
              ></input>
            </div>
          </ContentBox>
          <RadioBox>
            <h2>
              통신판매업 신고
              <span> *</span>
            </h2>
            <div>
              <input
                type="radio"
                name="topping"
                value="true"
                checked={topping === "true"}
                onChange={onChangeRadio}
              ></input>
              <label>신고함</label>
              <input
                type="radio"
                name="topping"
                value="false"
                checked={topping === "false"}
                onChange={onChangeRadio}
              ></input>
              <label>신고안함</label>
            </div>
          </RadioBox>
        </div>
        <h1>고객센터 정보안내 설정</h1>
        <div>
          <TelBox>
            <h2>
              상담전화
              <span> *</span>
            </h2>
            <div>
              <select onChange={onchange} value={csTel1} name="csTel1">
                {firstTelList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span>-</span>
              <input onChange={onchange} name="csTel2"></input>
              <span>-</span>
              <input onChange={onchange} name="csTel3"></input>
            </div>
          </TelBox>
          <ContentBox>
            <h2>
              상담 이메일<span> *</span>
            </h2>
            <div>
              <input type="email" onChange={onchange} name="csEmail"></input>
            </div>
          </ContentBox>
          <TelBox>
            <h2>팩스 전화</h2>
            <div>
              <select onChange={onchange} value={faxTel1} name="faxTel1">
                {firstTelList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
              <span>-</span>
              <input onChange={onchange} name="faxTel2"></input>
              <span>-</span>
              <input onChange={onchange} name="faxTel3"></input>
            </div>
          </TelBox>
          <ContentBox>
            <h2>
              CS 운영시간<span> *</span>
            </h2>
            <div>
              <input type="text" onChange={onchange} name="csHours"></input>
            </div>
          </ContentBox>
        </div>
        <div>
          <EditButton col={Theme.lightblack} bgcol={Theme.realWhite}>
            수정
          </EditButton>
          <RegButton
            onClick={onclick}
            col={Theme.realWhite}
            bgcol={Theme.green}
          >
            등록
          </RegButton>
        </div>
      </form>
    </MainBox>
  );
};

export default StoreOpenForm;
