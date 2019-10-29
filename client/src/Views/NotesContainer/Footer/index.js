import React, { memo, useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { useSelector } from "react-redux";
import NotePad from "./NotePad";

const useStyles = makeStyles(() => ({
  container: {
    background: "#1976d2",
    display: "flex",
    justifyContent: "center"
  },
  appBar: {
    top: "auto",
    bottom: 0,
    display: "flex",
    justifyContent: "center",
    color: "#fff",
    backgroundColor: "#3f51b5",
    position: "fixed",
    width: "100%"
  },
  fab: {
    margin: "8px"
  }
}));

const Footer = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const noteIdToBeEdited = useSelector(state => state.notes.noteToEdit);

  useEffect(() => {
    if (noteIdToBeEdited) {
      setOpen(true);
    } else if (!noteIdToBeEdited && open) {
      setOpen(true);
    }
  }, [noteIdToBeEdited]);

  return (
    <div className={classes.appBar}>
      {open ? (
        <NotePad setOpen={setOpen} noteIdToBeEdited={noteIdToBeEdited} />
      ) : (
        <Fab
          size="small"
          aria-label="add"
          onClick={() => setOpen(true)}
          className={classes.fab}
        >
          <AddIcon />
        </Fab>
      )}
    </div>
  );
};

export default memo(Footer);
