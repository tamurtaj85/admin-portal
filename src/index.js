import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { ReactRouterSetup } from "./routes/index";

ReactDOM.render(
  <ReactRouterSetup>
    <App />
  </ReactRouterSetup>,

  document.getElementById("root")
);
