import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useAddNotes, useEditNotes } from "store/hooks";
import { useSelector } from "react-redux";
import ActionButtons from "./ActionButtons";
import { useDispatch } from "react-redux";
import { setNoteToEdit } from "store/notes";

const useStyles = makeStyles(() => ({
  errorText: {
    fontSize: ".7em",
    color: "red"
  },
  inputWrapper: {
    flex: 1,
    maxWidth: "1000px",
    background: "white",
    borderRadius: "6px",
    padding: "4px 16px 8px",
    margin: "8px"
  },
  textField: {
    background: "white",
    borderRadius: "6px"
  }
}));

const NotePad = ({ setOpen, noteIdToBeEdited }) => {
  const classes = useStyles();
  const [text, setText] = useState("");
  const [nonprintable, setNonprintable] = useState(false);
  const [addNotes, isLoading] = useAddNotes();
  const [editNotes, editIsLoading] = useEditNotes();
  const dispatch = useDispatch();

  // Get note to be edited details from store
  const noteToBeEdited = useSelector(state =>
    noteIdToBeEdited ? state.notes.noteMap[noteIdToBeEdited] : null
  );

  // If there is a note to be edited load the text in the state variable
  useEffect(() => {
    if (noteToBeEdited) setText(noteToBeEdited.text);
  }, [noteToBeEdited]);

  // Handle input change.
  function handleChange(e) {
    const value = e.target.value;
    // If there are non printable characters set error in state. Remove error if new value meets condition.
    if (value && !/^[ -~\t\n\r]+$/.test(value)) {
      setNonprintable(true);
    } else if (nonprintable) {
      setNonprintable(false);
    }
    // Sets the input value to the text state variable.
    setText(e.target.value);
  }

  // Handle submit note.
  async function handleSubmit() {
    const trimmedText = text ? text.trim() : text;
    // If there is noteIdToBeEdited call edit function, otherwise call add note function
    if (noteIdToBeEdited) {
      await editNotes({ ...noteToBeEdited, text: trimmedText });
    } else {
      await addNotes({ text: trimmedText });
    }
    // Close note pad
    setOpen(false);
  }

  async function handleCancel() {
    // If there is a note to be edited remove from store
    if (noteIdToBeEdited) dispatch(setNoteToEdit(null));
    // Close note pad
    setOpen(false);
  }

  // Render note pad
  return (
    <>
      <div className={classes.inputWrapper}>
        <TextField
          id="note"
          className={classes.textField}
          label={noteIdToBeEdited ? "Edit Note" : "New Note"}
          value={text}
          multiline
          fullWidth
          error={nonprintable}
          margin="normal"
          onChange={handleChange}
        />
        {nonprintable && (
          <div className={classes.errorText}>
            Please remove non-printable characters
          </div>
        )}
      </div>
      <ActionButtons
        disableSubmit={nonprintable || !text || isLoading || editIsLoading}
        handleSubmit={handleSubmit}
        handleCancel={handleCancel}
      />
    </>
  );
};

NotePad.propTypes = {
  noteIdToBeEdited: PropTypes.string,
  setOpen: PropTypes.func
};

NotePad.defaultProps = {
  noteIdToBeEdited: "",
  setOpen: function() {}
};

export default memo(NotePad);
