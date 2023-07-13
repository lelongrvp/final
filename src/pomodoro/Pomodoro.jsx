import { useState, useEffect } from "react";
import Timer from "./Timer";
import Mode from "./Mode";
import Settings from "./Settings";
import Button from "./Buttons";
import { Space } from "antd";

const Pomodoro = () => {
  const [workTime, setWorkTime] = useState(10);
  const [restTime, setRestTime] = useState(5);
  const [time, setTime] = useState(workTime);
  const [mode, setMode] = useState("work");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    }

    if (time === 0) {
      setMode((prevMode) => (prevMode === "work" ? "rest" : "work"));
      setTime(mode === "work" ? restTime : workTime);
    }

    return () => clearInterval(intervalId);
  }, [running, time, mode, workTime, restTime]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setTime(workTime);
    setMode("work");
    setRunning(false);
  };

  const handleWorkTimeChange = (event) => {
    setWorkTime(parseInt(event.target.value));
  };

  const handleRestTimeChange = (event) => {
    setRestTime(parseInt(event.target.value));
  };

  return (
    <div
      className="pomodoro-clock"
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px        ",
        borderRadius: 10,
        width: "fit-content",
        textAlign: "center",
        marginLeft: 20,
      }}
    >
      <Timer time={time} />
      <Mode mode={mode} />
      <Space direction="vertical">
        <Settings
          workTime={workTime}
          restTime={restTime}
          onWorkTimeChange={handleWorkTimeChange}
          onRestTimeChange={handleRestTimeChange}
        />
        <Space direction="horizontal">
          <Button
            label={running ? "Stop" : "Start"}
            onClick={running ? handleStop : handleStart}
          />
          <Button label="Reset" onClick={handleReset} />
        </Space>
      </Space>
    </div>
  );
};

export default Pomodoro;
