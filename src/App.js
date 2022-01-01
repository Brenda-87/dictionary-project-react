import "./App.css";
import book from "./images/book-black-white.jpeg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={book} className="App-image" width="400" height="200"></img>
      </header>
    </div>
  );
}

export default App;
