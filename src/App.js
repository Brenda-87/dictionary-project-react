import Dictionary from "./Dictionary";

import "./App.css";
import book from "./images/book-black-white.jpeg";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={book}
          alt="book"
          className="App-image mb-3"
          width="400"
          height="200"
        ></img>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer>
        <small>Coded by Brenda | GitHub & Netlify</small>
      </footer>
    </div>
  );
}
