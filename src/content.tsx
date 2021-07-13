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
const dragButton = document.createElement("div");
const minimizeButton = document.createElement("div");
const container = document.createElement("div");
const opacitySlider = document.createElement("input");

app.id = "my-extension-root";
minimizeButton.id = "minimize-button";
container.classList.add("container");

opacitySlider.id = "opacity-slider";
opacitySlider.type = "range";
opacitySlider.min = "0.5";
opacitySlider.max = "1";
opacitySlider.step = "0.01";
opacitySlider.value = "1";
opacitySlider.classList.add("voicebot-slider");

dragButton.id = "drag-button";
dragButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="12" height="12"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M86,11.15313l-22.0375,21.79562c-1.80062,1.72 -2.53969,4.27313 -1.92156,6.69188c0.61813,2.40531 2.48594,4.3 4.89125,4.945c2.40531,0.645 4.97188,-0.06719 6.70531,-1.85438l5.4825,-5.42875v24.6175c-0.04031,2.48594 1.26313,4.78375 3.41313,6.03344c2.13656,1.26313 4.79719,1.26313 6.93375,0c2.15,-1.24969 3.45344,-3.5475 3.41312,-6.03344v-24.6175l5.4825,5.42875c1.73344,1.78719 4.3,2.49938 6.70531,1.85438c2.40531,-0.645 4.27312,-2.53969 4.89125,-4.945c0.61812,-2.41875 -0.12094,-4.97188 -1.92156,-6.69188zM134.21375,61.94688c-2.795,-0.01344 -5.32125,1.66625 -6.38281,4.25969c-1.075,2.58 -0.45687,5.56312 1.53188,7.525l5.42875,5.4825h-24.6175c-2.48594,-0.04031 -4.78375,1.26312 -6.03344,3.41312c-1.26313,2.13656 -1.26313,4.79719 0,6.93375c1.24969,2.15 3.5475,3.45344 6.03344,3.41313h24.6175l-5.42875,5.4825c-1.78719,1.73344 -2.49938,4.3 -1.85438,6.70531c0.645,2.40531 2.53969,4.27312 4.945,4.89125c2.41875,0.61812 4.97188,-0.12094 6.69188,-1.92156l21.79562,-22.0375l-21.79562,-22.0375c-1.29,-1.34375 -3.06375,-2.09625 -4.93156,-2.10969zM37.57125,61.96031c-1.78719,0.05375 -3.48031,0.80625 -4.73,2.09625l-21.76875,22.0375l21.76875,22.0375c2.67406,2.70094 7.04125,2.72781 9.74219,0.05375c2.70094,-2.67406 2.72781,-7.02781 0.05375,-9.72875l-5.42875,-5.4825h24.60406c2.48594,0.04031 4.79719,-1.26313 6.04688,-3.41313c1.24969,-2.13656 1.24969,-4.79719 0,-6.93375c-1.24969,-2.15 -3.56094,-3.45344 -6.04688,-3.41312h-24.60406l5.42875,-5.4825c2.01563,-1.98875 2.60688,-5.01219 1.49156,-7.61906c-1.11531,-2.60687 -3.72219,-4.25969 -6.5575,-4.15219zM85.8925,103.3075c-3.78937,0.05375 -6.82625,3.17125 -6.7725,6.97406v24.60406l-5.4825,-5.41531c-1.30344,-1.33031 -3.09062,-2.06938 -4.945,-2.06938c-2.80844,0.02688 -5.30781,1.73344 -6.35594,4.34031c-1.03469,2.59344 -0.38969,5.56313 1.62594,7.51156l16.58188,16.39375c0.37625,0.48375 0.81969,0.92719 1.31687,1.30344l4.13875,4.085l4.12531,-4.085c0.51062,-0.37625 0.9675,-0.83312 1.35719,-1.34375l16.555,-16.35344c2.05594,-1.96188 2.70094,-4.98531 1.62594,-7.60563c-1.075,-2.62031 -3.655,-4.31344 -6.50375,-4.25969c-1.80062,0.02688 -3.53406,0.77938 -4.79719,2.08281l-5.4825,5.41531v-24.60406c0.02688,-1.86781 -0.69875,-3.655 -2.01562,-4.97188c-1.31688,-1.31687 -3.10406,-2.0425 -4.97188,-2.00219z"></path></g></g></svg>`;
minimizeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
width="12" height="12"
viewBox="0 0 172 172"
style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M157.66667,71.66667h-143.33333c-7.91917,0 -14.33333,6.41417 -14.33333,14.33333c0,7.91917 6.41417,14.33333 14.33333,14.33333h143.33333c7.91917,0 14.33333,-6.41417 14.33333,-14.33333c0,-7.91917 -6.41417,-14.33333 -14.33333,-14.33333z"></path></g></g></svg>`;

app.appendChild(dragButton);
app.appendChild(minimizeButton);
app.appendChild(container);
app.appendChild(opacitySlider);

document.body.appendChild(app);

ReactDOM.render(<Main />, container);

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
dragElement(app, dragButton);

function dragElement(elem: HTMLElement, button: HTMLElement) {
  button.onmousedown = dragMouseDown;

  function dragMouseDown(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();

    app.style.opacity = "0.1";
    document.body.classList.toggle("grabbing-cursor");

    document.onmouseup = closeDragElement; // Register onMouseUp only when MouseDown
    document.onmousemove = elementDrag; // For tracking pointer registered  MouseMove
  }

  function elementDrag(e: MouseEvent) {
    e = e || window.event;
    e.preventDefault();
  }

  // When MouseDown
  function closeDragElement(e: MouseEvent) {
    elem.style.top = e.clientY - 29 + "px";
    elem.style.left = e.clientX - 39 + "px";

    app.style.opacity = opacitySlider.value;
    document.body.classList.toggle("grabbing-cursor");

    document.onmouseup = null; // clear MouseUp so we can again Register MouseDown
    document.onmousemove = null; // No need to track pointer
  }
}

// For Minimizing Injected Component
minimizeButton.onclick = handleMinimize;
function handleMinimize() {
  app.style.display = "none";
}

opacitySlider.addEventListener("input", () => {
  const opacity = opacitySlider.value;
  app.style.opacity = opacity;
});
