import React from "react";
import renderer from "react-test-renderer";
import { App } from "./ex1";

describe("xxx", () => {
  it("xxx", () => {
    const app = renderer.create(<App />);
    console.log(app.toJSON());
  });
});
