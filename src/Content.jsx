import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Calculator from "./calculator/Calculator";
import Chess from "./chess/Chess";
import Pomodoro from "./pomodoro/Pomodoro";
import Weather from "./Weather/Weather";
import Movie from "./Movie/Movie";

const Content = () => {
  return (
    <div
      style={{
        background: "white",
        height: "100%",
      }}
    >
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/chessboard" element={<Chess />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/pomodoro" element={<Pomodoro />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
