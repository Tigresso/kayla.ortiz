import logo from '/Users/kaylaortiz/Desktop/kayla.ortiz.github.io/src/kayla ortiz.jpg';
import logo2 from '/Users/kaylaortiz/Desktop/kayla.ortiz.github.io/src/Tigress.JPG';
import logo3 from '/Users/kaylaortiz/Desktop/kayla.ortiz.github.io/src/art.jpg';


import './App.css';

function App() {
  return (
    <div className="App">
       <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo2" alt="logo2" />
        <img src={logo3} className="App-logo3" alt="logo3" />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <img src={logo2} className="App-logo2" alt="logo2" /> */}
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
