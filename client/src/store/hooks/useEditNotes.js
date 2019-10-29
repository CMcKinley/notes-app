import { useState } from "react";
import StoreTools from "../utils";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { editNoteInStore, setNoteToEdit } from "../notes";

const storeTools = new StoreTools();

// The purpose of this hook is to edit an existing note in the db and in the redux store on success
const useEditNotes = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  async function editNote(editedNote) {
    setLoading(true);
    try {
      // PUT call to update note in db
      const { data } = await storeTools.put(
        `notes/${editedNote.id}`,
        editedNote
      );
      const { id } = data || {};

      // update the note in the redux store
      dispatch(editNoteInStore({ ...editedNote, id }));
      // remove the id from the edit property
      dispatch(setNoteToEdit(null));
    } catch (err) {
      toast.error("Failed to edit note.");
    }
    setLoading(false);
  }

  return [editNote, isLoading];
};

export default useEditNotes;
