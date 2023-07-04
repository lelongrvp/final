const Mode = (props) => {
  return (
    <div
      className="mode"
      style={{
        padding: "10px",
        fontSize: "30px",
      }}
    >
      {props.mode === "work" ? "Work" : "Rest"}
    </div>
  );
};

export default Mode;
