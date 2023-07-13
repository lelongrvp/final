import { ArrowUpOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { useState } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Attach scroll event listener
  window.addEventListener("scroll", handleScroll);

  return (
    <Button
      className={`scroll-to-top ${isVisible ? "visible" : ""}`}
      onClick={scrollToTop}
      style={{
        width: "fit-content",
        marginTop: 38,
        borderRadius: "50%",
        paddingLeft: 10,
        paddingRight: 10,
      }}
    >
      <ArrowUpOutlined />
    </Button>
  );
};

export default ScrollToTopButton;
