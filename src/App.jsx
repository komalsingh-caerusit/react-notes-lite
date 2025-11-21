import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <BrowserRouter>
      <button
        onClick={toggleTheme}
        style={{
          cursor: "pointer",
          padding: "8px",
        }}
      >
        Toogle Theme
      </button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
