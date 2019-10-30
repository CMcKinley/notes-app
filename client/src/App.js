import React from "react";
import { Switch, Route } from "react-router";
import NotesContainer from "./Views/NotesContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "./Views/Footer";
import Header from "./Views/Header";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    flexDirection: "column",
    height: "100%"
  }
}));

const App = () => {
  const classes = useStyles();

  // Render app
  return (
    <main className={classes.container}>
      <Header />
      <Switch>
        <Route exact path="/" component={NotesContainer} />
        <Route exact path="/:noteId" component={NotesContainer} />
      </Switch>
      <Footer />
      <ToastContainer />
    </main>
  );
};

export default App;
