import { useContext } from "react";
import { useLocalStorageState } from "../hooks/useLocalStorageState";
import { createContext } from "react";
import { useEffect } from "react";

const ThemeContext = createContext();

export default function ThemeProvider({ children }) {
  const [themeMode, setThemeMode] = useLocalStorageState("light", "themeMode");

  useEffect(() => {
    if (themeMode === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [themeMode]);

  function toggleThemeMode() {
    setThemeMode((prev) => (prev === "dark" ? "light" : "dark"));
  }

  const value = { themeMode, toggleThemeMode };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
