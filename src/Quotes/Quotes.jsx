import { Button, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";

const { Text, Title } = Typography;

const Quotes = () => {
  const [quote, setQuote] = useState(null);

  const getQuote = () => {
    axios.get("http://localhost:3000/quote").then((response) => {
      console.log(response);
      const myQuote = response.data;
      setQuote(myQuote);
    });
  };

  useEffect(getQuote, []);

  return (
    <div>
      <Text level={3}>{(quote || {}).quote || "No data"}</Text>
      <Title level={5}>{(quote || {}).author || "No data"}</Title>
      <Button
        style={{ width: "fit-content" }}
        onClick={() => {
          getQuote();
        }}
      >
        Generate new quote
      </Button>
    </div>
  );
};
export default Quotes;
