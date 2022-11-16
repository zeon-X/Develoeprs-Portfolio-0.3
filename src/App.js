import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyPortfolio from "./pages/MyPortfolio";
import NotFround from "./shared/NotFound";

function App() {
  return (
    <div className="App lg:px-8 md:px-4 sm:p-3">
      <Routes>
        <Route path="/" element={<MyPortfolio></MyPortfolio>}></Route>
        <Route path="*" element={<NotFround></NotFround>}></Route>
      </Routes>
    </div>
  );
}

export default App;
