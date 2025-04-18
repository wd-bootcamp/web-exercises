import { useEffect, useState } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';

export default function Home() {
  const [notes, setNotes] = useState<Note[]>([]);

  const fetchNotes = async () => {
    const res = await fetch('/api/notes');
    const data = await res.json();
    setNotes(data);
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const addNote = async (note: Note) => {
    await fetch('/api/notes', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(note),
    });
    fetchNotes();
  };

  const deleteNote = async (id: string) => {
    await fetch('/api/notes', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    fetchNotes();
  };

  return (
    <div>
      <h1>📝 My Notes</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} />
    </div>
  );
}
