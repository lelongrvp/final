import "./App.css";
import { Menu, Layout, Typography, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import {
  HomeOutlined,
  CalculatorOutlined,
  ClockCircleOutlined,
  PlaySquareOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons";
import MyContent from "./Content";
import ChessLogo from "./assets/Chess_plt45.svg";
import { useState } from "react";
const { Footer, Header, Sider, Content } = Layout;

const { Text } = Typography;

const App = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [selected, setSelected] = useState("");
  const handleMenuClick = ({ key }) => {
    setSelected(key);
    navigate(key);
  };

  let title = "Title";
  if (selected === "/chessboard") {
    title = "Chessboard";
  } else if (selected === "/calculator") {
    title = "Calculator";
  } else if (selected === "/pomodoro") {
    title = "Pomodoro Clock";
  } else if (selected === "/movie") {
    title = "Movie Info";
  }

  return (
    <Layout>
      <Layout
        style={{
          minHeight: "calc(100vh - 64px - 70px)",
        }}
      >
        <Sider theme="dark" collapsible collapsed={collapsed}>
          <Space>
            <Button
              type="text"
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              style={
                collapsed
                  ? {
                      fontSize: "16px",
                      width: "100%",
                      marginTop: 10,
                      marginLeft: 18,
                      color: "white",
                    }
                  : {
                      fontSize: "16px",
                      width: "100%",
                      marginTop: 10,
                      marginLeft: 8,
                      color: "white",
                    }
              }
            />
            <Text hidden={collapsed ? true : false} style={{ color: "white" }}>
              Ultimate App
            </Text>
          </Space>
          <Menu
            theme="dark"
            onClick={handleMenuClick}
            items={[
              {
                label: "Home",
                key: "/",
                icon: <HomeOutlined />,
              },
              {
                label: "Chessboard",
                key: "/chessboard",
                icon: (
                  <img src={ChessLogo} alt="ChessLogo" width={14} height={14} />
                ),
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
                label: "Movie info",
                key: "/movie",
                icon: <PlaySquareOutlined />,
              },
            ]}
          ></Menu>
        </Sider>
        <Content style={{ paddingLeft: 20 }}>
          <Header style={{ background: "white" }}>
            <Text style={{ fontSize: "24px" }}>{title}</Text>
          </Header>
          <MyContent />
        </Content>
      </Layout>
      <Footer style={{ textAlign: "center", background: "white" }}>
        Copyright @2023 by Le Duc Long
      </Footer>
    </Layout>
  );
};

export default App;
