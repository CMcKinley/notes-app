import React, { memo } from "react";
import { useSelector } from "react-redux";

const Note = ({ noteId }) => {
  const { text } = useSelector(state => state.notes.noteMap[noteId]);
  return <div>{text}</div>;
};

export default memo(Note);
