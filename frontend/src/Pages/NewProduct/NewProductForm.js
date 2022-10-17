import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Theme from '../../Theme/theme';

// 폼제목과 폼을 메인박스로 묶었다
const MainBox = styled.div`
  width: 843px;
  padding: 240px 0 70px 0;
  display: flex;
  flex-direction: column;

  // form 제목
  & > form {
    & > h1 {
      font-family: 'SCD-6';
      color: ${({ theme }) => theme.lightblack};
      font-size: 2.5rem;
      padding-bottom: 15px;
      border-bottom: 2px solid ${({ theme }) => theme.lightblack};
    }
    // form 으로 묶어서 아래에 한 줄씩 추가
    & > div:nth-child(2) {
      padding-bottom: 100px;
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
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // 필수입력사항 *로 표시
    & > span {
      color: red;
      font-family: 'SCD-6';
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
      font-family: 'SCD-4';
      width: 300px;
      height: 40px;
      border: 1px solid ${({ theme }) => theme.gray};
      border-radius: 3px;
      padding: 5px;
      font-size: 1.5rem;
    }
    & > span {
      font-family: 'SCD-3';
      font-size: 1.5rem;
      padding-left: 5px;
    }
  }
`;

// 대표이미지 등록부분 박스
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
    font-family: 'SCD-6';
    display: flex;
    align-items: center;
    text-align: left;
    padding-left: 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // 필수기입사항
    & > span {
      color: red;
      font-family: 'SCD-6';
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
        border: 1px solid ${({ theme }) => theme.liglightgray};
        display: flex;
        flex-direction: column;

        & > img {
          width: 100%;
          height: 100%;
          margin: 'auto';
        }
      }

      // 이미지 권장 사이즈 안내
      & > p {
        font-family: 'SCD-4';
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
        font-family: 'SCD-6';
        font-size: 1.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
      // 등록이미지 안내
      & > p {
        font-family: 'SCD-5';
        font-size: 1.3rem;
        padding-top: 5px;
      }
    }
  }
