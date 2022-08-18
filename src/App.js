import { Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Carousol from "./components/Carousol/Carousol";
import Contact from "./components/Contact/Contact";
import NotFround from "./components/NotFround/NotFround";

function App() {
  return (
    <div className="App p-10 min-h-screen">
      <Routes>
        <Route path="/" element={<Carousol></Carousol>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="*" element={<NotFround></NotFround>}></Route>
      </Routes>
    </div>
  );
}

export default App;
