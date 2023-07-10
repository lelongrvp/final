import { Button, Card, Input, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

const MovieCard = () => {
  const apiKey = "85788cd48e2db9876613e03b8bca993d";
  const [movieData, setMovieData] = useState(null);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get("https://api.themoviedb.org/3/movie/550", {
          params: {
            api_key: apiKey,
          },
        });
        setMovieData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);
  return (
    <div>
      <Input />
      <Button>Search</Button>
      <Card>
        {movieData ? (
          <div>
            <Title>{movieData.title}</Title>
            <Text>{movieData.overview}</Text>
          </div>
        ) : (
          <Text>Loading...</Text>
        )}
      </Card>
    </div>
  );
};

export default MovieCard;
