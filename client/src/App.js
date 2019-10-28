import React from "react";
import { Switch, Route } from "react-router";
import NotesContainer from "./Views/NotesContainer";

const App = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={NotesContainer} />
      </Switch>
    </main>
  );
}

export default App;
