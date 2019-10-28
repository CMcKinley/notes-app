import { handleActions, createAction } from "redux-actions";
import cloneDeep from "lodash.clonedeep";

const defaultState = {
  noteIds: [],
  noteMap: {}
};

const prefix = "NOTES/";

// Action Creators
export const setNotes = createAction(`${prefix}SET_NOTES`);
export const editNote = createAction(`${prefix}EDIT_NOTE`);
export const addNote = createAction(`${prefix}ADD_NOTE`);

// Reducer
export default handleActions({
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

  // Edit an existing Note
  [editNote]: (state, { payload: { id, text } }) => {
    // The values of the note map are objects so we need to clone deep the noteMap to ensure each object's properties are not references to the original
    const newMap = cloneDeep(state.noteMap);
    
    const noteToBeEdited = { ...newMap[id] };
    noteToBeEdited.text = text;
    newMap[id] = noteToBeEdited;
    return { ...state, noteMap: newMap };
  },

  // Add a new note to the id array and note map
  [addNote]: (state, { payload }) => {
    const { id } = payload || {};
    const noteIds = [...state.noteIds];

    // The values of the note map are objects so we need to clone deep the noteMap to ensure each object's properties are not references to the original
    const noteMap = cloneDeep(state.newMap);

    noteIds.push(payload.id);
    noteMap[id] = payload;
    return { ...state, noteIds, noteMap };
  },
  defaultState
});
