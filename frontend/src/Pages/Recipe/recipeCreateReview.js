import styled from "styled-components";

const ReviewParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div:nth-child(1) {
    width: 1265px;
    height: 100px;
    border-bottom: 1px solid ${({ theme }) => theme.lightblack};
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
    height: 600px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
const TitleGuide = styled.div`
  width: 620px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > div:nth-child(1) {
    & > h2 {
      font-size: 2rem;
      font-family: YANGJIN;
      color: ${({ theme }) => theme.lightblack};
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
    }
    & > textarea {
      width: 620px;
      height: 300px;
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
const ImgFile = styled.a`
  width: 620px;
  height: 500px;
  background-color: #eee;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    color: ${({ theme }) => theme.gray};

    width: 300px;
  }
  & > div {
    font-size: 3rem;
    font-family: SCD-5;
    color: ${({ theme }) => theme.gray};
  }
`;
const RecipeCreateReview = () => {
  return (
    <ReviewParent>
      {/* 전체 부모 */}
      <div>게시글 작성</div>
      {/* 헤드 */}
      <ReviewMain>
        {/* 메인 */}
        <div>레시피 등록</div>
        <div>
          {/* 레시피 제목, 요리소개, 대표요리사진 */}
          <TitleGuide>
            {/* 레시피 제목, 요리소개 */}
            <div>
              <h2>레시피 제목</h2>
              <input type={"text"} placeholder={"예) 단짠단짠 감자전"}></input>
            </div>
            <div>
              <h2>요리소개</h2>
              <textarea
                type={"text"}
                placeholder={
                  "예) 비도 오고 감자전이 먹고싶어서 저번주에 구매한 못난이 감자로 전을 부쳐봤어요 ^^"
                }
              ></textarea>
            </div>
          </TitleGuide>
          <ImgFile href="#">
            {/* 대표 요리 사진 */}
            <img src="./img/camera.svg" alt="이미지"></img>
            <svg src="./img/camera.svg"></svg>
            {/* 카메라 로고 */}
            <div>대표 요리 사진을 등록해주세요.</div>
          </ImgFile>
        </div>
        <div>
          {/* 재료 */}
          <h2>재료</h2>
          <input
            type={"text"}
            placeholder={"예) #감자 #소금 #식용유 #부침가루 #맛간장"}
          ></input>
        </div>
        <div>
          <h2>요리팁</h2>
          <input
            type={"text"}
            placeholder={
              "예) 감자를 으깨는 것 보단 썰어서 부침가루에 섞는게 더 맛있어요."
            }
          ></input>
        </div>
        <div>
          {/* 요리 완성 사진 */}
          <h2>요리 완성사진</h2>
          <div>
            {/* 파일 업로드 */}
            <div>
              {/* 업로드 박스 */}
              <label for="fileUp">+</label>
              <input type={"file"} id="fileUp"></input>
            </div>
            <div>
              <label for="fileUp">+</label>
              <input type={"file"} id="fileUp"></input>
            </div>
            <div>
              <label for="fileUp">+</label>
              <input type={"file"} id="fileUp"></input>
            </div>
            <div>
              <label for="fileUp">+</label>
              <input type={"file"} id="fileUp"></input>
            </div>
            <div>
              {/* 한번에 넣기 */}
              <label for="allFileUp">+ 사진 한번에 넣기</label>
              <input type={"file"} id="allFileUp"></input>
            </div>
          </div>
        </div>
        <div>
          <button>저장</button>
          <button>취소</button>
        </div>
      </ReviewMain>
    </ReviewParent>
  );
};
export default RecipeCreateReview;
