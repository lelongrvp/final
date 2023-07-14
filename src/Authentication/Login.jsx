import { Input, Space } from "antd";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/authenticate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    const { token } = await response.json();
    localStorage.setItem("token", token);
    navigate("/");
  };

  return (
    <Space
      direction="vertical"
      style={{
        alignItems: "center",
        textAlign: "center",
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
    >
      <Title>Login</Title>
      <form onSubmit={handleSubmit}>
        <Space direction="vertical">
          <label htmlFor="username">Username:</label>
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password:</label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </Space>
      </form>
    </Space>
  );
};

export default Login;
