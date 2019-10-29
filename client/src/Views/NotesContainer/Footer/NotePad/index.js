import React, { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useAddNotes, useEditNotes } from "store/hooks";
import { useSelector } from "react-redux";
import ActionButtons from "./ActionButtons";

const useStyles = makeStyles(() => ({
  errorText: {
    fontSize: ".7em",
    color: "red"
  },
  inputWrapper: {
    flex: 1,
    maxWidth: "600px",
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
  const noteToBeEdited = useSelector(state =>
    noteIdToBeEdited ? state.notes.noteMap[noteIdToBeEdited] : null
  );

  useEffect(() => {
    if (noteToBeEdited) setText(noteToBeEdited.text);
  }, [noteToBeEdited]);

  // Handle input change. If there are non printable characters set error in state.
  function handleChange(e) {
    const value = e.target.value;
    if (value && !/^[ -~\t\n\r]+$/.test(value)) {
      setNonprintable(true);
    } else if (nonprintable) {
      setNonprintable(false);
    }
    setText(e.target.value);
  }

  async function handleSubmit() {
    if (noteIdToBeEdited) {
      await editNotes({ ...noteToBeEdited, text });
    } else {
      await addNotes({ text });
    }
    setOpen(false);
  }

  async function handleCancel() {
    setOpen(false);
  }

  return (
    <>
      <div className={classes.inputWrapper}>
        <TextField
          id="note"
          className={classes.textField}
          label="New Note"
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
