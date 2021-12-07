import { useState } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BookList from './BookList';

export default function App() {
  const [activeBook, setActiveBook] = useState(0);

  return (
    <div className="App">
      <BookDetails activeBook={activeBook} />
      <BookList setActiveBook={setActiveBook} />
    </div>
  );
}
