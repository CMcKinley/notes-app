import { handleActions, createAction } from "redux-actions";
import cloneDeep from "lodash.clonedeep";

const defultState = {
  noteIds: [],
  noteMap: {},
  noteToEdit: null
};

const prefix = "NOTES/";

// Action Creators
export const setNotes = createAction(`${prefix}SET_NOTES`);
export const editNoteInStore = createAction(`${prefix}EDIT_NOTE`);
export const addNoteToStore = createAction(`${prefix}ADD_NOTE`);
export const setNoteToEdit = createAction(`${prefix}SET_NOTE_TO_EDIT`);

// Reducer
export default handleActions(
  {
    // Load notes into state. Notes are stored as an array of ids and an object where each key is the note's id and the value is the note object itself.
    [setNotes]: (state, { payload }) => {
      const notes = payload || [];
      const noteIds = [];
      const noteMap = {};

      notes.forEach(note => {
        const { id } = note || {};
        noteIds.push(id);
        noteMap[id] = note;
      });

      return { ...state, noteIds, noteMap };
    },

    // Edit an existing note
    [editNoteInStore]: (state, { payload }) => {
      const { id } = payload || {};
      // The values of the note map are objects so we need to clone deep the noteMap to ensure each object's properties are not references to the original
      const newMap = cloneDeep(state.noteMap);
      newMap[id] = { ...newMap[id], ...payload };
      return { ...state, noteMap: newMap };
    },

    // Add a new note to the id array and note map
    [addNoteToStore]: (state, { payload }) => {
      const { id } = payload || {};
      const noteIds = [...state.noteIds];
      // The values of the note map are objects so we need to clone deep the noteMap to ensure each object's properties are not references to the original
      const noteMap = cloneDeep(state.noteMap);
      // Add note to beginning of array
      noteIds.unshift(payload.id);
      noteMap[id] = payload;
      return { ...state, noteIds, noteMap };
    },

    // Set the note that is to be edited in store
    [setNoteToEdit]: (state, { payload }) => ({ ...state, noteToEdit: payload })
  },
  defultState
);
