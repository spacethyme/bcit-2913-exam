import './App.css';
import books from './data.js';

function App() {
  console.log(books);
  return (
    <div className="App">
      <p>hello world</p>
      <p>{JSON.stringify(books)}</p>
    </div>
  );
}

export default App;
