import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(() => ({
  header: {
    margin: "8px 16px"
  }
}));

const Header = () => {
  const classes = useStyles();

  // Render Header
  return (
    <AppBar>
      <Typography variant="h6" className={classes.header}>
        Notes
      </Typography>
    </AppBar>
  );
};

export default Header;
