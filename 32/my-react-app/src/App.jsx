import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { ErrorBoundary } from "./ErrorBoundary";
import { Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Todo from "./pages/Todo";
import About from "./pages/About";
import CV from "./pages/CV";
import Footer from "./components/Footer";
import Swapi from "./pages/Swapi";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <main className="app-main">
        <ErrorBoundary>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/todo" element={<Todo />} />
            <Route path="/swapi" element={<Swapi />} />
            <Route path="/about" element={<About />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </ErrorBoundary>
      </main>
      <Footer />
    </>
  );
}

export default App;
