import { useEffect, useState } from "react";
import "./App.css";
import Footer from "./Footer";
import NavBar from "./NavBar";
import HomePage from "./home-page/components/HomePage";
import ProjectPage from "./project-page/components/ProjectPage";

function App() {
  const [page, setPage] = useState(0); //Change value to set default page
  const pages = [<HomePage />, <ProjectPage />];
  const [selectedPage, setSelectedPage] = useState(pages[page]);
  useEffect(() => {
    setSelectedPage(pages[page]);
  }, [page]);
  return (
    <div className="container">
      <NavBar setPage={setPage} />
      {selectedPage}
      <Footer />
    </div>
  );
}

export default App;
