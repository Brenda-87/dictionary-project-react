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
          className="App-image mb-3 text-center"
          width="400"
          height="200"
        ></img>
      </header>
      <main>
        <Dictionary defaultKeyword="supercalifragilisticexpialidocious" />
      </main>
      <footer className="text-center mb-4">
        <small>
          Coded by Brenda |{" "}
          <a
            href="https://github.com/Brenda-87/dictionary-project-react"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          &{" "}
          <a
            href="https://hopeful-bardeen-d09d69.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Netlify
          </a>
        </small>
      </footer>
    </div>
  );
}
