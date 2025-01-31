/* components/BookList.js */
import React, { useEffect, useState } from 'react';
import { useFilter } from '../context/FilterContext';
import BookItem from './BookItem';

// Sample static data
const allBooks = [
  { id: 1, title: 'The Great Gatsby', price: 10.99 },
  { id: 2, title: '1984', price: 8.99 },
  { id: 3, title: 'To Kill a Mockingbird', price: 12.5 },
  // add more if you want
];

function BookList() {
  const { searchTerm } = useFilter();
  const [filteredBooks, setFilteredBooks] = useState(allBooks);

  useEffect(() => {
    // Filter books based on search term
    const lowerSearch = searchTerm.toLowerCase();
    const newBooks = allBooks.filter((b) =>
      b.title.toLowerCase().includes(lowerSearch)
    );
    setFilteredBooks(newBooks);
  }, [searchTerm]);

  console.log('BookList rendered');

  return (
    <div style={{ marginTop: '20px' }}>
      <h2>Available Books</h2>
      {filteredBooks.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
}

export default BookList;
