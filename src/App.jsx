import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="dashboard">
      <header className="header">
        <h2>Dashboard</h2>
       
      </header>

      <div className="cards">
        <div className="card">Users</div>
        <div className="card">Sales</div>

         <button
          className="theme-btn"
          onClick={() =>
            setTheme(theme === "light" ? "dark" : "light")
          }
        >
          {theme === "light" ? " Dark" : " Light"}
        </button>
     
      </div>
    </div>
  );
}

export default App;
