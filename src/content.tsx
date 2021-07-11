import { element } from "prop-types";
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
      <FrameContextConsumer>
        {({ document }) => {
          document.body.style = "margin: 0;";
          return <App />;
        }}
      </FrameContextConsumer>
    </Frame>
  );
};

export default Main;

const app = document.createElement("div");
const button = document.createElement("div");
const container = document.createElement("div");



app.id = "my-extension-root";
button.id = "drag-button";
container.classList.add("container");

app.appendChild(button);
app.appendChild(container);
document.body.appendChild(app);

ReactDOM.render(<Main />, container);

app.style.display = "none";

function toggle() {
  if (app.style.display === "none") {
    app.style.display = "flex";
    // Reset
    app.style.top = "";
    app.style.left = "";
    app.style.bottom = "0";
    app.style.right = "0";
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


// For Dragging Injected Component
dragElement(
  document.getElementById("my-extension-root") as HTMLElement,
  document.getElementById("drag-button") as HTMLElement
);


function dragElement(elem: HTMLElement, button: HTMLElement) {
  button.onmousedown = dragMouseDown;

  function dragMouseDown(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();

    document.onmouseup = closeDragElement; // Register onMouseUp only when MouseDown
    document.onmousemove = elementDrag; // For tracking pointer registered  MouseMove
  }

  function elementDrag(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();

    elem.style.top = e.clientY - 28 + "px";
    elem.style.left = e.clientX - 32 + "px";
  }

  // When MouseDown
  function closeDragElement() {
    document.onmouseup = null; // clear MouseUp so we can again Register MouseDown
    document.onmousemove = null; // No need to track pointer
  }
}
