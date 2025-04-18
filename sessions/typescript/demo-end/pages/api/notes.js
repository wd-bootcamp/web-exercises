let notes = [];

export default function handler(req, res) {
  if (req.method === 'GET') {
    return res.status(200).json(notes);
  }

  if (req.method === 'POST') {
    const { title, content } = req.body;
    const newNote = { id: Date.now(), title, content };
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
