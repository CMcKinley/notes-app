import { useState } from "react";
import StoreTools from "../utils";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addNoteToStore } from "../notes";

const storeTools = new StoreTools();

// The purpose of this hook is to add new not to the db and redux store on success
const useAddNotes = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  async function addNote(newNote) {
    setLoading(true);
    try {

      // POST note to DB
      const { data } = await storeTools.post(`notes`, newNote);
      const { id } = data || {};

      // Add new note to redux store
      dispatch(addNoteToStore({...newNote, id}));

    } catch (err) {
      toast.error("Failed to add note.");
    }
    setLoading(false);
  }

  return [addNote, isLoading];
};

export default useAddNotes;
