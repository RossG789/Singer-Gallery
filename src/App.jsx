import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { AboutPage } from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CarsPage } from "./pages/CarsPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="nav-bar">
          <h1>The Choir</h1>

          <nav className="links">
            <Link className="linkTags" to="/">
              Home
            </Link>{" "}
            |{" "}
            <Link className="linkTags" to="/about">
              About
            </Link>{" "}
            |{" "}
            <Link className="linkTags" to="/cars">
              Cars
            </Link>
          </nav>
        </div>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/cars" element={<CarsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
