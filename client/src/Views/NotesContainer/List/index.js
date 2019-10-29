import React, { memo, useEffect, Fragment } from "react";
import Note from "./Note";
import { useSelector } from "react-redux";
import { useGetNotes } from "store/hooks";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

const useStyles = makeStyles(() => ({
  list: {
    margin: "76px 8% 76px",
  }
}));

const NotesList = () => {
  const classes = useStyles();
  const [getNotes, isLoading] = useGetNotes();

  // Get list of noteIds from store
  const noteIds = useSelector(state => state.notes.noteIds);

  // Get list of notes when first rendering
  useEffect(() => {
    getNotes();
  }, []);

  // Render list
  return (
    <section>
      {isLoading && <LinearProgress />}
      <List className={classes.list}>
        {noteIds.map((id, i) => (
          <Fragment key={id}>
            <Note key={id} noteId={id} />
            <Divider />
          </Fragment>
        ))}
      </List>
    </section>
  );
};

export default memo(NotesList);
