import { useState } from "react";
import ChessBoard from "./ChessBoard";
import "./Chess.css";
import { Button, Input, Space, Typography } from "antd";

const { Title } = Typography;

const Chess = () => {
  const [size, setSize] = useState(8);
  const [black, setBlack] = useState("#000000");
  const [white, setWhite] = useState("#ffffff");

  const handleClick = () => {
    setBlack(white);
    setWhite(black);
  };

  return (
    <div className="chess" style={{ padding: 20 }}>
      <Space direction="vertical">
        <Title level={2}>Chess Board</Title>
        <Input
          style={{ width: "400px" }}
          type="number"
          min={0}
          value={size}
          onChange={(e) => {
            console.log(e.target.value);
            setSize(e.target.value);
          }}
        />
        <Space direction="horizontal">
          <input
            type="color"
            defaultValue={black}
            onChange={(e) => {
              setBlack(e.target.value);
            }}
            style={{ width: 40, height: 40 }}
          />
          <input
            type="color"
            defaultValue={white}
            onChange={(e) => {
              setWhite(e.target.value);
            }}
            style={{ width: 40, height: 40 }}
          />
        </Space>
        <Button
          onClick={() => {
            handleClick();
          }}
        >
          Switch
        </Button>
        <Button
          onClick={() => {
            setSize(8);
            setBlack("#000");
            setWhite("#fff");
          }}
        >
          Reset
        </Button>
      </Space>
      <div>
        <ChessBoard size={size} black={black} white={white} />
      </div>
    </div>
  );
};

export default Chess;
