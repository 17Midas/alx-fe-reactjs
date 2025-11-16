import { Link } from "react-router-dom";
import useRecipeStore from "../stores/recipeStore";

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipes</h2>
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{ border: "1px solid #ddd", padding: 10, marginBottom: 10 }}
        >
          <h3>
            <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
          </h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
