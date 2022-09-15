import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import Dog from "./Dog";

const App = () => (
  <div className="container">

  <Dog />

    
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
