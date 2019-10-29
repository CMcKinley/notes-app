import React from "react";
import { Switch, Route } from "react-router";
import NotesContainer from "./Views/NotesContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  header: {
    margin: "8px 16px"
  }
}));

const App = () => {
  const classes = useStyles();
  return (
    <main>
      <AppBar position="static">
        <Typography variant="h6" className={classes.header}>
          Notes
        </Typography>
      </AppBar>
      <Switch>
        <Route path="/" component={NotesContainer} />
      </Switch>
      <ToastContainer />
    </main>
  );
};

export default App;
