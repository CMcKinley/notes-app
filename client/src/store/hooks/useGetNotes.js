import { useState } from "react";
import StoreTools from "../utils";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setNotes } from "../notes";

const storeTools = new StoreTools();

const useGetNotes = () => {
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  async function getNotes() {
    setLoading(true);
    try {
      const { data } = await storeTools.get("notes");
      const { notes } = data || {};
      dispatch(setNotes(notes || []));
    } catch (err) {
      console.log(err);
      toast.error("Failed to fetch notes.");
    }
    setLoading(false);
  }

  return [getNotes, isLoading];
};

export default useGetNotes;
