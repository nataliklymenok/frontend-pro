import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeContext, themes } from "./themeContext";
import Header from "./components/Header.jsx";
import Main from "./pages/Main.jsx";
import Contacts from "./pages/Contacts.jsx";
import About from "./pages/About.jsx";
import { ErrorBoundary } from "./ErrorBoundary.jsx";

function App() {
  const [theme, setTheme] = useState(themes.white);

  useEffect(() => {
    document.body.style.background = theme.background;
  }, [theme]);

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <Header />
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </ErrorBoundary>
    </ThemeContext.Provider>
  );
}

export default App;
