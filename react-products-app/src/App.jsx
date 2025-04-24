import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import MainContainer from "./components/MainContainer";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
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
