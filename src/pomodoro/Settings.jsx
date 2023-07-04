import { Input, Space, Typography } from "antd";

const { Text } = Typography;

const Settings = (props) => {
  return (
    <Space direction="vertical" style={{ padding: "10px" }}>
      <Space>
        <Text>Work Time:</Text>
        <Input
          type="number"
          id="work-time"
          min="1"
          max="60"
          value={props.workTime}
          onChange={props.onWorkTimeChange}
          style={{ width: 400, marginLeft: 23 }}
        />
      </Space>
      <Space>
        <Text>Rest Time:</Text>
        <Input
          type="number"
          id="rest-time"
          min="1"
          max="60"
          value={props.restTime}
          onChange={props.onRestTimeChange}
          style={{ width: 400, marginLeft: 30 }}
        />
      </Space>
    </Space>
  );
};

export default Settings;
