import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";

const ReviewParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div:nth-child(1) {
    width: 1265px;
    height: 100px;
    border-bottom: 2px solid ${({ theme }) => theme.gray};
    font-size: 3rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const ReviewMain = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div:nth-child(1) {
    width: 1265px;
    height: 100px;
    font-size: 2.5rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  & > div:nth-child(2) {
    width: 1265px;
    height: 500px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
`;
const TitleGuide = styled.div`
  width: 620px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > div:nth-child(1) {
    & > h2 {
      font-size: 2rem;
      font-family: YANGJIN;
      color: ${({ theme }) => theme.lightblack};
      margin-bottom: 10px;
    }
    & > input {
      width: 620px;
      height: 50px;
      border: none;
      border-radius: 10px;
      background-color: #eee;
      padding-left: 10px;
      font-size: 1.5rem;
      font-family: SCD-3;
    }
  }
  & > div:nth-child(2) {
    & > h2 {
      font-size: 2rem;
      font-family: YANGJIN;
      color: ${({ theme }) => theme.lightblack};
      margin-bottom: 10px;
    }
    & > textarea {
      width: 620px;
      height: 350px;
      resize: none;
      border: none;
      border-radius: 10px;
      background-color: #eee;
      padding-left: 10px;
      padding-top: 10px;
      font-size: 1.5rem;
      font-family: SCD-3;
    }
  }
`;
const ImgFile = styled.label`
  width: 620px;
  height: 500px;
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    transition: 0.5s;
    background-color: ${({ theme }) => theme.orange};
  }
  & > img {
    color: ${({ theme }) => theme.gray};
    width: inherit;
    height: inherit;
    border-radius: 10px;
  }
  & > div {
    font-size: 3rem;
    font-family: SCD-5;
    color: ${({ theme }) => theme.gray};
  }
`;
const Ingredient = styled.div`
  width: 1265px;
  margin-bottom: 20px;
  & > h2 {
    font-size: 2rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 10px;
  }
  & > input {
    width: inherit;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #eee;
    padding-left: 10px;
    font-size: 1.5rem;
    font-family: SCD-3;
  }
`;
const Tip = styled.div`
  width: 1265px;
  margin-bottom: 20px;
  & > h2 {
    font-size: 2rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 10px;
  }
  & > input {
    width: inherit;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #eee;
    padding-left: 10px;
    font-size: 1.5rem;
    font-family: SCD-3;
  }
`;
const CookImg = styled.div`
  width: 1265px;
  height: 380px;
  border-bottom: 2px solid ${({ theme }) => theme.gray};
  & > h2 {
    font-size: 2rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 10px;
  }
  & > div:nth-child(2) {
    display: flex;
    margin-left: 95px;
    gap: 230px;
    align-items: flex-end;
    width: inherit;
  }
`;
const UploadImg = styled.div`
  margin-bottom: 30px;
  width: 100px;
  height: 80px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.gray};
  & > label {
    width: 100px;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 6rem;
    font-family: SCD-7;

    &:hover {
      transition: 0.5s;
      transform: rotate(360deg);
    }
  }

  &:hover {
    cursor: pointer;
  }

  & > * {
    :hover {
      cursor: pointer;
    }
  }
`;
// const AllUploadImg = styled.div`
//   width: 200px;
//   height: 50px;
//   border-radius: 10px;
//   background-color: ${({ theme }) => theme.green};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: ${({ theme }) => theme.gray};
//   & > label {
//     font-size: 3rem;
//     font-family: SCD-5;
//     color: ${({ theme }) => theme.realWhite};
//   }
// `;
const FinishButton = styled.div`
  width: 1265px;
  height: 100px;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  & > button {
    border: none;
    width: 100px;
    height: 50px;
    font-size: 1.5rem;
    font-family: SCD-5;
    color: ${({ theme }) => theme.realWhite};
  }
  & > button:nth-child(1) {
    background-color: ${({ theme }) => theme.green};
    margin-right: 10px;
  }
  & > button:nth-child(2) {
    background-color: ${({ theme }) => theme.orange};
  }
`;

const ImgBox = styled.div`
  display: flex;
  gap: 100px;
  margin-left: 30px;
`;

const ImgStyled = styled.img`
  width: 230px;
  height: 210px;
  border-radius: 10px;
`;

const RecipeCreateReview = () => {
  const [upload, setUpload] = useState(null);
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get("http://localhost:8080/recipe/", {
          withCredentials: true,
        });
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

  const ImgUpload = (input, id) => {
    if (input.files && input.files[0]) {
      let reader = new FileReader();
      reader.onload = (e) => {
        document.getElementById(id).src = e.target.result;
      };
      reader.readAsDataURL(input.files[0]);
      if (id === "mainImg") {
        setUpload(true);
      }
    } else {
      document.getElementById(id).src = null;
      if (id === "mainImg") {
        setUpload(null);
      }
    }
  };

  return (
    <ReviewParent>
      {/* 전체 부모 */}
      <div>게시글 작성</div>
      {/* 헤드 */}
      <ReviewMain method="post" action="http://localhost:8080/recipe">
        {/* 메인 */}
        <div>레시피 등록</div>
        <div>
          {/* 레시피 제목, 요리소개, 대표요리사진 */}
          <TitleGuide>
            {/* 레시피 제목, 요리소개 */}
            <div>
              <h2>레시피 제목</h2>
              <input
                type={"text"}
                placeholder={"예) 단짠단짠 감자전"}
                name="title"
              ></input>
            </div>
            <div>
              <h2>요리소개</h2>
              <textarea
                type={"text"}
                placeholder={
                  "예) 비도 오고 감자전이 먹고싶어서 저번주에 구매한 못난이 감자로 전을 부쳐봤어요 ^^"
                }
                name="guide"
              ></textarea>
            </div>
          </TitleGuide>
          <div>
            <ImgFile htmlFor="main-img">
              {/* 대표 요리 사진 */}

              {upload !== null ? (
                <img src={null} id="mainImg" alt="이미지"></img>
              ) : null}

              {upload !== null ? null : <div>대표 이미지를 업로드해주세요</div>}
              {/* 카메라 로고 */}
            </ImgFile>
            <input
              type="file"
              id="main-img"
              style={{ display: "none" }}
              accept="image/jpeg,gif,png,jpg"
              onChange={(e) => {
                ImgUpload(e.target, "mainImg");
              }}
            ></input>
          </div>
        </div>
        <Ingredient>
          {/* 재료 */}
          <h2>재료</h2>
          <input
            type={"text"}
            placeholder={"예) #감자 #소금 #식용유 #부침가루 #맛간장"}
            name="ingredient"
          ></input>
        </Ingredient>
        <Tip>
          <h2>요리팁</h2>
          <input
            type={"text"}
            placeholder={
              "예) 감자를 으깨는 것 보단 썰어서 부침가루에 섞는게 더 맛있어요."
            }
            name="tip"
          ></input>
        </Tip>
        <CookImg>
          {/* 요리 완성 사진 */}
          <h2>요리 완성사진</h2>
          <div>
            {/* 파일 업로드 */}
            <UploadImg>
              {/* 업로드 박스 */}
              <label htmlFor="fileUp1">+</label>
              <input
                type="file"
                id="fileUp1"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
                onChange={(e) => {
                  ImgUpload(e.target, "img1");
                }}
              ></input>
            </UploadImg>
            <UploadImg>
              {/* 업로드 박스 */}
              <label htmlFor="fileUp2">+</label>
              <input
                type="file"
                id="fileUp2"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
                onChange={(e) => {
                  ImgUpload(e.target, "img2");
                }}
              ></input>
            </UploadImg>{" "}
            <UploadImg>
              {/* 업로드 박스 */}
              <label htmlFor="fileUp3">+</label>
              <input
                type="file"
                id="fileUp3"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
                onChange={(e) => {
                  ImgUpload(e.target, "img3");
                }}
              ></input>
            </UploadImg>{" "}
            <UploadImg>
              {/* 업로드 박스 */}
              <label htmlFor="fileUp4">+</label>
              <input
                type="file"
                id="fileUp4"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
                onChange={(e) => {
                  ImgUpload(e.target, "img4");
                }}
              ></input>
            </UploadImg>
          </div>
          <ImgBox>
            <ImgStyled alt="이미지 없음" id="img1"></ImgStyled>
            <ImgStyled alt="이미지 없음" id="img2"></ImgStyled>
            <ImgStyled alt="이미지 없음" id="img3"></ImgStyled>
            <ImgStyled alt="이미지 없음" id="img4"></ImgStyled>
          </ImgBox>
        </CookImg>
        <FinishButton>
          <button type="submit">저장</button>
          <button>취소</button>
        </FinishButton>
      </ReviewMain>
    </ReviewParent>
  );
};
export default RecipeCreateReview;
