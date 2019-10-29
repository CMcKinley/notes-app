import React, { memo } from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Create";
import { setNoteToEdit } from "store/notes.js";
import { useDispatch } from "react-redux";
import DateText from "./DateText";

const useStyles = makeStyles(() => ({
  dateText: {
    fontSize: ".7em"
  },
  bottom: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between"
  },
  note: {
    width: "100%",
    margin: "8px 0 16px 0"
  },
  content: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between"
  },
  listItem: {
    padding: "8px 16px",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    alignItems: "center",
    transition: "all .3s ease",
    borderRadius: "none",
    "&:hover": { background: "rgba(0,0,0,0.1)" }
  }
}));

const Note = ({ noteId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  // Get note details from store by the noteId prop
  const { text, created, updated, id } = useSelector(
    state => state.notes.noteMap[noteId]
  );

  // Render note list item
  return (
    <li className={classes.listItem}>
      <div className={classes.content}>
        <div className={classes.note}>{text}</div>
        <IconButton onClick={() => dispatch(setNoteToEdit(id))}>
          <EditIcon fontSize="small" />
        </IconButton>
      </div>
      <div className={`${classes.dateText} ${classes.bottom}`}>
      <DateText  dateToDisplay={created} />
        {updated && (
          <DateText text="Edited" dateToDisplay={updated} />
        )}
      </div>
    </li>
  );
};

Note.propTypes = {
  noteId: PropTypes.string
};

Note.defaultProps = {
  noteId: ""
};

export default memo(Note);
