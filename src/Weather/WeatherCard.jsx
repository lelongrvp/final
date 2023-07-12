import { SearchOutlined } from "@ant-design/icons";
import { Button, Card, Input, Space, Typography } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const { Text } = Typography;

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
            units: "metric",
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
              units: "metric",
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
        {weatherData ? (
          <Card
            title={weatherData.name}
            style={{
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
              border: "none",
            }}
          >
            <div>
              <div>
                <Text>Location: {weatherData.sys.country}</Text>
              </div>
              <div>
                <Text>Temparature: {weatherData.main.temp}°C</Text>
              </div>
              <div>
                <Text>Humidity: {weatherData.main.humidity}%</Text>
              </div>
              <div>
                <Text>Description: {weatherData.weather[0].description}</Text>
              </div>
            </div>
          </Card>
        ) : (
          <Text>Loading....</Text>
        )}
      </Space>
    </div>
  );
};

export default WeatherCard;
