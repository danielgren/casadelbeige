import * as React from "react";
import { getColor } from "./design/colors";

document.body.style.backgroundColor = getColor("background");

function App() {
  return (
    <div>
      <header className="App-header">
        <p>ewfwfwefwef</p>
      </header>
      <iframe
        title="gold"
        width="0"
        height="0"
        style={{ border: 0 }}
        src="https://www.youtube.com/embed/zOndEfwUdPo?enablejsapi=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
}

export default App;
