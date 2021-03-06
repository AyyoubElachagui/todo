import React from "react";
import ReactDOM from "react-dom";
import Todos from "./components/todos";

ReactDOM.render(
  <React.StrictMode>
    <Todos />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
