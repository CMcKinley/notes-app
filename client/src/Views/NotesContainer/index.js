import React, { memo } from "react";
import Footer from "./Footer";
import NotesList from "./List";

const NotesContainer = () => {
  return (
    <>
      <NotesList />
      <Footer />
    </>
  );
};

export default memo(NotesContainer);
