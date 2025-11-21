import React, { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import styles from "./NoteForm.module.css";

const NoteForm = () => {
  const [text, setText] = useState("");
  const { addNote } = useContext(NotesContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    await addNote(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        placeholder="Write a note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className={styles.button}>
        Add
      </button>
    </form>
  );
};

export default NoteForm;
