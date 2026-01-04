import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Convert id from string to number to match JSON data
    const foundRecipe = recipeData.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <div className="text-center mt-10">Recipe not found.</div>;
  }

  return (
    <div className="container mx-auto p-4 max-w-4xl">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-64 object-cover rounded-md mb-6" 
        />
        <h1 className="text-4xl font-bold mb-4 text-blue-800">{recipe.title}</h1>
        <p className="text-gray-700 text-lg mb-6">{recipe.summary}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ingredients Section */}
          <section className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Ingredients</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Ingredient 1</li>
              <li>Ingredient 2</li>
              <li>Ingredient 3</li>
            </ul>
          </section>

          {/* Instructions Section */}
          <section className="bg-gray-50 p-4 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold mb-3 border-b pb-2">Instructions</h2>
            <ol className="list-decimal list-inside space-y-4">
              <li>Step 1: Prep your ingredients.</li>
              <li>Step 2: Cook according to the recipe.</li>
              <li>Step 3: Serve and enjoy!</li>
            </ol>
          </section>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
