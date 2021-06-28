import React, { ReactElement } from "react";
import ReactDOM from "react-dom";
import Frame, { FrameContextConsumer } from "react-frame-component";
import App from "./App";

const Main = (): ReactElement => {
  return (
    <Frame
      head={[
        <link
          type="text/css"
          rel="stylesheet"
          key="content-css"
          href={chrome.runtime.getURL("/static/css/content.css")}
        ></link>,
      ]}
    >
      <App />
    </Frame>
  );
};

export default Main;

const app = document.createElement("div");

app.id = "my-extension-root";

document.body.appendChild(app);

ReactDOM.render(<Main />, app);

app.style.display = "none";

function toggle() {
  if (app.style.display === "none") {
    app.style.display = "block";
  } else {
    app.style.display = "none";
  }
}

chrome.runtime.onMessage.addListener(function (request: any) {
  console.log("hellooo");
  const { message } = request;
  if (message === "BROWSER_ACTION_CLICKED") {
    toggle();
  }
});
