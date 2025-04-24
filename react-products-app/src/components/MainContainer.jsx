import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

const MainContainer = () => {
  const { filteredProducts, loading, error } = useContext(ProductContext);

  if (loading) return <p className="text-center">Cargando productos...</p>;
  if (error) return <p className="text-red-500 text-center">{error}</p>;

  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default MainContainer;
