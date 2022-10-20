import styled from "styled-components";
const PostList = styled.div`
  /* 낱개 게시글 설정 */
  color: ${({ theme }) => theme.lightblack};
  & > img {
    width: 198px;
    height: 198px;
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
const RecipeItem = ({ recipe }) => {
  return (
    <PostList>
      {/* 낱개 게시글 설정 */}
      <img src="http://localhost:8080/recipe/감자전.jpg" alt="감자전"></img>
      <h3>{recipe.recipe_title}</h3>
      <div>조회수 {recipe.recipe_views}</div>
      <p>⭐({recipe.recipe_value})/5</p>
    </PostList>
  );
};

export default RecipeItem;
