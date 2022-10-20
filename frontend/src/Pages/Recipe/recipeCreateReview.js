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
  & > img {
    color: ${({ theme }) => theme.gray};
    width: 200px;
    margin-bottom: 50px;
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
  height: 270px;
  border-bottom: 2px solid ${({ theme }) => theme.gray};
  & > h2 {
    font-size: 2rem;
    font-family: YANGJIN;
    color: ${({ theme }) => theme.lightblack};
    margin-bottom: 10px;
  }
  & > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    width: inherit;
  }
`;
const UploadImg = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  background-color: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.gray};
  & > label {
    font-size: 7rem;
    font-family: SCD-7;
  }
`;
const AllUploadImg = styled.div`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.green};
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.gray};
  & > label {
    font-size: 1.5rem;
    font-family: SCD-5;
    color: ${({ theme }) => theme.realWhite};
  }
`;
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
const RecipeCreateReview = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      try {
        let response = await axios.get("http://localhost:8080/recipe");
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
            <ImgFile for="main-img">
              {/* 대표 요리 사진 */}
              <img src="./img/camera.svg" alt="이미지"></img>

              {/* 카메라 로고 */}
              <div>대표 요리 사진을 등록해주세요.</div>
            </ImgFile>
            <input
              type="file"
              id="main-img"
              style={{ display: "none" }}
              accept="image/jpeg,gif,png,jpg"
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
              <label for="fileUp">+</label>
              <input
                type={"file"}
                id="fileUp"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
              ></input>
            </UploadImg>
            <UploadImg>
              {/* 업로드 박스 */}
              <label for="fileUp">+</label>
              <input
                type={"file"}
                id="fileUp"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
              ></input>
            </UploadImg>{" "}
            <UploadImg>
              {/* 업로드 박스 */}
              <label for="fileUp">+</label>
              <input
                type={"file"}
                id="fileUp"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
              ></input>
            </UploadImg>{" "}
            <UploadImg>
              {/* 업로드 박스 */}
              <label for="fileUp">+</label>
              <input
                type={"file"}
                id="fileUp"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
              ></input>
            </UploadImg>
            <AllUploadImg>
              {/* 한번에 넣기 */}
              <label for="allFileUp">+ 사진 한번에 넣기</label>
              <input
                type={"file"}
                id="allFileUp"
                accept="image/jpeg,gif,png,jpg"
                style={{ display: "none" }}
              ></input>
            </AllUploadImg>
          </div>
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
