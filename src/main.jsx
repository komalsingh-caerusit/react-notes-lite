import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NotesProvider from "./context/NotesContext.jsx";
import "./styles/globals.css";
import "./styles/variables.css";
import ThemeProvider from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <NotesProvider>
        <App />
      </NotesProvider>
    </ThemeProvider>
  </React.StrictMode>
);
