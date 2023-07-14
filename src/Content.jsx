import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Calculator from "./calculator/Calculator";
import Chess from "./chess/Chess";
import Pomodoro from "./pomodoro/Pomodoro";
import Weather from "./Weather/Weather";
import Movie from "./Movie/Movie";
import Login from "./Authentication/Login";

const Content = () => {
  return (
    <div
      style={{
        height: "100%",
      }}
    >
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />}></Route>
        <Route path="/chessboard" element={<Chess />}></Route>
        <Route path="/calculator" element={<Calculator />}></Route>
        <Route path="/pomodoro" element={<Pomodoro />}></Route>
        <Route path="/weather" element={<Weather />}></Route>
        <Route path="/movie" element={<Movie />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
};

export default Content;
