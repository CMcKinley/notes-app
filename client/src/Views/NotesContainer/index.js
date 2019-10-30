import React, { memo, useEffect, Fragment, useState } from "react";
import PropTypes from "prop-types";
import Note from "./Note";
import { useSelector } from "react-redux";
import { useGetNotes } from "store/hooks";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import { toast } from "react-toastify";
import KeyboardArrowLeftIcon from "@material-ui/icons/KeyboardArrowLeft";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(() => ({
  listContainer: {
    margin: "76px 8% 76px"
  }
}));

const NotesContainer = ({ match, history }) => {
  const classes = useStyles();
  const [getNotes, isLoading] = useGetNotes();
  const [displayedIds, setDisplayedIds] = useState([]);
  const { params } = match;
  const { noteId } = params;

  // Get list of noteIds from store
  const noteIds = useSelector(state => state.notes.noteIds);

  // Get list of notes when first rendering
  useEffect(() => {
    getNotes();
  }, []);

  // Set displayed ids if the note id in the url is not found push back to full list and display message
  useEffect(() => {
    if (noteId && noteIds.indexOf(noteId) >= 0) {
      setDisplayedIds([noteId]);
    } else if (noteId && noteIds.length > 0 && noteIds.indexOf(noteId) < 0) {
      toast.error(`Note: ${noteId} not found.`);
      history.push("/");
    } else {
      setDisplayedIds(noteIds);
    }
  }, [noteId, noteIds]);

  // Render list
  return (
    <section>
      {isLoading && <LinearProgress />}
      <div className={classes.listContainer}>
        {noteId && (
          <Button
            size="small"
            className={classes.button}
            startIcon={<KeyboardArrowLeftIcon />}
            onClick={() => history.push("/")}
          >
            See all
          </Button>
        )}
        <List>
          {displayedIds.map(id => (
            <Fragment key={id}>
              <Note key={id} noteId={id} />
              <Divider />
            </Fragment>
          ))}
        </List>
      </div>
    </section>
  );
};

NotesContainer.propTypes = {
  match: PropTypes.object,
  history: PropTypes.object
};

NotesContainer.defaultProps = {
  match: { params: {} },
  history: {}
};

export default memo(NotesContainer);
