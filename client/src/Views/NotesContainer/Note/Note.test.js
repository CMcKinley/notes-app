import React from "react";
import renderer from "react-test-renderer";
import Note from "./index.js";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { defultState } from "store/notes";
import { BrowserRouter as Router } from "react-router-dom";
export const mockStore = configureStore([]);

const initialState = { notes: defultState };
const store = mockStore(initialState);

describe("Note", () => {
  it("Renders correctly", () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <Note />
        </Router>
      </Provider>
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
