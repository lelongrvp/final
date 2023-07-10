import { Typography } from "antd";
import MovieCard from "./MovieCard";

const { Title } = Typography;

const Movie = () => {
  return (
    <>
      <Title>This is a movie app</Title>
      <MovieCard />
    </>
  );
};

export default Movie;
