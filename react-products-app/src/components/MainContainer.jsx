import React, { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";
import ProductCard from "./ProductCard";

const MainContainer = () => {
  const { filteredProducts, loading, error } = useContext(ProductContext);

  if (loading) {
    return (
      <div className="loading-state">
        <div className="spinner"></div>
        <p>Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-state">
        <svg className="icon" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
          />
        </svg>
        <p className="error-title">¡Error!</p>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>Reintentar</button>
      </div>
    );
  }

  return (
    <main>
      {filteredProducts.length > 0 ? (
        <div className="product-grid fade-in-grid">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="empty-state">
          <svg className="icon" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p>No hay productos para mostrar.</p>
          <span>Intenta ajustar tu búsqueda o revisa más tarde.</span>
        </div>
      )}
    </main>
  );
};

export default MainContainer;
