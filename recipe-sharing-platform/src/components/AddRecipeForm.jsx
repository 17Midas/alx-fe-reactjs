import React, { useState } from 'react';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState([]);

  // Step 2: Validation Logic
  const validate = () => {
    let newErrors = [];
    if (!title) newErrors.push("Title is required.");
    if (!ingredients) newErrors.push("Ingredients are required.");
    // Example check: split ingredients by lines and check length
    if (ingredients.split('\n').filter(i => i.trim()).length < 2) {
      newErrors.push("Please include at least two ingredients.");
    }
    if (!steps) newErrors.push("Preparation steps are required.");
    
    setErrors(newErrors);
    return newErrors.length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log({ title, ingredients, steps });
      // Reset form
      setTitle('');
      setIngredients('');
      setSteps('');
      setErrors([]);
      alert("Recipe Submitted!");
    }
  };

  return (
    <div className="max-w-2xl mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Add a New Recipe</h2>
      
      {/* Error Display */}
      {errors.length > 0 && (
        <div className="mb-4 text-red-500 bg-red-50 p-3 rounded">
          {errors.map((error, index) => <p key={index}>{error}</p>)}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title Input */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Recipe Title</label>
          <input 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter recipe title"
          />
        </div>

        {/* Ingredients Textarea */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Ingredients (one per line)</label>
          <textarea 
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 2 eggs, 1 cup flour"
          />
        </div>

        {/* Steps Textarea */}
        <div>
          <label className="block text-gray-700 font-medium mb-1">Preparation Steps</label>
          <textarea 
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
            rows="4"
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Describe the steps..."
          />
        </div>

        {/* Submit Button */}
        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300 md:w-auto"
        >
          Add Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
