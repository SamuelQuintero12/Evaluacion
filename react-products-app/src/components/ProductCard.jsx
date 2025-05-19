import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="card">
      <img
        src={product.image}
        alt={product.name}
        className="card-img"
      />
      <h2 className="card-title">{product.name}</h2>
      <p className="card-description">{product.description}</p>
      <span className="card-price">${product.price.toFixed(2)}</span>
      <button className="card-button">Ver más</button>
    </div>
  );
};

export default ProductCard;

