import { useState } from "react";
import "./Calculator.css";
import { Button, Input, Space } from "antd";

const Calculator = () => {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    if (
      e.target.name === "+" ||
      e.target.name === "-" ||
      e.target.name === "*" ||
      e.target.name === "/"
    ) {
      if (result === "") {
        return;
      }
      const lastChar = result[result.length - 1];
      if (
        lastChar === "+" ||
        lastChar === "-" ||
        lastChar === "*" ||
        lastChar === "/"
      ) {
        setResult(result.slice(0, -1).concat(e.target.name));
      } else {
        setResult(result.concat(e.target.name));
      }
    } else {
      setResult(result.concat(e.target.name));
    }
  };

  const deleteElement = () => {
    setResult(result.slice(0, -1));
  };

  const clear = () => {
    setResult("");
  };

  const calculate = () => {
    let resultArray = result.split("");
    let numbers = [];
    let operators = [];
    let number = "";
    for (let i = 0; i < resultArray.length; i++) {
      if (
        resultArray[i] === "+" ||
        resultArray[i] === "-" ||
        resultArray[i] === "*" ||
        resultArray[i] === "/"
      ) {
        operators.push(resultArray[i]);
        numbers.push(number);
        number = "";
      } else {
        number += resultArray[i];
      }
    }
    numbers.push(number);
    let resultNumber = parseFloat(numbers[0]);
    for (let i = 0; i < operators.length; i++) {
      if (operators[i] === "+") {
        resultNumber += parseFloat(numbers[i + 1]);
      } else if (operators[i] === "-") {
        resultNumber -= parseFloat(numbers[i + 1]);
      } else if (operators[i] === "*") {
        resultNumber *= parseFloat(numbers[i + 1]);
      } else if (operators[i] === "/") {
        resultNumber /= parseFloat(numbers[i + 1]);
      }
    }
    setResult(resultNumber);
  };
  return (
    <div
      className="wrapper"
      style={{
        padding: 20,
        marginLeft: 20,
        boxShadow:
          "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px",
        borderRadius: 10,
        width: "fit-content",
        height: "fit-content",
      }}
    >
      <Space direction="vertical">
        <Input
          type="text"
          readOnly
          value={result}
          style={{
            marginBottom: "15px",
            width: "440px",
            boxSizing: "border-box",
          }}
        />
      </Space>
      <div className="keypad">
        <Space direction="vertical">
          <Button onClick={deleteElement} id="delete">
            &#8592;
          </Button>
          <Button onClick={clear} id="clear">
            C
          </Button>
          <Button name="." onClick={handleClick}>
            .
          </Button>
          <Button name="(" onClick={handleClick} disabled>
            (
          </Button>
        </Space>
        <Space direction="vertical">
          <Button name="7" onClick={handleClick}>
            7
          </Button>
          <Button name="4" onClick={handleClick}>
            4
          </Button>
          <Button name="1" onClick={handleClick}>
            1
          </Button>
          <Button name=")" onClick={handleClick} disabled>
            )
          </Button>
        </Space>
        <Space direction="vertical">
          <Button name="8" onClick={handleClick}>
            8
          </Button>
          <Button name="5" onClick={handleClick}>
            5
          </Button>
          <Button name="2" onClick={handleClick}>
            2
          </Button>
          <Button name="0" onClick={handleClick}>
            0
          </Button>
        </Space>
        <Space direction="vertical">
          <Button name="9" onClick={handleClick}>
            9
          </Button>
          <Button name="6" onClick={handleClick}>
            6
          </Button>
          <Button name="3" onClick={handleClick}>
            3
          </Button>
          <Button
            onClick={calculate}
            style={{
              backgroundColor: "#f21b0c",
            }}
          >
            =
          </Button>
        </Space>
        <Space direction="vertical">
          <Button name="*" onClick={handleClick}>
            &times;
          </Button>
          <Button name="/" onClick={handleClick}>
            &divide;
          </Button>
          <Button name="+" onClick={handleClick}>
            +
          </Button>
          <Button name="-" onClick={handleClick}>
            -
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Calculator;
