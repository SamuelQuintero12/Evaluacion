import { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error(`Error ${response.status}: No se pudieron obtener los productos.`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error al cargar productos:", err);
        setError(err.message || "Ocurrió un error al cargar los productos. Inténtalo de nuevo.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <ProductContext.Provider
      value={{ products, filteredProducts, loading, error, searchQuery, setSearchQuery }}
    >
      {children}
    </ProductContext.Provider>
  );
};