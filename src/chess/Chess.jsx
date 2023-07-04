import { useState } from "react";
import ChessBoard from "./ChessBoard";
import "./Chess.css";
import { Button, ColorPicker, Input, Space } from "antd";
import Title from "antd/es/typography/Title";

const Chess = () => {
  const [size, setSize] = useState(8);
  const [black, setBlack] = useState("#000000");
  const [white, setWhite] = useState("#ffffff");

  const handleClick = () => {
    setBlack(white);
    setWhite(black);
  };

  return (
    <div className="App" style={{ padding: 30 }}>
      <Space direction="vertical">
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
          <ColorPicker
            defaultValue={black}
            onChange={(e) => {
              console.log(e.target.value);
              setBlack(e.target.value);
            }}
          />
          <ColorPicker
            defaultValue={white}
            onChange={(e) => {
              console.log(e.target.value);
              setWhite(e.target.value);
            }}
          />
        </Space>
        <Button
          onClick={() => {
            handleClick();
          }}
        >
          Switch
        </Button>
      </Space>
      <div>
        <ChessBoard size={size} black={black} white={white} />
      </div>
    </div>
  );
};

export default Chess;
