import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);
  const toggleTheme = () => setDark((prev) => !prev);

  useEffect(() => {
    document.body.className = dark ? "dark" : "light";
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      <div>{children}</div>
    </ThemeContext.Provider>
  );
}
