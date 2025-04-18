import { NextApiRequest, NextApiResponse } from 'next';

// Note is defined in a global .d.ts file (types/note.d.ts) and haven’t imported it explicitly, because TypeScript can find it automatically.
let notes: Note[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json(notes);
  }

  if (req.method === 'POST') {
    const { title, content } = req.body;
    if (!title) {
      return res.status(400).json({ error: 'Title is required' });
    }
    const newNote: Note = { id: Date.now(), title, content };
    notes.push(newNote);
    return res.status(201).json(newNote);
  }

  if (req.method === 'DELETE') {
    const { id } = req.body;
    notes = notes.filter(note => note.id !== id);
    return res.status(200).json({ message: 'Note deleted' });
  }

  res.status(405).end(); // Method Not Allowed
}
