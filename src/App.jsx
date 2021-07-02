import React from "react";

function App() {
  // 2012, 12, 12, 22
  let time = new Date();
time = time.getHours();
let output = " ";
const css = {};

if (time >= 0 && time < 12) {
  output = "Good Morning";
  css.color = "skyblue";
} else if (time >= 12 && time < 18) {
  output = "Good Afternoon";
  css.color = "orange";
} else {
  output = "Good Night";
  css.color = "darkblue";
}

  return (
    <div>
      <h1>
        Hello Hrithik, <span style={css}>{output}</span>
      </h1>
    </div>
  );
}

export default App;
