import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Input, Space, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const { Text, Title } = Typography;

const WeatherCard = () => {
  const apiKey = "40b2f645425cab5c095dd71353f04753";

  const [weatherData, setWeatherData] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = async () => {
    try {
      const res = await axios.get(
        "https://api.openweathermap.org/data/2.5/weather",
        {
          params: {
            q: searchQuery,
            appid: apiKey,
          },
        }
      );
      setSearchQuery(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather`,
          {
            params: {
              q: searchQuery || "Hanoi",
              appid: apiKey,
            },
          }
        );
        setWeatherData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchWeather();
  }, [searchQuery]);

  return (
    <div style={{ marginLeft: 20 }}>
      <Space direction="vertical">
        <Input
          size="medium"
          placeholder="Type your city"
          value={searchQuery}
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          prefix={<SearchOutlined />}
        />
        <Button onClick={handleSearch}>Search</Button>
        <Card>
          {weatherData ? (
            <div>
              <Title>{weatherData.name}</Title>
              <div>
                <Text>Temparature: {weatherData.main.temp}</Text>
              </div>
              <div>
                <Text>Description: {weatherData.weather[0].description}</Text>
              </div>
            </div>
          ) : (
            <Text>Loading....</Text>
          )}
        </Card>
      </Space>
    </div>
  );
};

export default WeatherCard;
