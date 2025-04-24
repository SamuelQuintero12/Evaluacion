const ProductCard = ({ product }) => (
  <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 hover:translate-y-1">
    <div className="relative mb-8">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-cover rounded-2xl shadow-md transform hover:scale-105 transition-transform duration-500"
      />
    </div>
    <h2 className="text-2xl font-semibold text-gray-900 mb-4">{product.title}</h2>
    <p className="text-gray-600 mb-6">{product.description}</p>
    <div className="flex justify-between items-center">
      <span className="text-xl font-bold text-gray-800">${product.price}</span>
      <button className="px-5 py-2 text-white bg-black rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 transition-colors duration-300">
        Add to Cart
      </button>
    </div>
  </div>
);

export default ProductCard;
