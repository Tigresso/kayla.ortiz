import logo from '/Users/kaylaortiz/Desktop/kayla.ortiz.github.io/src/kayla ortiz.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */}
          My name is Kayla and I'm going to master React!
        </p>
        <a
          className="App-link"
          href="https://github.com/Tigresso/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Check Me Out!
        </a>
      </header>
    </div>
  );
}

export default App;
