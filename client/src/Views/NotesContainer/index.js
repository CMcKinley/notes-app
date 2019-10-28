import React, { memo, useEffect } from "react";
import NotePad from "./NotePad";
import NotesList from "./List";
import { useGetNotes } from "store/hooks";

const NotesContainer = () => {
  return (
    <div>
      <NotePad />
      <NotesList />
    </div>
  );
};

export default memo(NotesContainer);
