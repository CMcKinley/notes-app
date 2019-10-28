import React from "react";
import { Switch, Route } from "react-router";
import NotesContainer from "./Views/NotesContainer";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={NotesContainer} />
      </Switch>
      <ToastContainer />
    </main>
  );
};

export default App;
