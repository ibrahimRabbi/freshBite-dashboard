import React from 'react';
import { Plus, Trash2, ChevronDown } from 'lucide-react';

export default function IngredientField({
  ingredients,
  setIngredients,
}: {
  ingredients: any;
  setIngredients: any;
}) {
  // Define categories and units
  const categories = [
    'Produce',
    'Bakery',
    'Dairy, Eggs, Alternatives',
    'Meat, Fish, Tofu, Alternatives',
    'Grains & Dry Legumes',
    'Pantry & Canned',
    'Frozen',
    'Beverages',
    'Snacks & Sweets',
    'Convenience',
    'Others',
  ];

  const units = ['Unit', 'g', 'kg', 'pcs', 'ml', 'L', 'cup', 'oz', 'lb', 'tsp', 'tbsp'];

  
  const addIngredient = (e: React.MouseEvent) => {
    e.preventDefault();  
    setIngredients([
      ...ingredients,
      {
        id: Date.now(),
        name: '',
        categories: 'Produce', // Default category
        value: '',
        unit: 'Unit', // Default unit
        householdValue: '',
        houseHoldUnit: 'Unit', // Default unit for household
      },
    ]);
  };

  // Function to remove an ingredient
  const removeIngredient = (e: React.MouseEvent, id: any) => {
    e.preventDefault(); // Prevent form submission
    if (ingredients.length > 1) {
      setIngredients(ingredients.filter((ing: any) => ing.id !== id));
    }
  };

  // Function to update ingredient fields
  const updateIngredient = (id: any, field: any, value: any) => {
    setIngredients(
      ingredients.map((ing: any) =>
        ing.id === id ? { ...ing, [field]: value } : ing
      )
    );
  };

  return (
    <div>
      {ingredients.map((ingredient: any) => (
        <div key={ingredient.id} className="flex items-center gap-3 mb-3">
          {/* Ingredient Name Input */}
          <input
            type="text"
            placeholder="e.g. Spaghetti"
            value={ingredient.name}
            onChange={(e) => updateIngredient(ingredient.id, 'name', e.target.value)}
            className="w-32 px-4 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400"
          />

          {/* Category Dropdown */}
          <div className="relative">
            <select
              value={ingredient.categories}
              onChange={(e) => updateIngredient(ingredient.id, 'categories', e.target.value)}
              className="appearance-none w-40 px-4 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-700 cursor-pointer pr-10"
            >
              <option value="">Select Category</option>
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
          </div>

          {/* Amount 1 Input */}
          <input
            type="text"
            placeholder="e.g. 400"
            value={ingredient.value}
            onChange={(e) => updateIngredient(ingredient.id, 'value', e.target.value)}
            className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400"
          />

          {/* Unit 1 Dropdown */}
          <div className="relative">
            <select
              value={ingredient.unit}
              onChange={(e) => updateIngredient(ingredient.id, 'unit', e.target.value)}
              className="appearance-none w-20 px-2 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-700 cursor-pointer pr-10"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
          </div>

          {/* g/ml Label */}
          <span className="text-gray-500 text-sm font-medium">g/ml</span>

          {/* Amount 2 Input */}
          <input
            type="text"
            placeholder="e.g. 400"
            value={ingredient.householdValue}
            onChange={(e) => updateIngredient(ingredient.id, 'householdValue', e.target.value)}
            className="w-20 px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:border-gray-400"
          />

          {/* Unit 2 Dropdown */}
          <div className="relative">
            <select
              value={ingredient.houseHoldUnit}
              onChange={(e) => updateIngredient(ingredient.id, 'houseHoldUnit', e.target.value)}
              className="appearance-none w-24 px-3 py-2 bg-gray-900 text-white rounded-lg text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-700 cursor-pointer pr-10"
            >
              {units.map((unit) => (
                <option key={unit} value={unit}>
                  {unit}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white pointer-events-none" />
          </div>

          {/* Volume Unit */}
          <span className="text-gray-500 text-sm font-medium">Hsh</span>

          {/* Delete Button */}
          <button
            type="button" // Prevent form submission
            onClick={(e) => removeIngredient(e, ingredient.id)}
            className="p-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      ))}

      {/* Add Ingredient Button */}
      <button
        type="button" // Prevent form submission
        onClick={addIngredient}
        className="flex items-center gap-2 px-5 py-2.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-colors mt-5"
      >
        <Plus className="w-4 h-4" />
        Add ingredient
      </button>
    </div>
  );
}
