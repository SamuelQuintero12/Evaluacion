const ProductCard = ({ product }) => (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition-all text-center">
      <img src={product.image} alt={product.title} className="h-32 mx-auto object-contain mb-4" />
      <h2 className="font-bold text-md mb-2 line-clamp-1">{product.title}</h2>
      <p className="text-sm text-gray-600 line-clamp-2 mb-2">{product.description}</p>
      <span className="text-primary font-semibold text-lg">${product.price}</span>
    </div>
  );
  
  export default ProductCard;
  