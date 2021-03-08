import React from "react";
import ReactDOM from "react-dom";
import { App } from "./ex1";

describe("xxx", () => {
  it("xxx", () => {
    const container = document.createElement("div");
    document.body.appendChild(container);
    ReactDOM.render(<App />, container);
  });
});
