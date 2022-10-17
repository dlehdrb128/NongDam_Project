import styled from "styled-components";
const ReviewParent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const RecipeReview = () => {
  return (
    <ReviewParent>
      {/* 전체 부모 */}
      <div>게시글 작성</div>
      {/* 헤드 */}
      <form>
        {/* 메인 */}
        <div>레시피 등록</div>
        <div>
          <div>
            <div>
              <h2>레시피 제목</h2>
              <input type={"text"} placeholder={"예) 단짠단짠 감자전"}></input>
            </div>
            <div>
              <h2>요리소개</h2>
              <input
                type={"text"}
                placeholder={
                  "예) 비도 오고 감자전이 먹고싶어서 저번주에 구매한 못난이 감자로 전을 부쳐봤어요 ^^"
                }
              ></input>
            </div>
          </div>
          <a href="#">
            <img></img>
            {/* 카메라 로고 */}
            <div>대표 요리 사진을 등록해주세요.</div>
          </a>
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
      </form>
    </ReviewParent>
  );
};
export default RecipeReview;
