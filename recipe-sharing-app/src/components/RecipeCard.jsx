import { useRecipeStore } from '../recipeStore';

const RecipeCard = ({ recipe }) => {
  const addFavorite = useRecipeStore((state) => state.addFavorite);
  const removeFavorite = useRecipeStore((state) => state.removeFavorite);
  const favorites = useRecipeStore((state) => state.favorites);

  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="recipe-card">
      <h3>{recipe.title}</h3>
      <p>{recipe.description}</p>

      {isFavorite ? (
        <button onClick={() => removeFavorite(recipe.id)}>★ Remove Favorite</button>
      ) : (
        <button onClick={() => addFavorite(recipe.id)}>☆ Add to Favorites</button>
      )}
    </div>
  );
};

export default RecipeCard;
