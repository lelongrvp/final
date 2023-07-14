import "./App.css";
import { Menu, Layout, Typography, Button, Avatar, Space } from "antd";
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
  UserOutlined,
} from "@ant-design/icons";
import MyContent from "./Content";
import { useState } from "react";
import ScrollToTopButton from "./ScrollToTopButton";
const { Footer, Header, Sider, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [theme, setTheme] = useState("dark");

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleMenuClick = ({ key }) => {
    navigate(key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout
        style={{
          minHeight: "calc(100vh - 70px)",
        }}
      >
        <Sider
          theme={theme}
          collapsed={collapsed}
          style={{ textAlign: "center", paddingTop: 20 }}
        >
          <Space direction="vertical" style={{ marginBottom: 20 }}>
            <Avatar
              icon={<UserOutlined />}
              size={!collapsed ? 100 : 50}
              style={{ background: "#f56a00" }}
            />
            {!collapsed ? (
              <Title
                level={3}
                style={
                  theme == "light" ? { color: "black" } : { color: "white" }
                }
              >
                Lê Đức Long
              </Title>
            ) : (
              <Title
                level={3}
                style={
                  theme == "light" ? { color: "black" } : { color: "white" }
                }
              >
                L
              </Title>
            )}
          </Space>
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
            style={{
              textAlign: "left",
              borderTop: "1px solid #cecece",
              paddingTop: 20,
            }}
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
              >
                Ultimate App
              </Title>
              <Button
                onClick={handleLoginClick}
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
                Login
              </Button>
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
          <MyContent />
        </Content>
      </Layout>
      <Footer
        style={
          theme == "light"
            ? {
                textAlign: "center",
                background: "#fff",
                height: 154,
              }
            : {
                textAlign: "center",
                background: "#001529",
                height: 154,
              }
        }
      >
        <div style={{ display: "flex" }}>
          <Title
            level={3}
            style={
              theme == "light"
                ? { marginTop: 38, color: "black", flex: 1 }
                : { marginTop: 38, color: "white", flex: 1 }
            }
          >
            Copyright @2023 by Le Duc Long
          </Title>
          <ScrollToTopButton />
        </div>
      </Footer>
    </Layout>
  );
};

export default App;
