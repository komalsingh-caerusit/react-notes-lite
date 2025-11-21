import React, { createContext, useEffect, useState } from "react";
import {
  createNote,
  deleteNoteByID,
  fetchNotes,
  updateNoteByID,
} from "../services/notesService";

// eslint-disable-next-line react-refresh/only-export-components
export const NotesContext = createContext();

export default function NotesProvider({ children }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadNotes();
  }, []);

  async function loadNotes() {
    setLoading(true);
    setError(null);

    try {
      const res = await fetchNotes();
      setNotes(res.data);
    } catch (err) {
      console.log("error", err);
      setError("Failed to load notes");
    } finally {
      setLoading(false);
    }
  }

  async function addNote(text) {
    try {
      const newNote = { text };
      const res = await createNote(newNote);
      setNotes((prev) => [...prev, res.data]);
    } catch (err) {
      console.log("error", err);
      setError("Failed to add note");
    }
  }

  async function deleteNote(id) {
    try {
      await deleteNoteByID(id);
      setNotes((prev) => prev.filter((n) => n.id !== id));
    } catch (err) {
      console.log("error", err);
      setError("Failed to add note");
    }
  }

  async function editNote(id, newText) {
    try {
      const updatedNote = { text: newText };
      const res = await updateNoteByID(id, updatedNote);

      setNotes((prev) =>
        prev.map((note) => (note.id === id ? res.data : note))
      );
    } catch (err) {
      console.log("error", err);
      setError("Failed to add note");
    }
  }

  return (
    <NotesContext.Provider
      value={{ notes, addNote, deleteNote, editNote, loading, error }}
    >
      {children}
    </NotesContext.Provider>
  );
}
