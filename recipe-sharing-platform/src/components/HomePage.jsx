import React, { useState, useEffect } from 'react';
import recipeData from '../data.json';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // In a real app, you'd fetch this. For now, we load from our JSON file.
    setRecipes(recipeData);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Recipe Sharing Platform</h1>
      
      {/* Grid Layout: 1 col on mobile, 2 on tablet, 3 on desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recipes.map(recipe => (
          <div 
            key={recipe.id} 
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-4"
          >
            <img 
              src={recipe.image} 
              alt={recipe.title} 
              className="w-full h-32 object-cover rounded-t-lg mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
            <p className="text-gray-600">{recipe.summary}</p>
            <a 
              href="#" 
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              View Details
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
