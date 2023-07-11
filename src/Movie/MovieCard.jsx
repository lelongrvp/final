import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Image, Input, Space, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const { Text } = Typography;

const MovieCard = () => {
  const apiKey = "648e84d5";

  const [movieData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?s=popular&type=movie&apikey=${apiKey}`
        );
        const data = res.data;
        if (data.Search) {
          console.log(data.Search);
          setMovieData(data.Search);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovie();
  }, []);

  const handleSearch = async () => {
    if (searchQuery.trim() !== "") {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?s=${searchQuery}&type=movie&apikey=${apiKey}`
        );
        const data = res.data;
        if (data.Search) {
          console.log(data.Search);
          setMovieData(data.Search);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const res = await axios.get(
          `https://www.omdbapi.com/?s=popular&type=movie&apikey=${apiKey}`
        );
        const data = res.data;
        if (data.Search) {
          setMovieData(data.Search);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <Space direction="vertical">
      <Input
        size="small"
        type="text"
        style={{ width: 300, marginBottom: 20 }}
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
        }}
        placeholder="Your movie title goes here"
        prefix={<SearchOutlined />}
      ></Input>
      <Button onClick={handleSearch}>Search</Button>
      <Space direction="horizontal">
        {movieData.map((movie) => (
          <Card
            key={movie.imdbID}
            title={movie.Title}
            cover={
              <Image
                src={movie.Poster}
                style={{
                  height: 200,
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
            <Space direction="vertical">
              <Text>
                <b>Release:</b> {movie.Year}
              </Text>
            </Space>
          </Card>
        ))}
      </Space>
    </Space>
  );
};

export default MovieCard;
