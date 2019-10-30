import React from "react";
import renderer from "react-test-renderer";
import NoteContainer from "./index.js";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { defultState } from "store/notes";
export const mockStore = configureStore([]);

const initialState = { notes: defultState  };
const store = mockStore(initialState);

it("Renders correctly", () => {
  const component = renderer.create(
    <Provider store={store}>
      <NoteContainer />
    </Provider>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
