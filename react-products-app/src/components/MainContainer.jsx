import React from "react";
import ProductCard from "./ProductCard";

const MainContainer = ({ products }) => (
  <main className="main-container">
    {products.length ? (
      products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))
    ) : (
      <div className="no-results">
        <p>No se encontraron productos con ese nombre 🌱</p>
      </div>
    )}
  </main>
);

export default MainContainer;
