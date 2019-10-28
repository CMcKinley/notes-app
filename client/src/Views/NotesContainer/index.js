import React, { memo } from "react";
import NotePad from "./NotePad";
import NotesList from "./List";

const NotesContainer = () => {
  return (
    <div>
      <NotePad />
      <NotesList />
    </div>
  );
};

export default memo(NotesContainer);
