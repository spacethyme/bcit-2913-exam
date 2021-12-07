import { useState } from 'react';
import './App.css';
import books from './data.js';
import BookDetails from './BookDetails';
import BookList from './BookList';

function App() {
  console.log(books);

  const [activeBook, setActiveBook] = useState(0);

  return (
    <div className="App">
      <BookDetails activeBook={activeBook} />
      <BookList setActiveBook={setActiveBook} />
    </div>
  );
}

export default App;
