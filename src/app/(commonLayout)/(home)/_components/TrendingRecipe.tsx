
const recipes = [
  {
    name: "Egg Benedict",
    rating: "5 ★",
    reviews: 48,
    shares: 42,
  },
  {
    name: "Shakshuka",
    rating: "4 ★",
    reviews: 32,
    shares: 46,
  },
  {
    name: "Tomato Soup",
    rating: "4 ★",
    reviews: 38,
    shares: 28,
  },
  {
    name: "Pizza",
    rating: "4.5 ★",
    reviews: 29,
    shares: 53,
  },
];

export default function TrendingRecipes() {
  return (
    <div className="bg-white rounded-xl shadow py-10 px-6 w-full">
      <h2 className="text-sm font-semibold text-gray-800 mb-4">Trending Recipes</h2>

      <div className="grid grid-cols-4 text-sm text-gray-500 font-medium px-4 pb-2">
        <span>Name</span>
        <span>Ratings</span>
        <span>Reviews</span>
        <span>Shares</span>
      </div>

      <div className="space-y-5">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="grid grid-cols-4 items-center bg-white border border-gray-200 text-sm text-gray-700 px-4 py-3 rounded-lg"
          >
            <span className="whitespace-nowrap overflow-hidden text-ellipsis">{recipe.name}</span>
            <span>{recipe.rating}</span>
            <span>{recipe.reviews}</span>
            <span>{recipe.shares}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
