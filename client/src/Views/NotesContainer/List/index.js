import React, { memo, useEffect, Fragment } from "react";
import Note from "./Note";
import { useSelector } from "react-redux";
import { useGetNotes } from "store/hooks";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  list: {
    margin: "16px 8%"
  }
}));

const NotesList = () => {
  const classes = useStyles();
  const [getNotes, isLoading] = useGetNotes();

  const noteIds = useSelector(state => state.notes.noteIds);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <List className={classes.list}>
      {noteIds.map((id, i) => (
        <Fragment key={id}>
          <Note key={id} noteId={id} />
          <Divider />
        </Fragment>
      ))}
    </List>
  );
};

export default memo(NotesList);
