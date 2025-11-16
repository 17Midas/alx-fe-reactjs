import React, { useEffect } from 'react';
import { useRecipeStore } from '../recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore((state) => state.recommendations);
  const generateRecommendations = useRecipeStore((state) => state.generateRecommendations);

  useEffect(() => {
    generateRecommendations();
  }, []);

  return (
    <div style={{ marginTop: "2rem" }}>
      <h2>Recommended For You</h2>
      {recommendations.length === 0 && <p>No recommendations yet.</p>}

      {recommendations.map((recipe) => (
        <div key={recipe.id} style={{ marginBottom: "1rem" }}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecommendationsList;
