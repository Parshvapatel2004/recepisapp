import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Recepie from "./Pages/Recepie";
import Allrecipes from "./Pages/Allrecipes";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:mealname" element={<Home />} />
          <Route path="/allrecipes" element={<Allrecipes />} />
          <Route path="/Recepie/:id" element={<Recepie />} />
          <Route path="/allrecipes/:mealname" element={<Allrecipes />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
