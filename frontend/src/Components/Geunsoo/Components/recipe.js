import styled from "styled-components";
import Theme from "../../../theme/theme";

const RecipeParent = styled.div`
  /* 레시피 페이지 전체 부모 설정값 */
  width: 1230px;
  height: 1800px;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  & > div:nth-child(1) {
    /* head부분 전체 설정(이번주 추천레시피, 뭐가땡기나요, 이번주 채소, 과일목록) */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1230px;
    height: 600px;
    & > div:nth-child(1) {
      /* 이번주 추천 레시피 전체 설정 */
      & > h1 {
        /* 제목 폰트 */
        font-size: 3rem;
        font-family: YANGJIN;
        color: ${Theme.lightblack};
      }
    }
    & > div:nth-child(2) {
      /* (뭐가땡기나요/ 이번주 채소, 과일목록) 전체 설정 */
      height: 550px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      & > div:nth-child(2) {
        & > h1 {
          /* 제목 폰트 */
          font-size: 3rem;
          font-family: YANGJIN;
          color: ${Theme.lightblack};
        }
      }
    }
  }
  & > div:nth-child(2) {
    /* 밑에 게시글 */
    width: 1030px;
    height: 1000px;
    margin-top: 50px;
  }
`;
const PostPage = styled.div`
  /* 게시글 전체 설정 */
  width: 1030px;
  height: inherit;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;
const ImgWrapper = styled.div`
  /* 이번주 추천 레시피 배경이미지, 추천레시피 당첨 게시글 폰트 */
  background-image: url(/img/감자전.jpg);
  background-size: cover;
  width: 600px;
  height: 500px;
  & > div {
    width: inherit;
    height: inherit;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: flex-start;
    color: ${Theme.realWhite};
    & > h2 {
      font-size: 3rem;
      font-family: SCD-5;
    }
    & > h3 {
      font-size: 2.5rem;
      font-family: SCD-3;
      display: flex;
      align-items: center;
    }
    & > p {
      font-size: 2rem;
      font-family: SCD-3;
    }
  }
`;
const WantSearch = styled.div`
  /* 뭐가 땡기나요 검색창 설정 */
  & > h1 {
    font-family: YANGJIN;
    font-size: 3rem;
    color: ${Theme.lightblack};
  }
  & > div:nth-child(2) {
    display: flex;
    & > input {
      width: 500px;
      height: 50px;
      padding-left: 10px;
      font-size: 2rem;
      font-family: SCD-3;
      color: ${Theme.lightblack};
      border: 2px solid ${Theme.gray};
    }
    & > button {
      width: 50px;
      height: 50px;
      border: 1px solid ${Theme.gray};
      background-color: ${Theme.gray};
      & > img {
        width: 33px;
        height: 33px;
        filter: invert();
      }
    }
    & > button:hover {
      border: 1px solid ${Theme.lightgray};
      background-color: ${Theme.lightgray};
    }
  }
`;
const FruitVegetable = styled.div`
  /* 이번주 추천 채소, 과일 페이지 설정 */
  width: 550px;
  height: 350px;
  border: 2px solid ${Theme.gray};
  border-radius: 10px;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  & > button {
    width: 200px;
    height: 100px;
    padding-top: 5px;
    background-color: ${Theme.green};
    border: none;
    border-radius: 5px;
    color: ${Theme.realWhite};
    font-size: 3rem;
    font-family: YANGJIN;
  }
  & > button:hover {
    background-color: ${Theme.orange};
  }
`;
const TitleButton = styled.div`
  /* 총 000개의 맛있는 레시피가 있습니다, 최신순/추천순 버튼 */
  width: 1030px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  & > h2 {
    font-size: 3rem;
    font-family: YANGJIN;
    color: ${Theme.lightblack};
    & > span {
      font-size: inherit;
      color: ${Theme.green};
    }
  }
  & > div {
    display: flex;
    & > button {
      width: 150px;
      height: 50px;
      border: 2px solid ${Theme.gray};
      background-color: ${Theme.gray};
      color: ${Theme.realWhite};
      font-family: SCD-5;
      font-size: 2rem;
    }
    & > button:hover {
      background-color: ${Theme.green};
      border: 1px solid ${Theme.green};
    }
  }
