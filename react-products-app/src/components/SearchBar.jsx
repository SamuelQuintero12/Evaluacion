import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

const SearchBar = () => {
  const { setSearchQuery } = useContext(ProductContext);

  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Buscar productos..."
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full md:w-1/2 px-4 py-2 border border-accent rounded-lg focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default SearchBar;

