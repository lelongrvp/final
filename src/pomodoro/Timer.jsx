import { Space } from "antd";

const Timer = (props) => {
  const minutes = Math.floor(props.time / 60);
  const seconds = props.time % 60;

  return (
    <Space
      style={{
        width: "fit-content",
        padding: "10px",
        fontSize: "40px",
      }}
    >
      {minutes < 10 ? `0${minutes}` : minutes}:
      {seconds < 10 ? `0${seconds}` : seconds}
    </Space>
  );
};

export default Timer;
