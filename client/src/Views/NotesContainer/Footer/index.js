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
  // Get the note Id that is to be edited from store
  const noteIdToBeEdited = useSelector(state => state.notes.noteToEdit);

  // If noteIdToBeEdited changes open the notepad. If the notepad was already open and noteIdToBeEdited is null, undefined or '' then close the notepad
  useEffect(() => {
    if (noteIdToBeEdited) {
      setOpen(true);
    } else if (!noteIdToBeEdited && open) {
      setOpen(false);
    }
  }, [noteIdToBeEdited]);

  // Render footer. Will display action button or notepad depending on the 'open' value
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
