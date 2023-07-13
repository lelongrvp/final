import "./App.css";
import { Menu, Layout, Typography, Button } from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  CalculatorOutlined,
  ClockCircleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  InsuranceOutlined,
  CloudOutlined,
  PlaySquareOutlined,
} from "@ant-design/icons";
import MyContent from "./Content";
import { useState } from "react";
const { Footer, Header, Sider, Content } = Layout;

const { Text, Title } = Typography;

const App = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("");
  const [theme, setTheme] = useState("dark");
  const handleMenuClick = ({ key }) => {
    setSelected(key);
    navigate(key);
  };

  const refreshPage = () => {
    window.location.reload(false);
  };
  let title = "Home";
  if (selected === "/home") {
    title = "Home";
  } else if (selected === "/chessboard") {
    title = "Chessboard";
  } else if (selected === "/calculator") {
    title = "Calculator";
  } else if (selected === "/pomodoro") {
    title = "Pomodoro Clock";
  } else if (selected === "/weather") {
    title = "Weather";
  } else if (selected === "/movie") {
    title = "Movie";
  }

  return (
    <Layout>
      <Layout
        style={{
          minHeight: "calc(100vh - 70px)",
        }}
      >
        <Sider theme={theme} collapsed={collapsed}>
          <Menu
            theme={theme}
            onClick={handleMenuClick}
            items={[
              {
                label: "Home",
                key: "/home",
                icon: <HomeOutlined />,
              },
              {
                label: "Chessboard",
                key: "/chessboard",
                icon: <InsuranceOutlined />,
              },
              {
                label: "Calculator",
                key: "/calculator",
                icon: <CalculatorOutlined />,
              },
              {
                label: "Pomodoro clock",
                key: "/pomodoro",
                icon: <ClockCircleOutlined />,
              },
              {
                label: "Weather",
                key: "/weather",
                icon: <CloudOutlined />,
              },
              {
                label: "Movie",
                key: "/movie",
                icon: <PlaySquareOutlined />,
              },
            ]}
          ></Menu>
        </Sider>
        <Content>
          <Header
            style={
              theme === "light"
                ? {
                    background: "white",
                    paddingInline: 0,
                    borderBottom: "1px solid #cecece",
                  }
                : {
                    background: "#001529",
                    paddingInline: 0,
                  }
            }
          >
            <div style={{ display: "flex", padding: 10 }}>
              <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => setCollapsed(!collapsed)}
                style={
                  theme == "light"
                    ? {
                        fontSize: "16px",
                        width: "fit-content",
                        marginRight: 20,
                        color: "black",
                      }
                    : {
                        fontSize: "16px",
                        width: "fit-content",
                        marginRight: 20,
                        color: "white",
                      }
                }
              />
              <Title
                style={
                  theme == "light"
                    ? {
                        fontSize: "32px",
                        flex: 1,
                        color: "black",
                        cursor: "pointer",
                        textTransform: "uppercase",
                      }
                    : {
                        fontSize: "32px",
                        flex: 1,
                        color: "white",
                        cursor: "pointer",
                        textTransform: "uppercase",
                      }
                }
                onClick={() => {
                  refreshPage();
                }}
              >
                Ultimate App
              </Title>
              <Button
                onClick={() => {
                  theme == "light" ? setTheme("dark") : setTheme("light");
                }}
                style={
                  theme == "light"
                    ? {
                        width: "6em",
                        padding: 0,
                        marginTop: 5,
                        justifyContent: "center",
                        borderRadius: "10px",
                      }
                    : {
                        width: "6em",
                        padding: 0,
                        marginTop: 5,
                        justifyContent: "center",
                        borderRadius: "10px",
                        background: "#00213f",
                        color: "white",
                        border: "none",
                      }
                }
              >
                {theme == "light" ? "Light" : "Dark"}
              </Button>
            </div>
          </Header>
          <Text
            style={{
              background: "#fff",
              display: "inline-block",
              width: "100vw",
              padding: 20,
              textTransform: "uppercase",
              fontSize: 24,
              fontWeight: "bold",
            }}
          >
            {title}
          </Text>
          <MyContent />
        </Content>
      </Layout>
      <Footer
        style={
          theme == "light"
            ? {
                textAlign: "center",
                background: "white",
                color: "black",
                borderTop: "1px solid #e8e8e8",
              }
            : { textAlign: "center", background: "#001529", color: "white" }
        }
      >
        Copyright @2023 by Le Duc Long
      </Footer>
    </Layout>
  );
};

export default App;
