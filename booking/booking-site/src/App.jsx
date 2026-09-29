import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Hotels from "./pages/Hotels";
import About from "./pages/About";
import Destinations from "./pages/Destinations";

function App() {
  return (
    <>
      <Header />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/about" element={<About />} />
          <Route path="/destinations" element={<Destinations />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
