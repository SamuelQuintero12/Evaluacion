import React from 'react'; // Es buena práctica importar React siempre

// Importaciones de Componentes
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import MainContainer from "./components/MainContainer";

// Importación del Proveedor de Contexto
import { ProductProvider } from "./Context/ProductContext";

// Importaciones de CSS
import "./index.css"; // Para estilos globales y Tailwind
import "./App.css";   // Para estilos específicos de App.jsx si los tienes

function App() {
  return (
    // ProductProvider debe envolver los componentes que consumirán el contexto
    <ProductProvider>
      <div className="flex flex-col min-h-screen bg-gray-100"> {/* Estructura vertical y fondo */}
        <Header />
        <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <SearchBar />
          <MainContainer />
        </main>
        <Footer />
      </div>
    </ProductProvider>
  );
}

export default App;