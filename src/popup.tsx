import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import Navigator from "./assets/navigator.gif";

function PopUp(): ReactElement {
  return (
    <div>
      <img src={Navigator} alt="demo" />
    </div>
  );
}

ReactDOM.render(<PopUp />, document.getElementById("root"));
