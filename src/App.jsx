import "./App.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import HomePage from "./home-page/components/HomePage";

function App() {
  return (
    <div className="container">
      <NavBar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
