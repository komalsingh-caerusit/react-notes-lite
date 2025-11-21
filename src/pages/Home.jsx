import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteForm from "../components/NoteForm";
import NoteCard from "../components/NoteCard";

const Home = () => {
  const { notes, loading, error } = useContext(NotesContext);

  return (
    <div className="page">
      <h2>Notes</h2>
      {loading && <p>Loading Notes...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <NoteForm />

      {!loading && notes.length === 0 && <p>No notes available.</p>}

      <div className="notes-list">
        {notes.map((note) => (
          <NoteCard key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Home;