`;
// 상품 상세페이지 박스

const DetailBox = styled.div`
  width: inherit;
  height: 764px;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.lightblack};
  & > h2 {
    width: inherit;
    height: 85px;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // 필수입력사항
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
  }
  & > div {
    width: inherit;
    height: 680px;
    border-bottom: 1.5px solid ${({ theme }) => theme.lightblak};
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
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    // 필수입력사항
    & > span {
      color: red;
      font-family: 'SCD-6';
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
      width: 18px;
      height: 18px;
      accent-color: green;
    }
    //
    & > label {
      font-family: 'SCD-3';
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
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 1px solid ${({ theme }) => theme.lightgray};
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
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
      font-family: 'SCD-4';
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
  height: 163px;
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
  color: ${({ theme }) => theme.lightblack};

  // 기간설정
  & > h2 {
    width: 141px;
    height: inherit;
    font-size: 1.5rem;
    font-family: 'SCD-6';
    text-align: left;
    padding: 30px 0 30px 18px;
    background-color: ${({ theme }) => theme.white};
    border-bottom: 0.1rem solid ${({ theme }) => theme.lightgray};
    & > span {
      color: red;
      font-family: 'SCD-6';
      font-size: 1.5rem;
    }
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
          font-family: 'SCD-3';
          font-size: 1.3rem;
          padding: 5px;
          margin-right: 10px;
        }
      }
      // select 스타일링
      & > select {
        font-family: 'SCD-3';
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
        font-family: 'SCD-3';
        font-size: 1.5rem;
        margin-right: 10px;
      }
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
const NewProductForm = () => {
  const [display, setDisplay] = useState('none');
  const [ischeked, setChecked] = useState('');

  const discountRadio = (e) => {
    if (e.target.checked === !ischeked) {
      setChecked(ischeked);
      setDisplay('block');
      // console.log('할인적용');
    }
  };

  const discountRadio2 = (e) => {
    if (e.target.checked === !ischeked) {
      setDisplay('none');
      setChecked(ischeked);
    }
  };

  const hourList = [
    '00',
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
    '22',
    '23',
  ];
  const minuteList = [
    '00',
    '05',
    '10',
    '15',
    '20',
    '25',
    '30',
    '35',
    '40',
    '45',
    '50',
    '55',
  ];
  const regionList = [
    '경기도',
    '강원도',
    '충청북도',
    '충청남도',
    '전라북도',
    '전라남도',
    '경상북도',
    '경상남도',
  ];

  const [inputData, setInputData] = useState({
    productName: '',
    productExp: '',
    productPrice: '',
    startHour: '00',
    startMinute: '00',
    endHour: '23',
    endMinute: '55',
    discountPrice: '',
    discount: '',
    use: '',
    startDate: '',
    endDate: '',
    discountRegion: '경기도',
  });

  const {
    productName,
    productExp,
    productPrice,
    startHour,
    startMinute,
    endHour,
    endMinute,
    discountPrice,
    discount,
    use,
    startDate,
    endDate,
    discountRegion,
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
    startDate: `${startDate} ${startHour}시 ${startMinute}분`,
    endDate: `${endDate} ${endHour}시 ${endMinute}분`,
    discountPrice: discountPrice,
    dateUse: use === 'true' ? 1 : 0,
    discount: discount === 'true' ? 1 : 0,
  };

  const onclick = () => {
    const response = axios.post('http://localhost:8080/admin/newproduct', data);
  };

  return (
    <MainBox>
      <button
        onClick={() => {
          console.log(data);
        }}
      >
        데이터 확인
      </button>
      <form>
        <h1>상품 등록</h1>
        <div>
          <ContentBox>
            <h2>
              상품명<span> *</span>
            </h2>
            <div>
              <input type='text' onChange={onchange} name='productName'></input>
            </div>
          </ContentBox>
          <ContentBox>
            <h2>
              판매가격<span> *</span>
            </h2>
            <div>
              <input onChange={onchange} name='productPrice'></input>
              <span>원</span>
            </div>
          </ContentBox>
          <SelectBox>
            <h2>
              지역<span> *</span>
            </h2>
            <div>
              <select
                onChange={onchange}
                value={discountRegion}
                name='discountRegion'
              >
                {regionList.map((item) => (
                  <option value={item} key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>
          </SelectBox>
          <ImgBox>
            <h2>
              대표이미지 등록<span> *</span>
            </h2>
            <div>
              <div>
                <div className='imgBox'>
                  <img/>
                </div>
                <p>권장 500px * 500px</p>
              </div>
              <div>
                <input
                  type='file'
                  id='input-file'
                  accept='image/jpeg,gif,png,jpg'
                  style={{ display: 'none' }}
                ></input>
                <label for='input-file'>등록</label>
                <p>등록이미지 : 5M 이하 / gif, png, jpg(jpeg)</p>
              </div>
            </div>
          </ImgBox>
          <DetailBox>
            <h2>
              상세페이지
              <span> *</span>
            </h2>
            <div></div>
          </DetailBox>
        </div>
        <h1>할인 적용</h1>
        <div>
          <RadioBox>
            <h2>
              할인 적용 여부
              <span> *</span>
            </h2>
            <div>
              <input
                type='radio'
                name='discount'
                onChange={onchange}
                onClick={discountRadio}
              ></input>
              <label>할인 적용</label>
              <input
                type='radio'
                name='discount'
                onChange={onchange}
                onClick={discountRadio2}
                checked='cheked'
              ></input>
              <label>적용 안함</label>
            </div>
          </RadioBox>
          <div style={{ display: `${display}` }}>
            <ContentBox>
              <h2>
                할인율 <span> *</span>
              </h2>
              <div>
                <input
                  type='text'
                  onChange={onchange}
                  name='discountPrice'
                ></input>
                <span>%</span>
              </div>
            </ContentBox>
            <PeriodSet>
              <h2>
                기간설정 <span> *</span>
              </h2>
              <div>
                <div>
                  <div>
                    <input
                      type='date'
                      onChange={onchange}
                      name='startDate'
                    ></input>
                  </div>
                  <select
                    value={startHour}
                    onChange={onchange}
                    name='startHour'
                  >
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
                    name='startminute'
                  >
                    {minuteList.map((item) => (
                      <option value={item} key={item} name='startMinute'>
                        {item}
                      </option>
                    ))}
                  </select>
                  <span>분 ~</span>
                </div>
                <div>
                  <div>
                    <input
                      type='date'
                      onChange={onchange}
                      name='endDate'
                    ></input>
                  </div>
                  <select value={endHour} onChange={onchange} name='endHour'>
                    {hourList.map((item) => (
                      <option value={item} key={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <span>시</span>
                  <select
                    value={endMinute}
                    onChange={onchange}
                    name='endMinute'
                  >
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

export default NewProductForm;
