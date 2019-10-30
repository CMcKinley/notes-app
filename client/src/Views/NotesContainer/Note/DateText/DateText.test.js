import React from "react";
import renderer from "react-test-renderer";
import DateText from "./index.js";

describe("DateText", () => {
  it("Renders correctly", () => {
    const component = renderer.create(<DateText dateToDisplay="2019-10-30T00:46:18.276Z"  />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
