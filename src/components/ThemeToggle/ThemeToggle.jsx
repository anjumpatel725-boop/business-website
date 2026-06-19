import { useState, useEffect } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button
      className="theme-toggle"
      onClick={() =>
        setTheme(theme === "light" ? "dark" : "light")
      }
    >
      {theme === "light" ? "🌙" : "☀️"}
    </button>
  );
}

export default ThemeToggle;