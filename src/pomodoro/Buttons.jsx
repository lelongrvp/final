import { Button } from "antd";
const Buttons = (props) => {
  return (
    <div style={{ marginLeft: "10px", display: "inline" }}>
      <Button
        className="button"
        onClick={props.onClick}
        style={{ marginTop: "10px" }}
      >
        {props.label}
      </Button>
    </div>
  );
};

export default Buttons;
