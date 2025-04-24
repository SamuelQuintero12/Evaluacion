import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import MainContainer from "./components/MainContainer";
import { ProductProvider } from "./Context/ProductContext";
import "./index.css";
import { useContext } from "react";
import { ProductContext } from "./Context/ProductContext";
import "./App.css";


function App() {
  return (
    <div className="flex flex-row min-h-screen">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-6">
        <SearchBar />
        <MainContainer />
      </main>
      <Footer />
    </div>
  );
}

export default App;
