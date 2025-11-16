import useRecipeStore from "../stores/recipeStore";
import { useNavigate } from "react-router-dom";

const DeleteRecipeButton = ({ id }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(id);
    navigate("/");
  };

  return (
    <button
      onClick={handleDelete}
      style={{ background: "red", color: "white", padding: "8px 12px" }}
    >
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
