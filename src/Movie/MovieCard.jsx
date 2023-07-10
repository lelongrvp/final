import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Image, Input, Space, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const { Title, Text } = Typography;

const MovieCard = () => {
  const apiKey = "85788cd48e2db9876613e03b8bca993d";

  const [movieData, setMovieData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const res = await axios.get("https://api.themoviedb.org/3/search/movie", {
        params: {
          api_key: apiKey,
          query: searchQuery || "IT",
        },
      });
      setSearchQuery(res.data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

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
  }, [searchQuery]);

  return (
    <div>
      <Space direction="horizontal">
        <Input
          size="small"
          placeholder="Your movie name goes here"
          prefix={<SearchOutlined />}
          style={{ width: 300, marginBottom: 20 }}
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Space>
      {movieData && (
        <Card
          title={movieData.title}
          cover={
            <Image
              src={`https://image.tmdb.org/t/p/w500/${movieData.poster_path}`}
              style={{
                height: 100,
                objectFit: "cover",
                padding: 10,
              }}
            />
          }
          style={{
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            border: "none",
          }}
        >
          <div>
            <Title level={5}>Overview:</Title>
            <Text>{movieData.overview}</Text>
          </div>
        </Card>
      )}
    </div>
  );
};

export default MovieCard;
