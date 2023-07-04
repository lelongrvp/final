import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Calculator from "./calculator/Calculator";
import Movie from "./fetchMovie/Movie";
import Chess from "./chess/Chess";
import Pomodoro from "./pomodoro/Pomodoro";

const Content = () => {
  return (
    <div
      style={{
        background: "white",
        padding: "10px",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chessboard" element={<Chess />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/pomodoro" element={<Pomodoro />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
