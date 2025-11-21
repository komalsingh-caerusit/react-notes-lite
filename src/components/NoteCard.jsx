import React, { useContext, useState } from "react";
import { NotesContext } from "../context/NotesContext";
import styles from "./NoteCard.module.css";

const NoteCard = ({ note }) => {
  const { deleteNote, editNote } = useContext(NotesContext);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState(note.text);

  const saveEdit = async () => {
    await editNote(note.id, text);
    setEditing(false);
  };

  return (
    <div className={styles.card}>
      {editing ? (
        <>
          <input value={text} onChange={(e) => setText(e.target.value)} />
          <button onClick={saveEdit} className={styles.cardButton}>
            Save
          </button>
        </>
      ) : (
        <>
          <div>{note.text}</div>
          <button
            onClick={() => setEditing(true)}
            className={styles.cardButton}
          >
            Edit
          </button>
        </>
      )}
      <button
        onClick={() => deleteNote(note.id)}
        className={styles.cardButton}
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;
