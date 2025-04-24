import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

const MainContainer = () => {
  const { filteredProducts, loading, error } = useContext(ProductContext);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="  flex justify-center items-center min-h-screen bg-gray-100">
  {filteredProducts.map((product) => (
    <ProductCard key={product.id} product={product} />
  ))}
</div>

  );
};

export default MainContainer;
