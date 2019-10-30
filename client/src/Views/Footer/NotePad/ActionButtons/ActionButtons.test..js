import React from "react";
import renderer from "react-test-renderer";
import ActionButtons from "./index.js";

describe("ActionButtons", () => {
  it("Renders correctly", () => {
    const component = renderer.create(<ActionButtons />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
