import React from "react";
import renderer from "react-test-renderer";
import Header from "./index.js";

describe("Header", () => {
  it("Renders correctly", () => {
    const component = renderer.create(<Header />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
