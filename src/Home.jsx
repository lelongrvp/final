import { Image, Space, Typography } from "antd";
import { ArrowDownOutlined, SmileOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Title
        level={1}
        style={{
          marginBottom: "30px",
          color: "#2c3e50",
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
      >
        Welcome to the Ultimate Website
      </Title>
      <SmileOutlined
        style={{ fontSize: "64px", marginBottom: "40px", color: "#1890ff" }}
      />
      <Title
        level={4}
        style={{
          marginBottom: "10px",
          color: "#2c3e50",
          fontWeight: "bold",
          fontSize: "28px",
        }}
      >
        What I have for you...
      </Title>
      <ArrowDownOutlined />
      <Space direction="vertical">
        <div
          style={{
            width: "100%",
            margin: 20,
            padding: 20,
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            borderRadius: 10,
          }}
        >
          <Title level={3}>Chess Board</Title>
          <Space direction="vertical">
            <Image
              width={200}
              height={100}
              src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Chess_board_opening_staunton.jpg"
              alt="chess-board"
              style={{ borderRadius: 10 }}
            />
            <Text>
              A simple re-creation of a Chess game board, with default size of
              8x8
            </Text>
            <Text type="link" style={{ cursor: "pointer", color: "#400de8" }}>
              Learn More
            </Text>
          </Space>
        </div>
        <div
          style={{
            width: "100%",
            margin: 20,
            padding: 20,
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            borderRadius: 10,
          }}
        >
          <Title level={3}>Calculator</Title>
          <Space direction="vertical">
            <Image
              width={200}
              height={100}
              src="https://media.istockphoto.com/id/603187710/vector/calculator-icon-with-long-shadow.jpg?s=612x612&w=0&k=20&c=SiAhO7PRi0PSY4I9E1B-5DiBdZ1P8vivsbmJWV2Bx5c="
              style={{ borderRadius: 10, objectFit: "cover" }}
            />
            <Text>
              A simple calculator, with basic functions, no scientific mode
              (yet)
            </Text>
            <Text type="link" style={{ cursor: "pointer", color: "#400de8" }}>
              Learn More
            </Text>
          </Space>
        </div>
        <div
          style={{
            width: "100%",
            margin: 20,
            padding: 20,
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            borderRadius: 10,
          }}
        >
          <Title level={3}>Pomodoro clock</Title>
          <Space direction="vertical">
            <Image
              width={200}
              height={100}
              src="https://store-images.s-microsoft.com/image/apps.35093.13794825414216562.b1aeb015-ea6f-4ce0-880c-343bdea8198a.0ff8afca-36c7-4f7c-86fe-8e3d7eb9960c"
              style={{ borderRadius: 10, objectFit: "cover" }}
            />
            <Text>A simple Pomodoro timer</Text>
            <Text
              type="link"
              style={{
                cursor: "pointer",
                color: "#400de8",
              }}
            >
              Learn More
            </Text>
          </Space>
        </div>
        <div
          style={{
            width: "100%",
            margin: 20,
            padding: 20,
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            borderRadius: 10,
          }}
        >
          <Title level={3}>Weather Information</Title>
          <Space direction="vertical">
            <Image
              width={200}
              height={100}
              src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/11268d10740083.5c4f778e8ad9b.png"
              style={{ borderRadius: 10, objectFit: "cover" }}
            />
            <Text>
              A function to get weather data by city. Using API from OpenWeather
            </Text>
            <Text type="link" style={{ cursor: "pointer", color: "#400de8" }}>
              Learn More
            </Text>
          </Space>
        </div>
        <div
          style={{
            width: "100%",
            margin: 20,
            padding: 20,
            boxShadow:
              "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
            borderRadius: 10,
          }}
        >
          <Title level={3}>Movie data</Title>
          <Space direction="vertical">
            <Image
              width={200}
              height={100}
              src="https://www.igeeksblog.com/wp-content/uploads/2022/12/Best-iPad-Apps-to-Watch-Movies.jpg"
              style={{ borderRadius: 10, objectFit: "cover" }}
            />
            <Text>
              A simple function to get data of movies that users search. Using
              API from OMDB
            </Text>
            <Text type="link" style={{ cursor: "pointer", color: "#400de8" }}>
              Learn More
            </Text>
          </Space>
        </div>
      </Space>
    </div>
  );
};

export default Home;