`;
const Profile = styled.div`
  /* 게시글 작성자 프로필 */
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-image: url(/img/포메라니안.jpg);
  background-size: cover;
`;
const PostList = styled.div`
  /* 낱개 게시글 설정 */
  color: ${Theme.lightblack};
  & > img {
    width: 200px;
    height: 200px;
  }
  & > h3 {
    font-size: 1.5rem;
    font-family: SCD-3;
  }
  & > div:nth-child(3) {
    font-size: 1.5rem;
    font-family: SCD-4;
    display: flex;
    align-items: center;
  }
  & > p {
    font-size: 1.5rem;
    font-family: SCD-3;
  }
`;
const FooterButton = styled.div`
  /* 게시글 다음/이전 페이지 이동 버튼 */
  display: flex;
  justify-content: space-around;
  align-items: center;
  & > button {
    width: 50px;
    height: 50px;
    margin: 5px;
    margin-top: 100px;
    border: 1px solid ${Theme.lightgray};
    background-color: ${Theme.realWhite};
    color: ${Theme.lightblack};
    font-size: 1.5rem;
    font-family: SCD-3;
  }
`;
const Recipe = () => {
  return (
    <RecipeParent>
      {/* 레시피 페이지 전체 부모 설정값 */}
      <div>
        {/* 해드 */}
        <div>
          <h1>이번주 추천 레시피</h1>
          <br />
          <ImgWrapper>
            {/* 이번주 추천 레시피 배경이미지, 추천레시피 당첨 게시글 폰트 */}
            <div>
              <h2>상희누나의 단짠단짠 감자전</h2>
              <h3>
                <Profile></Profile>&nbsp;둔산동 고든램지
                {/* 게시글 작성자 프로필 */}
              </h3>
              <p>⭐(5.0)/5</p>
            </div>
          </ImgWrapper>
        </div>
        <div>
          <WantSearch>
            {/* 뭐가 땡기나요 검색창 설정 */}
            <h1>뭐가 땡기나요?</h1>
            &nbsp;
            <div>
              <input type={"text"} placeholder="검색어 입력"></input>
              <button>
                <img src="/img/검색아이콘.png" alt="검색"></img>
              </button>
            </div>
          </WantSearch>
          <div>
            <h1>이번주 채소, 과일목록</h1>
            &nbsp;
            <FruitVegetable>
              {/* 이번주 추천 채소, 과일 페이지 설정 */}
              <button>두리안</button>
              <button>불로초</button>
              <button>산삼</button>
              <button>코코넛</button>
            </FruitVegetable>
          </div>
        </div>
      </div>
      <div>
        {/* 밑에 게시물 부모 */}
        <TitleButton>
          {/* 총 000개의 맛있는 레시피가 있습니다, 최신순/추천순 버튼 */}
          <h2>
            총 <span>OOO</span>개의 맛있는 레시피가 있읍니다.
          </h2>
          <div>
            <button>최신순</button>
            &nbsp;
            <button>추천순</button>
          </div>
        </TitleButton>
        <PostPage>
          {/* 게시글 전체 설정 */}
          <PostList>
            {/* 낱개 게시글 설정 */}
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              {/* 게시글 작성자 프로필 */}
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
          <PostList>
            <img src="/img/감자전.jpg" alt="감자전"></img>
            <h3>상희누나의 단짠단짠 감자전</h3>
            <div>
              <Profile></Profile>
              &nbsp; 둔산동 고든램지
            </div>
            <p>⭐(4.5)/5</p>
          </PostList>
        </PostPage>
      </div>
      <div>
        <FooterButton>
          {/* 게시글 다음/이전 페이지 이동 버튼 */}
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
        </FooterButton>
      </div>
    </RecipeParent>
  );
};
export default Recipe;
