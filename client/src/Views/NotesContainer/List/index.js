import React, { memo, useEffect } from "react";
import Note from "./Note";
import { useSelector } from "react-redux";
import { useGetNotes } from "store/hooks";

const NotesList = () => {
  const [getNotes, isLoading] = useGetNotes();

  const noteIds = useSelector(state => state.notes.noteIds);

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <section>
      {noteIds.map(id => (
        <Note key={id} noteId={id} />
      ))}
    </section>
  );
};

export default memo(NotesList);
