import React, { memo } from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import moment from "moment";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Create";
import { setNoteToEdit } from "store/notes.js";
import { useDispatch } from "react-redux";

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
  const { text, created, updated, id } = useSelector(
    state => state.notes.noteMap[noteId]
  );

  const formattedDate = moment(created).format("MMMM, DD, YYYY");
  const today = moment(created).format("MMMM, DD, YYYY");

  return (
    <li className={classes.listItem}>
      <div className={classes.dateText}>
        {today === formattedDate ? "Today" : formattedDate}
        <IconButton onClick={() => dispatch(setNoteToEdit(id))}>
          <EditIcon fontSize="small" />
        </IconButton>
      </div>
      <div className={classes.note}>{text}</div>
      <div className={`${classes.dateText} ${classes.bottom}`}>
        <span>{moment(created).format("h:mma")}</span>
        {updated && <span>Edited</span>}
      </div>
    </li>
  );
};

export default memo(Note);
