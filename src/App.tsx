import * as React from "react";
import Text from "./components/Text";
import { getColor } from "./design/colors";

document.body.style.backgroundColor = getColor("background");

function App() {
  return (
    <div>
      <header>
        <Text size="xxl">Casa del Beige</Text>
      </header>
      <iframe
        title="gold"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/zOndEfwUdPo?autoplay=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}

export default App;
