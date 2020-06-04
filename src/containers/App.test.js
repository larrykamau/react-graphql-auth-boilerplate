import App from "./App";
import React from "react";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const component = renderer.create(<App />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
