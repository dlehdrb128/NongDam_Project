import axios from 'axios';
import React, { useRef, useState } from 'react';
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
const NewProductForm = ({ userKey }) => {
  const [sale, setSale] = useState(false);
  const [region, setRegion] = useState('경기도');
  const [regionEng, setRegionEng] = useState('gyeongi');

  const onchangeRegion = (e) => {
    setRegionEng(e.target.value);
    setRegion(e.target[e.target.selectedIndex].text);
    //console.log(e.target[e.target.selectedIndex].text);
  };

  const imgSrc = useRef();
  const [img, setImg] = useState('');
  const [imgPath, setImgPath] = useState('');

  const onChangeFile = (e) => {
    if (e.target.files && e.target.files[0]) {
      let save = e.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      setImg(e.target.files[0]);

      reader.onload = async (e) => {
        const formData = new FormData();
        formData.append('img', save);

        let URL = `http://localhost:8080/admin/newProductImage`;
        const request = await axios.post(URL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setImgPath(request.data.imgPath);
        imgSrc.current.src = reader.result;
      };
    }
  };
  console.log(imgPath);

  const onchange = (e) => {
    const { value, name } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const [inputData, setInputData] = useState({
    productName: '',
    productPrice: '',
    startHour: '00',
    startMinute: '00',
    endHour: '23',
    endMinute: '55',
    ProductDiscountPercent: '',
    discount: '',
    startDate: '',
    endDate: '',
    productLocal: '경기도',
  });

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

  const {
    productName,
    startHour,
    startMinute,
    endHour,
    endMinute,
    ProductDiscountPercent,
    startDate,
    endDate,
    productPrice,
  } = inputData;

  const data = {
    productName: productName,
    productLocal: region,
    productLocalEng: regionEng,
    productPrice: productPrice,
    productDiscountSet: sale === true ? 1 : 0,
    ProductDiscountPercent: sale === true ? ProductDiscountPercent : null,
    productDiscountStart:
      sale === true ? `'${startDate} ${startHour}:${startMinute}:00'` : null,
    productDiscountEnd:
      sale === true ? `'${endDate} ${endHour}:${endMinute}:00'` : null,
    productImage: imgPath,
    userKey: userKey,
  };

  const onclick = () => {
    axios.post('http://localhost:8080/admin/newProduct', data);
    alert('상품이 등록되었습니다!');
    // alert(CreateProduct.data.status);
    // console.log(CreateProduct.data);
    window.location.reload();
  };

  console.log(data);
  console.log(userKey);
  return (
    <MainBox>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
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
              <input
                onChange={onchange}
                // value={productPrice}
                name='productPrice'
              ></input>
              <span>원</span>
            </div>
          </ContentBox>
          <SelectBox>
            <h2>
              지역<span> *</span>
            </h2>
            <div>
              <select onChange={onchangeRegion}>
                <option value='gyoenggi'>경기도</option>
                <option value='gangwon'>강원도</option>
                <option value='chungbuk'>충청북도</option>
                <option value='chungnam'>충청남도</option>
                <option value='jeonbuk'>전라북도</option>
                <option value='jeonnam'>전라남도</option>
                <option value='gyeongbuk'>경상북도</option>
                <option value='gyeongnam'>경상남도</option>
              </select>
            </div>
          </SelectBox>
          <ImgBox>
            <h2>
              대표이미지 등록<span> *</span>
            </h2>
            <div>
              <div>
                <div>
                  {img ? (
                    <img
                      src=''
                      alt=''
                      ref={imgSrc}
                      style={{ borderRadius: '3px' }}
                    />
                  ) : (
                    <div
                      style={{
                        width: '155px',
                        height: '155px',
                        backgroundColor: 'gray',
                        borderRadius: '3px',
                      }}
                    ></div>
                  )}
                </div>
                <p>권장 500px * 500px</p>
              </div>
              <div>
                <input
                  type='file'
                  id='input-file'
                  accept='image/jpeg,gif,png,jpg'
                  style={{ display: 'none' }}
                  onChange={onChangeFile}
                ></input>
                <label htmlFor='input-file'>등록</label>
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
                name='sale'
                onClick={() => {
                  setSale(true);
                }}
              />
              <label>할인적용</label>
              <input
                type='radio'
                name='sale'
                onClick={() => {
                  setSale(false);
                }}
              />
              <label>적용안함</label>
            </div>
          </RadioBox>
          {sale === true ? (
            <div>
              <ContentBox>
                <h2>
                  할인율 <span> *</span>
                </h2>
                <div>
                  <input
                    type=''
                    onChange={onchange}
                    name='ProductDiscountPercent'
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
                    <select onChange={onchange} name='startHour'>
                      {hourList.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                    <span>시</span>
                    <select onChange={onchange} name='startMinute'>
                      {minuteList.map((item) => {
                        return (
                          <option key={item} name='startMinute'>
                            {item}
                          </option>
                        );
                      })}
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
                    <select onChange={onchange} name='endHour'>
                      {hourList.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                    <span>시</span>
                    <select onChange={onchange} name='endMinute'>
                      {minuteList.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                    <span>분</span>
                  </div>
                </div>
              </PeriodSet>
            </div>
          ) : null}
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
